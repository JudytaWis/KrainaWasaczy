# Zdjęcia i filmy do uzupełnienia

Wszystkie zdjęcia powinny być w formacie JPG lub WebP, zoptymalizowane (np. przez
https://squoosh.app/ lub `sharp`). Pełny rozmiar maksymalnie ~300 KB każde.

## Struktura katalogów

```
public/
├── images/
│   ├── hero.jpg                  (1920 × 2400 — hero strony głównej)
│   ├── rasa.jpg                  (1200 × 900  — sekcja "Český fousek")
│   │
│   ├── mama/                     (Nancy ze Staropleských luk)
│   │   ├── portrait.jpg          (1200 × 1500)
│   │   ├── gallery-1.jpg .. -4.jpg  (1000 × 1000)
│   │
│   ├── tata/                     (Eros z Vallis Baptismi)
│   │   ├── portrait.jpg          (1200 × 1500)
│   │   ├── gallery-1.jpg .. -4.jpg  (1000 × 1000)
│   │
│   ├── miot-a/                   (Miot A — 26.03.2024, zakończony)
│   │   ├── cover.jpg             (1600 × 1200 — okładka)
│   │   ├── 1.jpg .. 6.jpg        (1200 × 1200)
│   │
│   ├── miot-b/                   (Miot B — 27.05.2025, Nancy × Eros)
│   │   ├── cover.jpg
│   │   ├── 1.jpg .. 8.jpg
│   │   ├── basta-1.jpg .. -3.jpg (Basta z Krainy Wąsaczy)
│   │
│   ├── miot-c/                   (Miot C — planowany 2026/2027)
│   │   ├── cover.jpg             (np. zdjęcie Nancy / klimatyczne)
│   │   ├── rodzice-1.jpg .. -2.jpg
│   │
│   └── galeria/                  (strona /galeria, lista w lib/placeholders.ts → GALLERY)
│       ├── nancy-1.jpg .. -3.jpg
│       ├── eros-1.jpg .. -2.jpg
│       ├── miot-a-1.jpg .. -3.jpg
│       ├── miot-b-1.jpg, -2.jpg
│       ├── miot-b-basta-1.jpg, -2.jpg
│       ├── praca-1.jpg .. -6.jpg (praca w polu — wystawianie, aport, tropienie)
│       └── wystawa-1.jpg, -2.jpg
│
├── videos/                       (opcjonalnie — lub osadź jako YouTube)
│   └── praca-w-polu.mp4
│
├── og.jpg                        (1200 × 630, social preview — opcjonalnie)
├── favicon.ico                   (32×32, 16×16 multi-resolution)
│
└── documents/
    ├── nancy-rodowod.pdf         (skan rodowodu suki)
    └── eros-rodowod.pdf          (skan rodowodu reproduktora)
```

## Filmy

Galeria filmów jest w `lib/placeholders.ts` jako stała `GALLERY_VIDEOS`. Dwa
sposoby osadzenia:

1. **YouTube (zalecane)** — po uploadzie filmu, podaj jego ID w polu `youtubeId`.
   Strona automatycznie wstawi sandboxed iframe z domeny `youtube-nocookie.com`.

2. **Własne MP4** — wgraj plik do `public/videos/` i w `app/galeria/page.tsx`
   zmień iframe na `<video src="/videos/...mp4" controls />`.

## Co dalej

Po wgraniu zdjęć podmień bloki `placeholder-frame` na `<Image>` z `next/image`:

```tsx
import Image from 'next/image';

<Image
  src="/images/mama/portrait.jpg"
  alt="Nancy ze Staropleských luk — portret"
  width={1200}
  height={1500}
  className="h-full w-full object-cover"
  priority // tylko dla hero
/>
```

Miejsca z `placeholder-frame` do podmiany (lista nie wyczerpująca):

- `app/page.tsx` — hero, sekcja rasy
- `components/DogCard.tsx` — miniaturka rodzica
- `components/DogDetail.tsx` — portret + galeria
- `app/mioty/page.tsx` — okładki kart miotów
- `app/mioty/[id]/page.tsx` — galeria miotu (4–8 zdjęć)
- `components/GalleryGrid.tsx` — strona /galeria
