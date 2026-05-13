# Kraina Wąsaczy — strona hodowli

Strona internetowa rodzinnej hodowli wyżła czeskiego (Český fousek) z Bibic koło Krakowa.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide icons · Deploy: Vercel.

---

## Uruchomienie lokalne

Wymagane: Node.js 18.18+ (lub 20+), npm 9+.

```bash
npm install
npm run dev
```

Aplikacja pojawi się pod `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm start
```

## Deploy na Vercel

### Opcja 1 — przez GitHub

1. Wrzuć repozytorium na GitHub.
2. Wejdź na https://vercel.com/new i zaimportuj repo.
3. Vercel automatycznie wykryje Next.js — domyślne ustawienia są poprawne.
4. Dodaj domenę `krainawasaczy.pl` w zakładce **Settings → Domains**.
5. Po zmianie domeny zaktualizuj `SITE.url` w `lib/placeholders.ts`.

### Opcja 2 — przez CLI

```bash
npm i -g vercel
vercel              # pierwsze wdrożenie (preview)
vercel --prod       # wdrożenie produkcyjne
```

---

## Co podmienić przed deployem

**Większość danych jest już prawdziwa** (Nancy, Eros, Bibice, telefon, email,
mioty A/B/C, opis rasy z FB). Pozostały drobiazgi — zaznaczone jako `[TODO: ...]`
w `lib/placeholders.ts` oraz `{/* TODO: ... */}` w komponentach.

### 1. Dane do uzupełnienia — `lib/placeholders.ts`

Hodowla / kontakt:

- [x] Nazwa, lokalizacja (Bibice 32-087), telefon, email — gotowe
- [x] Facebook URL — gotowe
- [ ] `SITE.url` — zaktualizuj po wykupieniu domeny (`https://krainawasaczy.pl`)

Rodzice (Nancy + Eros):

