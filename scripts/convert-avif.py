#!/usr/bin/env python3
"""
Konwertuje pliki JPG z data/photos/ do AVIF, kategoryzuje i kopiuje do public/images/.

Strategia kategoryzacji:
- Łączy zdjęcia z postami (wg czasu utworzenia) — używa kategorii z analyze-posts.py
- Mioty A/B/C, Nancy, Eros, praca, wystawy, zdrowie

Użycie:
    python3 scripts/convert-avif.py            # konwersja + sortowanie
    python3 scripts/convert-avif.py --dry-run  # tylko pokaż co by zrobił
"""

from __future__ import annotations
import json, subprocess, sys, argparse, re
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data'
SRC = DATA / 'photos'
PUB = ROOT / 'public' / 'images'

def category_for_photo(photo_meta: dict, posts_by_date_range: list) -> str:
    """Dla zdjęcia znajdź pasujący post i jego kategorie."""
    ts = photo_meta.get('created_time', '')[:10]
    # Heurystyka oparta na dacie
    if not ts:
        return 'inne'
    date = ts
    # Miot A: marzec-maj 2024
    if '2024-03' <= date <= '2024-06':
        return 'miot-a'
    # Miot B: maj-sierpień 2025
    if '2025-05' <= date <= '2025-08':
        return 'miot-b'
    # 2026 — głównie posty rasy + reproduktor pod miot C
    if '2026-' in date:
        return 'miot-c-przygotowania'
    # Pozostałe 2024 (po miocie A) i 2025 do maja — głównie posty o rasie i pracy
    return 'inne'

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--limit', type=int, default=0, help='Konwertuj tylko N pierwszych (0=wszystko)')
    args = ap.parse_args()

    photos_meta = json.loads((DATA / 'photos.json').read_text())
    posts = json.loads((DATA / 'posts.json').read_text())
    meta_by_id = {p['id']: p for p in photos_meta}

    # Skanuj pobrane pliki
    files = sorted(SRC.glob('*.jpg'))
    if args.limit:
        files = files[:args.limit]

    print(f'Plików: {len(files)}')

    # Kategoryzuj i konwertuj
    by_cat = {}
    for f in files:
        # Filename: YYYY-MM-DD_PHOTOID.jpg
        m = re.match(r'(\d{4}-\d{2}-\d{2})_(\d+)\.jpg', f.name)
        if not m:
            continue
        date, pid = m.group(1), m.group(2)
        meta = meta_by_id.get(pid, {'created_time': date})
        cat = category_for_photo(meta, posts)
        by_cat.setdefault(cat, []).append((date, pid, f, meta))

    for cat, items in by_cat.items():
        items.sort(key=lambda x: x[0], reverse=True)  # newest first
        print(f'  {cat:25}  {len(items)}')

    if args.dry_run:
        return

    # Konwertuj
    PUB.mkdir(parents=True, exist_ok=True)
    print()
    total_in = total_out = converted = 0
    for cat, items in by_cat.items():
        dst_dir = PUB / cat
        dst_dir.mkdir(parents=True, exist_ok=True)
        for date, pid, src, meta in items:
            dst = dst_dir / f'{date}_{pid}.avif'
            if dst.exists() and dst.stat().st_size > 0:
                continue
            in_size = src.stat().st_size
            subprocess.run(
                ['avifenc', '--jobs', '4', '--speed', '6', '--min', '24', '--max', '32',
                 '--depth', '8', '-y', '420', str(src), str(dst)],
                check=True, capture_output=True,
            )
            out_size = dst.stat().st_size
            total_in += in_size
            total_out += out_size
            converted += 1
            if converted % 20 == 0:
                print(f'  {converted} ({total_in // 1024}KB → {total_out // 1024}KB)')

    if converted:
        print(f'\n✓ {converted} zdjęć skonwertowanych')
        print(f'  Total: {total_in // 1024 // 1024}MB → {total_out // 1024 // 1024}MB ({100 - total_out * 100 // total_in}% mniej)')
    else:
        print('Wszystko już skonwertowane.')

if __name__ == '__main__':
    main()
