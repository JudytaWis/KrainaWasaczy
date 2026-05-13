#!/usr/bin/env python3
"""
Analizuje data/posts.json i kategoryzuje:
- mioty A/B/C — daty, opisy, hashtagi
- charakterystyka rasy
- praca w polu / łowisko
- zdrowie / porady
- ogólne

Zwraca raport + zapisuje data/analysis.json z metadanymi do podpięcia pod stronę.
"""

from __future__ import annotations
import json, re, sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data'

posts = json.loads((DATA / 'posts.json').read_text())

# Kategoryzacja heurystyczna
def categorize(msg: str, date: str) -> list[str]:
    if not msg:
        return ['empty']
    m = msg.lower()
    tags = []
    # mioty
    if re.search(r'\bmiot[\s_]?a\b|miota|2024\.03\.26|26\.03\.2024', m):
        tags.append('miot-a')
    if re.search(r'\bmiot[\s_]?b\b|miotb|basta|2025\.05\.27|27\.05\.2025', m):
        tags.append('miot-b')
    if re.search(r'\bmiot[\s_]?c\b|miotc|planowan', m):
        tags.append('miot-c')
    # rodzice
    if 'nancy' in m or 'staropleských' in m or 'staropleskich' in m:
        tags.append('nancy')
    if 'eros' in m or 'vallis baptismi' in m:
        tags.append('eros')
    # praca
    if any(k in m for k in ['łowisk', 'lowisk', 'polowani', 'aport', 'wystawian', 'tropien', 'praca w pol', 'praca w lesi']):
        tags.append('praca')
    # rasa / poradnik
    if any(k in m for k in ['fousek', 'czeski fousek', 'wyżeł czesk', 'rasa', 'charakter rasy']):
        tags.append('rasa')
    if any(k in m for k in ['kleszcz', 'szczepien', 'zdrowie', 'pielegnac', 'pielęgnac', 'bravecto', 'choroba', 'weterynar']):
        tags.append('zdrowie')
    # szczenięta
    if any(k in m for k in ['szczeni', 'puppy', 'maluch']):
        tags.append('szczenieta')
    # wystawy
    if any(k in m for k in ['wystaw', 'ring', 'sędzia', 'sedzia', 'ocena hodowlana']):
        tags.append('wystawy')
    # rezerwacja
    if any(k in m for k in ['rezerwac', 'zapisy otwarte', 'dostępne szczen']):
        tags.append('rezerwacja')
    return tags or ['inne']

cat_counts = defaultdict(int)
cat_posts = defaultdict(list)
all_hashtags = defaultdict(int)

for p in posts:
    msg = p.get('message', '') or ''
    date = p.get('created_time', '')[:10]
    tags = categorize(msg, date)
    for t in tags:
        cat_counts[t] += 1
        cat_posts[t].append({
            'id': p['id'],
            'date': date,
            'preview': msg[:200].replace('\n', ' '),
            'permalink': p.get('permalink_url', ''),
            'has_picture': bool(p.get('full_picture')),
            'attachments': len(p.get('attachments', {}).get('data', [])),
        })
    # hashtagi
    for h in re.findall(r'#[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+', msg):
        all_hashtags[h.lower()] += 1

print('═══ KATEGORIE ═══')
for cat, n in sorted(cat_counts.items(), key=lambda x: -x[1]):
    print(f'  {cat:15} {n}')

print('\n═══ TOP HASHTAGI (>=3 wystąpień) ═══')
for h, n in sorted(all_hashtags.items(), key=lambda x: -x[1]):
    if n >= 3:
        print(f'  {h:30} {n}')

print('\n═══ POSTY O MIOCIE A ═══')
for p in cat_posts['miot-a'][:5]:
    print(f"  {p['date']}  {p['preview'][:120]}")

print('\n═══ POSTY O MIOCIE B ═══')
for p in cat_posts['miot-b'][:5]:
    print(f"  {p['date']}  {p['preview'][:120]}")

print('\n═══ POSTY O MIOCIE C ═══')
for p in cat_posts['miot-c'][:5]:
    print(f"  {p['date']}  {p['preview'][:120]}")

# Zapisz analizę
analysis = {
    'total_posts': len(posts),
    'categories': dict(cat_counts),
    'hashtags': dict(all_hashtags),
    'posts_by_category': {k: v[:30] for k, v in cat_posts.items()},
}
(DATA / 'analysis.json').write_text(json.dumps(analysis, ensure_ascii=False, indent=2))
print('\n✓ Analiza zapisana w data/analysis.json')