- [x] Imiona i przydomki — gotowe
- [x] Opisy charakteru i pochodzenia — gotowe
- [ ] `birthDate` — daty urodzenia obu psów
- [ ] `coat` — maść / typ owłosienia (np. „brązowy deresz")
- [ ] `pedigreeNumber` — numery rodowodowe FCI / ČMKU
- [ ] `sire` / `dam` — imiona rodziców obu psów
- [ ] `health` — wyniki HD, ED, oczu, testów genetycznych
- [ ] `trials` — oficjalne próby pracy / konkursy (numery, daty)
- [ ] `shows` — wyniki wystawowe

Mioty:

- [x] Miot A — data urodzenia (26.03.2024), opis
- [ ] Miot A — imiona rodziców (matka prawdopodobnie Nancy + inny reproduktor)
- [x] Miot B — pełne dane (Nancy × Eros, 27.05.2025, Basta)
- [x] Miot C — termin (zima 2026/2027), rezerwacje otwarte
- [ ] Miot C — reproduktor (do ogłoszenia po zatwierdzeniu krycia)

### 2. Zdjęcia — `public/images/`

Pełna lista i struktura: `public/images/README.md`. Najpilniejsze:

- [ ] `hero.jpg` (1920 × 2400) — główny obraz strony
- [ ] `rasa.jpg` (1200 × 900) — sekcja "Český fousek"
- [ ] `mama/portrait.jpg` + 4× galeria — Nancy
- [ ] `tata/portrait.jpg` + 4× galeria — Eros
- [ ] `miot-a/`, `miot-b/`, `miot-c/` — zdjęcia z każdego miotu
- [ ] `galeria/...` — zdjęcia do strony /galeria (lista w `GALLERY` w `placeholders.ts`)
- [ ] `og.jpg` (1200 × 630) — opcjonalnie; dynamiczny OG działa też bez tego
- [ ] `favicon.ico` — zastąp placeholder własnym logo

### 3. Filmy

W `lib/placeholders.ts` → `GALLERY_VIDEOS` mamy 3 placeholdery z `youtubeId: null`.
Po nagraniu i wgraniu na YouTube — wpisz `youtubeId: 'XXXXXXXXXXX'` i pojawi się
osadzone bezpieczne iframe.

Alternatywa: pliki MP4 w `public/videos/` (zobacz `public/images/README.md`).

### 4. Dokumenty PDF — `public/documents/`

- [ ] `nancy-rodowod.pdf`
- [ ] `eros-rodowod.pdf`

### 5. Polityka prywatności

- [ ] Utwórz `app/polityka-prywatnosci/page.tsx` lub podlinkuj do gotowego dokumentu w `components/Footer.tsx`.

### 6. Formularze — backend (opcjonalnie później)

Obecnie formularze (kontakt + rezerwacja) otwierają klienta poczty (mailto:). Aby
wysyłać bezpośrednio z serwera:

1. Utwórz API routes `app/api/contact/route.ts` i `app/api/reservation/route.ts`
   z walidacją po stronie serwera (np. `zod`).
2. Podłącz Resend (https://resend.com/) lub Formspree.
3. Zaktualizuj komponenty `ContactForm.tsx` / `ReservationForm.tsx` — zastąp
   blok `mailto:` wywołaniem `fetch(...)`.
4. Dodaj rate-limiting + hCaptcha / Turnstile.

---

## Struktura projektu

```
kraina-wasaczy/
├── app/
│   ├── layout.tsx              # Header, Footer, fonty, Organization JSON-LD
│   ├── page.tsx                # Strona główna
│   ├── rodzice/
│   │   ├── page.tsx            # Lista rodziców
│   │   ├── mama/page.tsx       # Nancy
│   │   └── tata/page.tsx       # Eros
│   ├── mioty/
│   │   ├── page.tsx            # Lista miotów A / B / C
│   │   └── [id]/page.tsx       # Dynamiczne podstrony A, B, C (SSG)
│   ├── rezerwacja/page.tsx     # Formularz rezerwacji szczeniaka
│   ├── galeria/page.tsx        # Galeria z filtrami + filmy
│   ├── kontakt/page.tsx        # Kontakt + mapa
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── opengraph-image.tsx     # Dynamiczny OG image
│   └── globals.css             # Tailwind + custom utilities
├── components/
│   ├── Header.tsx              # Sticky nav, dropdown (Rodzice, Mioty), CTA Rezerwacja
│   ├── Footer.tsx              # Kontakt, linki, FB
│   ├── MapEmbed.tsx            # Iframe OpenStreetMap
│   ├── DogCard.tsx             # Karta rodzica (lista)
│   ├── DogDetail.tsx           # Pełna podstrona rodzica
│   ├── ContactForm.tsx         # Mailto:
│   ├── ReservationForm.tsx     # Formularz rezerwacji (mailto:)
│   ├── GalleryGrid.tsx         # Galeria z filtrami
│   └── JsonLd.tsx              # Helper structured data
├── lib/
│   ├── placeholders.ts         # WSZYSTKIE dane hodowli (SSOT)
│   └── seo.ts                  # pageMetadata, breadcrumbs, organization JSON-LD
├── public/
│   ├── images/                 # Zdjęcia — zob. README.md w środku
│   ├── videos/                 # (opcjonalnie) pliki MP4 do galerii
│   ├── documents/              # PDF rodowodów
│   └── favicon.ico
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## SEO i dostępność

- **Metadata API** na każdej podstronie — title, description, OG, Twitter.
- **JSON-LD**:
  - `LocalBusiness` (additionalType: Dog_breeder) w layoucie głównym
  - `BreadcrumbList` na każdej podstronie
  - `Offer` (availability: PreOrder) na `/mioty/c` — miot z otwartymi rezerwacjami
- **sitemap.xml** + **robots.txt** generowane dynamicznie. Miot C ma `priority: 0.95`
  i `changefreq: weekly` aby przyspieszyć indeksowanie.
- **Open Graph** image generowany dynamicznie przez `app/opengraph-image.tsx`.
- **lang="pl"** + `prefers-reduced-motion` respektowany.
- Skip-link do treści, semantyczny HTML, focus-visible, alt na obrazach.

## Wydajność

- Statyczne generowanie wszędzie poza komponentami z `'use client'` (`Header`, `ContactForm`, `ReservationForm`, `GalleryGrid`).
- `next/font` z Inter + Cormorant Garamond — preload + `display: swap`.
- Brak ciężkich bibliotek (żadnego framer-motion, MUI itp.).
- Tailwind tree-shake.
- YouTube embedy: `youtube-nocookie.com` + `loading="lazy"` — bez wpływu na LCP do momentu interakcji.

---

## Licencja

Wszystkie prawa zastrzeżone © Kraina Wąsaczy.
