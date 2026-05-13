#!/usr/bin/env python3
"""
Pobiera wszystkie posty, zdjęcia i filmy ze strony Kraina Wąsaczy.

Wymaga .env.local z FB_TOKEN. Skrypt:
1. Zamienia User Token na Page Access Token
2. Pobiera wszystkie posty z paginacją (tekst + załączniki + data)
3. Zapisuje data/posts.json
4. Pobiera wszystkie zdjęcia w max rozdzielczości → data/photos/
5. Pobiera filmy/rolki → data/videos/ (limit, można podać --videos N)

Użycie:
    python3 scripts/fb-fetch.py                # wszystko
    python3 scripts/fb-fetch.py --videos 20    # tylko 20 najnowszych filmów
    python3 scripts/fb-fetch.py --posts-only   # tylko teksty postów, bez mediów
"""

from __future__ import annotations
import os, sys, json, urllib.request, urllib.parse, argparse, time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data'
PHOTOS = DATA / 'photos'
VIDEOS = DATA / 'videos'

def load_env():
    env = {}
    p = ROOT / '.env.local'
    if not p.exists():
        sys.exit('Brak .env.local')
    for line in p.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        env[k.strip()] = v.strip().strip('"').strip("'")
    return env

def fb_get(path, **params):
    base = 'https://graph.facebook.com/v21.0'
    q = urllib.parse.urlencode(params)
    url = f'{base}/{path}?{q}'
    with urllib.request.urlopen(url) as r:
        return json.load(r)

def paginate(path, **params):
    out = []
    next_url = None
    while True:
        if next_url:
            with urllib.request.urlopen(next_url) as r:
                data = json.load(r)
        else:
            data = fb_get(path, **params)
        out.extend(data.get('data', []))
        next_url = data.get('paging', {}).get('next')
        if not next_url:
            break
    return out

def download(url, dest: Path):
    if dest.exists() and dest.stat().st_size > 0:
        return False  # already have it
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as r, open(dest, 'wb') as f:
        f.write(r.read())
    return True

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--videos', type=int, default=999, help='ile filmów pobrać (default: wszystko)')
    ap.add_argument('--posts-only', action='store_true', help='tylko teksty postów')
    ap.add_argument('--photos-only', action='store_true', help='tylko zdjęcia')
    args = ap.parse_args()

    env = load_env()
    user_token = env['FB_TOKEN']

    # Get page access token
    accounts = fb_get('me/accounts', access_token=user_token)
    page = accounts['data'][0]
    PAGE_TOKEN = page['access_token']
    PAGE_ID = page['id']
    print(f'✓ Page: {page["name"]} ({PAGE_ID})')

    DATA.mkdir(exist_ok=True)

    # ── 1. POSTY ─────────────────────────────────────────────────────
    print('\n📝 Pobieram posty...')
    posts = paginate(
        f'{PAGE_ID}/posts',
        fields='id,message,created_time,permalink_url,full_picture,attachments{type,subattachments,media,url,description,title},status_type',
        limit=100,
        access_token=PAGE_TOKEN,
    )
    print(f'  {len(posts)} postów')
    (DATA / 'posts.json').write_text(json.dumps(posts, ensure_ascii=False, indent=2))

    # Wyciągnij hashtagi i daty żeby zobaczyć kategoryzację
    by_year = {}
    for p in posts:
        year = (p.get('created_time') or '')[:4]
        by_year[year] = by_year.get(year, 0) + 1
    print(f'  Rozkład wg roku: {by_year}')

    if args.posts_only:
        print('\n✓ Tylko posty pobrane. Konwersja: data/posts.json')
        return

    # ── 2. ZDJĘCIA ───────────────────────────────────────────────────
    if not args.photos_only or not args.photos_only is True:
        print('\n📸 Pobieram listę zdjęć...')
        photos = paginate(
            f'{PAGE_ID}/photos',
            type='uploaded',
            fields='id,name,created_time,images,link,album',
            limit=100,
            access_token=PAGE_TOKEN,
        )
        print(f'  {len(photos)} zdjęć')
        (DATA / 'photos.json').write_text(json.dumps(photos, ensure_ascii=False, indent=2))

        print('  Pobieram pliki...')
        new_count = 0
        for i, ph in enumerate(photos, 1):
            # images[0] is highest resolution
            if not ph.get('images'):
                continue
            best = max(ph['images'], key=lambda im: im.get('width', 0) * im.get('height', 0))
            src = best['source']
            ts = ph.get('created_time', '')[:10]
            pid = ph['id']
            dest = PHOTOS / f'{ts}_{pid}.jpg'
            if download(src, dest):
                new_count += 1
            if i % 25 == 0:
                print(f'    {i}/{len(photos)} ({new_count} nowych)')
        print(f'  ✓ {new_count} nowych zdjęć w data/photos/')

    if args.photos_only:
        return

    # ── 3. FILMY / ROLKI ─────────────────────────────────────────────
    print('\n🎬 Pobieram listę filmów/rolek...')
    videos = paginate(
        f'{PAGE_ID}/videos',
        fields='id,title,description,created_time,permalink_url,source,length,picture',
        limit=100,
        access_token=PAGE_TOKEN,
    )
    print(f'  {len(videos)} filmów')
    (DATA / 'videos.json').write_text(json.dumps(videos, ensure_ascii=False, indent=2))

    print(f'  Pobieram do {args.videos} najnowszych...')
    new_count = 0
    for i, v in enumerate(videos[: args.videos], 1):
        src = v.get('source')
        if not src:
            continue
        ts = v.get('created_time', '')[:10]
        vid = v['id']
        dest = VIDEOS / f'{ts}_{vid}.mp4'
        try:
            if download(src, dest):
                new_count += 1
        except Exception as e:
            print(f'    ⚠ {vid}: {e}')
        if i % 5 == 0:
            print(f'    {i}/{args.videos} ({new_count} nowych)')
    print(f'  ✓ {new_count} nowych filmów w data/videos/')

    print('\n✓ Wszystko pobrane do data/')

if __name__ == '__main__':
    main()
