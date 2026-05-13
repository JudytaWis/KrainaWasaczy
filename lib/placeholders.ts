/**
 * Centralny plik z danymi hodowli. Wszystkie podstrony i komponenty czerpią stąd
 * dane — aby cokolwiek zmienić, wystarczy edytować ten jeden plik.
 *
 * Pola oznaczone TODO wciąż wymagają informacji od hodowcy (numery FCI rodziców,
 * pełne metryki, dokładne daty miotu A).
 */

export const SITE = {
  name: 'Kraina Wąsaczy',
  fullName:
    'Kraina Wąsaczy — Hodowla wyżła czeskiego (Český fousek) FCI',
  shortDescription: 'Hodowla wyżła czeskiego (Český fousek) FCI',
  longDescription:
    'Rodzinna hodowla wyżła czeskiego (Český fousek) zarejestrowana w Związku Kynologicznym w Polsce (FCI). Hodowla założona z pasji do mało znanej w Polsce, wspaniałej czeskiej rasy. Hodowca jest myśliwym — psy wychowywane są w klimacie łowieckim, z naciskiem na linie użytkowe.',
  // TODO: docelowy adres po wdrożeniu
  url: 'https://krainawasaczy.pl',
  locale: 'pl_PL',
  city: 'Bibice',
  region: 'małopolskie',
  county: 'gmina Zielonki',
  country: 'PL',
  postalCode: '32-087',
  // Pełny adres nie jest podawany publicznie — podstrona kontakt informuje,
  // że hodowla mieści się w Bibicach, a odbiór szczeniąt odbywa się w Krakowie.
  street: 'Bibice',
  pickupCity: 'Kraków',
  // Bibice (gmina Zielonki) — koordynaty z Facebook Page
  geo: { lat: 50.13319, lng: 19.96707 },
  facebookUrl:
    'https://www.facebook.com/p/Kraina-W%C4%85saczy-Hodowla-wy%C5%BC%C5%82a-czeskiego-Fousek-FCI-61557084189380/',
  registration: 'ZKwP / FCI',
  tagline: 'Prawdziwy myśliwy zna wartość dobrego psa.',
};

export const CONTACT = {
  // Telefon hodowli — w użyciu WhatsApp oraz Messenger
  phone: '+48602494344',
  phoneDisplay: '+48 602 494 344',
  email: 'wyzel.czeski.fousek@gmail.com',
  // Hodowla nie publikuje sztywnych godzin — kontakt elastyczny
  hoursWeekdays: '10:00 – 20:00',
  hoursWeekend: '10:00 – 18:00',
  whatsappUrl: 'https://wa.me/48602494344',
  messengerNote: 'Wiadomości na Messengerze przez fanpage hodowli',
};

export type Dog = {
  slug: 'mama' | 'tata';
  role: 'Suka hodowlana' | 'Reproduktor';
  name: string;
  kennelName: string;
  fullName: string;
  /** Krótki cytat z opisu FB — używany na kartach i w hero podstrony */
  tagline: string;
  birthDate: string;
  coat: string;
  pedigreeNumber: string;
  origin: string;
  sire: string;
  dam: string;
  health: string[];
  trials: string[];
  shows: string[];
  character: string;
  description: string;
  /** Czy pies mieszka u hodowcy (true) czy jest reproduktorem z zewnątrz (false) */
  livesAtKennel: boolean;
  galleryCount: number;
  pedigreePdfPath: string;
  /** Główne zdjęcie psa — używane na kartach i hero podstrony */
  portraitImage?: string;
  /** Galeria zdjęć psa — używana na podstronie /rodzice/[slug] */
  galleryImages?: readonly string[];
};

export const MAMA: Dog = {
  slug: 'mama',
  role: 'Suka hodowlana',
  name: 'Aria',
  kennelName: 'ze Staropleských luk',
  fullName: 'Aria (Nancy ze Staropleských luk)',
  tagline:
    'Suczka o wyjątkowej psychice, naturalnym talencie użytkowym i silnym przywiązaniu do człowieka.',
  birthDate: '[TODO: data urodzenia — DD.MM.RRRR]',
  coat: 'Brązowy deresz, duża, silna sylwetka — typowy eksterier rasy',
  pedigreeNumber: '[TODO: numer rodowodowy FCI / ČMKU]',
  origin: 'Hodowla „ze Staropleských luk" (Czechy) — pełne imię hodowlane: Aria (Nancy ze Staropleských luk)',
  sire: '[TODO: imię ojca Arii]',
  dam: '[TODO: imię matki Arii]',
  health: [
    '[TODO: HD — wynik prześwietlenia bioder]',
    '[TODO: ED — wynik prześwietlenia łokci]',
    '[TODO: oczy — wynik badania okulistycznego]',
    '[TODO: testy genetyczne — DNA panel]',
  ],
  trials: [
    'Aktywnie pracuje w łowisku: wystawianie, aport z lądu i z wody, tropienie',
    '[TODO: oficjalne próby pracy / konkursy — numery i daty]',
  ],
  shows: [
    'Międzynarodowa Wystawa Psów Rasowych — Wrocław 2024: Zwycięzca Rasy. Finał w kategorii „Najlepsza Para" razem z Erosem.',
  ],
  character:
    'Zrównoważona, oddana, łagodna w domu i pełna pasji w pracy. Doskonale współpracuje z człowiekiem — łączy w sobie wrodzony instynkt łowiecki z silną więzią rodzinną. Z dzieci i innych zwierząt potrafi cieszyć się tak samo jak z dnia spędzonego w łowisku. W domu nazywamy ją czule „Księżniczką" — wspaniała mama dla swoich szczeniąt, troskliwa, opiekuńcza, z dużym apetytem i jeszcze większym sercem.',
  description:
    'Aria to fundament naszej hodowli — duża, silna suczka o brązowym dereszu, z wyjątkową psychiką, naturalnym talentem użytkowym i silnym przywiązaniu do człowieka. Wraz z Erosem tworzy naszą „najlepszą parę" — i w domu, i na ringu wystawowym, i w łowisku. Razem chodzą z nami w teren, polują, wystawiają, aportują z lądu i z wody, tropią. Pełne imię hodowlane: Aria (Nancy ze Staropleských luk) — pochodzi z czeskiej hodowli o sprawdzonych pracujących liniach. W 2024 roku zdobyła tytuł Zwycięzcy Rasy na Międzynarodowej Wystawie Psów we Wrocławiu, a wspólnie z Erosem znalazła się w finale w kategorii „Najlepsza Para". Aria to matka miotu A (marzec 2024) i miotu B (maj 2025) — naszych pierwszych pokoleń wyżłów czeskich z Krainy Wąsaczy. Modesta codziennie biega z nią po lasach i łąkach Bibic — Aria po prostu kocha ruch i wodę.',
  livesAtKennel: true,
  galleryCount: 6,
  pedigreePdfPath: '/documents/aria-rodowod.pdf',
  portraitImage: '/images/miot-a/2024-03-28_122119186352236139.avif',
  galleryImages: [
    '/images/miot-a/2024-03-28_122119186352236139.avif',
    '/images/miot-a/2024-03-21_122116017578236139.avif',
    '/images/miot-a/2024-03-20_122115393518236139.avif',
    '/images/inne/2025-12-31_122270160098236139.avif',
    '/images/inne/2025-09-24_122252410712236139.avif',
    '/images/miot-c-przygotowania/2026-03-03_122280949208236139.avif',
  ],
};

export const TATA: Dog = {
  slug: 'tata',
  role: 'Reproduktor',
  name: 'Eros',
  kennelName: 'z Vallis Baptismi',
  fullName: 'Eros z Vallis Baptismi',
  tagline:
    'Piękny i pracujący pies, zrównoważony, z doskonałym instynktem łowieckim i świetnym eksterierem.',
  birthDate: '[TODO: data urodzenia — DD.MM.RRRR]',
  coat: 'Siwa maść z brązową głową — klasyczny eksterier wystawowy rasy',
  pedigreeNumber: '[TODO: numer rodowodowy FCI / ČMKU]',
  origin: 'Hodowla „z Vallis Baptismi"',
  sire: '[TODO: imię ojca Erosa]',
  dam: '[TODO: imię matki Erosa]',
  health: [
    '[TODO: HD — wynik prześwietlenia bioder]',
    '[TODO: ED — wynik prześwietlenia łokci]',
    '[TODO: oczy — wynik badania okulistycznego]',
    '[TODO: testy genetyczne — DNA panel]',
  ],
  trials: [
    'Pracuje w łowisku — sprawdzony reproduktor o doskonałym instynkcie',
    '[TODO: oficjalne próby pracy / konkursy — numery i daty]',
  ],
  shows: [
    'XXVII Międzynarodowa Wystawa Psów Rasowych CACIB Kraków — Zwycięzca Rasy, ocena Doskonała.',
    'Międzynarodowa Wystawa Psów Wrocław 2024 — Finał w kategorii „Najlepsza Para" (z Arią).',
  ],
  character:
    'Piękny i pracujący pies — zrównoważony, z doskonałym instynktem łowieckim i świetnym eksterierem. Pewny siebie, ale nie agresywny; w pracy energiczny i skupiony. Razem z Arią tworzą „psy na medal" — i w łowisku, i na ringu. „Dumny ojciec" miotu B, doskonale współpracujący z Adamem podczas polowań.',
  description:
    'Eros z Vallis Baptismi to siwy pies z brązową głową — partner Arii w hodowli, w łowisku i w domu. Łączy eksterier wystawowy z prawdziwym charakterem psa pracującego: razem z Adamem chodzi na polowania, tropi, aportuje, wystawia. Mieszka u nas, na co dzień, jest pełnoprawnym członkiem rodziny. Reproduktor miotu B (maj 2025) — Eros dał potomstwo o silnym instynkcie łowieckim, zrównoważonej psychice i pięknym eksterierze. Jego osiągnięcia wystawowe to m.in. Zwycięzca Rasy z oceną Doskonałą na XXVII Międzynarodowej Wystawie Psów Rasowych CACIB w Krakowie oraz finał w kategorii „Najlepsza Para" razem z Arią na Międzynarodowej Wystawie Psów we Wrocławiu 2024. To pies do biegania po lesie, pływania w jeziorach i wieczornych drzemek na kanapie — w jednym.',
  livesAtKennel: true,
  galleryCount: 6,
  pedigreePdfPath: '/documents/eros-rodowod.pdf',
  portraitImage: '/images/inne/2024-09-14_122169217496236139.avif',
  galleryImages: [
    '/images/inne/2024-09-14_122169217496236139.avif',
    '/images/miot-a/2024-03-24_122117540306236139.avif',
    '/images/miot-a/2024-03-20_122115393518236139.avif',
    '/images/inne/2025-08-29_122247499040236139.avif',
    '/images/inne/2025-12-31_122270160008236139.avif',
    '/images/miot-c-przygotowania/2026-03-03_122280949010236139.avif',
  ],
};

export const DOGS: Record<'mama' | 'tata', Dog> = { mama: MAMA, tata: TATA };

// ────────────────────────────────────────────────────────────────────────────
// MIOTY
// ────────────────────────────────────────────────────────────────────────────

export type LitterStatus = 'past' | 'planned';

export type Litter = {
  id: 'a' | 'b' | 'c';
  code: 'A' | 'B' | 'C';
  name: string;
  status: LitterStatus;
  /** ISO date — używana zarówno w UI jak i w schema.org */
  born?: string;
  bornDisplay?: string;
  plannedFor?: string;
  reservationsOpen?: boolean;
  parents: {
    mama: string;
    mamaSlug?: 'mama';
    tata: string;
    tataSlug?: 'tata';
  };
  /** Krótki opis — wyświetlany na karcie i w hero podstrony miotu */
  description: string;
  longDescription?: string;
  notableLittermates?: Array<{ name: string; desc: string }>;
  galleryCount: number;
  /** Konkretne zdjęcia (ścieżki w /public). Jeśli puste — wyświetlają się placeholdery. */
  images?: readonly string[];
  /** Okładka miotu na liście /mioty oraz na home page */
  coverImage?: string;
  /** Dla miotu planowanego — CTA do rezerwacji */
  ctaText?: string;
};

export const LITTERS: readonly Litter[] = [
  {
    id: 'a',
    code: 'A',
    name: 'Miot A',
    status: 'past',
    born: '2024-03-26',
    bornDisplay: '26 marca 2024',
    parents: {
      mama: 'Aria (Nancy ze Staropleských luk)',
      mamaSlug: 'mama',
      tata: 'Eros z Vallis Baptismi',
      tataSlug: 'tata',
    },
    description:
      'Pierwszy miot Krainy Wąsaczy. Wszystkie szczenięta trafiły do swoich nowych, troskliwych domów.',
    longDescription:
      'Z ogromną dumą i nie skrywaną radością powitaliśmy nasz pierwszy miot — małe wyżełki, które przyszły na świat 26 marca 2024 roku. Wszystkie maluchy czuły się dobrze od pierwszych dni, a młoda mama z dużym apetytem i troskliwie opiekowała się swoim potomstwem. Miot A otworzył historię naszej hodowli — szczenięta są dziś w nowych domach i regularnie odwiedzają nas w naszych wyprawach do lasu.',
    notableLittermates: [
      {
        name: 'Atena z Krainy Wąsaczy',
        desc: 'Suczka z miotu A, dziś dorosła i pracująca w łowisku. Regularnie spotyka się z rodzicami podczas naszych wspólnych wypraw do lasu — miłość, natura i więź między psem a człowiekiem w czystej postaci.',
      },
      {
        name: 'Aron z Krainy Wąsaczy',
        desc: 'Pies z miotu A — kochający właściciele zabierają go nad wodę, w teren. „Jak wyżeł w wodzie" — w swoim żywiole.',
      },
      {
        name: 'Artos z Krainy Wąsaczy',
        desc: 'Syn Arii z pierwszego miotu — razem przejęli trawnik 😍 To z takich szczeniąt jesteśmy najbardziej dumni.',
      },
    ],
    galleryCount: 12,
    coverImage: '/images/miot-a/2024-05-28_122140646666236139.avif',
    images: [
      '/images/miot-a/2024-05-28_122140646666236139.avif',
      '/images/miot-a/2024-05-28_122140646420236139.avif',
      '/images/miot-a/2024-05-25_122139798416236139.avif',
      '/images/miot-a/2024-05-25_122139798374236139.avif',
      '/images/miot-a/2024-05-25_122139798332236139.avif',
      '/images/miot-a/2024-05-25_122139798290236139.avif',
      '/images/miot-a/2024-05-21_122138649590236139.avif',
      '/images/miot-a/2024-05-21_122138649548236139.avif',
      '/images/miot-a/2024-05-10_122135346062236139.avif',
      '/images/miot-a/2024-05-10_122135346008236139.avif',
      '/images/miot-a/2024-05-10_122135346002236139.avif',
      '/images/miot-a/2024-05-10_122135345906236139.avif',
    ],
  },
  {
    id: 'b',
    code: 'B',
    name: 'Miot B',
    status: 'past',
    born: '2025-05-27',
    bornDisplay: '27 maja 2025',
    parents: {
      mama: 'Aria (Nancy ze Staropleských luk)',
      mamaSlug: 'mama',
      tata: 'Eros z Vallis Baptismi',
      tataSlug: 'tata',
    },
    description:
      'Drugi miot hodowli — z połączenia naszej Arii i reproduktora Erosa z Vallis Baptismi. Linia użytkowa, sprawdzone pochodzenie, potencjał łowiecki i wystawowy.',
    longDescription:
      'Miot B to psy o genach pracy, instynkcie i lojalności — które nie zawiodą w polu, w lesie ani na wodzie. Rodowód ZKwP / FCI, linia użytkowa, sprawdzone pochodzenie. Potencjał zarówno łowiecki, jak i wystawowy. Idealne dla aktywnych myśliwych i pasjonatów kynologii użytkowej. Wszystkie szczenięta odebrane przez swoich nowych właścicieli.',
    notableLittermates: [
      {
        name: 'Basta z Krainy Wąsaczy',
        desc: 'Suczka o najjaśniejszym umaszczeniu z całego miotu — klasyczny brązowy deresz. Odważna, ciekawska, towarzyska — od pierwszych tygodni wyróżniała się charakterem.',
      },
      {
        name: 'Berta z Krainy Wąsaczy',
        desc: 'Młody wyżeł czeski z ogromnym potencjałem łowieckim. Już teraz pokazuje świetny nos i silny temperament prawdziwego psa pracującego. Łączy odwagę z naturalną legawością.',
      },
      {
        name: 'Biegun z Krainy Wąsaczy',
        desc: 'Pies z miotu B w nowym domu, prawdziwy partner w terenie. Symbol tego do czego dążymy w hodowli — pies pracujący i kochający towarzysz w jednym.',
      },
    ],
    galleryCount: 16,
    coverImage: '/images/miot-b/miot-b-1.avif',
    images: [
      '/images/miot-b/miot-b-1.avif',
      '/images/miot-b/miot-b-2.avif',
      '/images/miot-b/miot-b-3.avif',
      '/images/miot-b/miot-b-4.avif',
      '/images/miot-b/miot-b-5.avif',
      '/images/miot-b/miot-b-6.avif',
      '/images/miot-b/miot-b-7.avif',
      '/images/miot-b/miot-b-8.avif',
      '/images/miot-b/2025-07-24_122239735526236139.avif',
      '/images/miot-b/2025-07-23_122239564844236139.avif',
      '/images/miot-b/2025-07-23_122239564832236139.avif',
      '/images/miot-b/2025-07-23_122239564760236139.avif',
      '/images/miot-b/2025-07-23_122239564748236139.avif',
      '/images/miot-b/2025-07-23_122239564712236139.avif',
      '/images/miot-b/2025-07-21_122239129304236139.avif',
      '/images/miot-b/2025-07-21_122239129286236139.avif',
    ],
  },
  {
    id: 'c',
    code: 'C',
    name: 'Miot C — planowany',
    status: 'planned',
    plannedFor: 'Zima 2026 / 2027',
    reservationsOpen: true,
    parents: {
      mama: 'Aria (Nancy ze Staropleských luk)',
      mamaSlug: 'mama',
      tata: 'Eros z Vallis Baptismi',
      tataSlug: 'tata',
    },
    description:
      'Planowany miot — rezerwacje otwarte. Jeśli szukasz wyżła czeskiego do łowiectwa, do aktywnej rodziny, jako partnera w terenie i na co dzień — to miot dla Ciebie.',
    longDescription:
      'Jeśli szukasz wyżła czeskiego: do łowiectwa, do aktywnej rodziny, jako partnera w terenie i na co dzień, to nasz miot „C" może być właśnie dla Ciebie. Ofertę naszą kierujemy do osób poszukujących aktywnych psów pracujących — myśliwych, miłośników sportów kynologicznych, rodzin gotowych zapewnić psu dużo ruchu i pracy umysłowej. Rodzice: Aria i Eros — sprawdzona „najlepsza para" naszej hodowli z miotami A i B za sobą.',
    galleryCount: 12,
    coverImage: '/images/miot-c-przygotowania/2026-03-03_122280949208236139.avif',
    images: [
      '/images/miot-c-przygotowania/2026-03-26_122284950116236139.avif',
      '/images/miot-c-przygotowania/2026-03-26_122284950104236139.avif',
      '/images/miot-c-przygotowania/2026-03-26_122284950092236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949208236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949184236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949106236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949088236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949034236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280949010236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280948932236139.avif',
      '/images/miot-c-przygotowania/2026-03-03_122280948914236139.avif',
      '/images/miot-c-przygotowania/2026-02-09_122277060122236139.avif',
    ],
    ctaText: 'Zarezerwuj szczeniaka',
  },
] as const;

export const LITTERS_BY_ID: Record<Litter['id'], Litter> = LITTERS.reduce(
  (acc, l) => {
    acc[l.id] = l;
    return acc;
  },
  {} as Record<Litter['id'], Litter>,
);

// ────────────────────────────────────────────────────────────────────────────
// OPIS RASY (cytat z FB, używany na home + ewentualnie podstronie rasy)
// ────────────────────────────────────────────────────────────────────────────

export const BREED_INFO = {
  shortDescription:
    'Fousek to przede wszystkim pies użytkowy — czeski wyżeł szorstkowłosy, FCI nr 245, grupa VII.',
  // Tekst z FB, dosłownie — to dobry materiał, świetnie oddaje charakter rasy
  paragraphs: [
    'Fousek to przede wszystkim pies użytkowy. Český fousek charakteryzuje się dużą wytrzymałością, wytrwałością oraz bardzo dobrze rozwiniętym instynktem łowieckim. Świetnie sprawdzi się na polowaniu zarówno na ptactwo, jak i grubszą zwierzynę.',
    'Nie straszna jest mu zimna woda, gęste bagno ani cierniste krzewy. Ten czeski pies myśliwski ma silny charakter i poradzi sobie w każdych warunkach.',
    'Jako pies domowy potrzebuje dużo ruchu i aktywności — w przeciwnym wypadku czeski fousek będzie psem nieszczęśliwym. Układanie go nie jest trudne dla doświadczonego opiekuna, gdyż czeski wyżeł to pies z natury posłuszny i przywiązany do właściciela.',
    'Wyżeł czeski szorstkowłosy lubi dzieci i jest psem, który żyje raczej w zgodzie z innymi domowymi zwierzakami.',
  ],
  targetAudience: [
    {
      title: 'Aktywni myśliwi',
      desc: 'Pies pracujący w polu, lesie i na wodzie — wystawianie, aport, tropienie. Linia użytkowa, sprawdzone pochodzenie.',
    },
    {
      title: 'Aktywne rodziny',
      desc: 'Dla domów, w których pies otrzyma codzienną dawkę ruchu i bliskości — fousek lubi dzieci i jest doskonałym towarzyszem.',
    },
    {
      title: 'Sport kynologiczny',
      desc: 'Dummy, mantrailing, posłuszeństwo, agility — wszechstronne predyspozycje rasy świetnie sprawdzają się w sportach.',
    },
  ],
};

// ────────────────────────────────────────────────────────────────────────────
// GALERIA (placeholdery) — strona /galeria
// ────────────────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | 'rodzice'
  | 'mioty'
  | 'praca'
  | 'wystawy';

export type GalleryItem = {
  /** Plik w /public/images/galeria/... — używany przez next/image gdy zdjęcie już jest */
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Krótki podpis — opcjonalny */
  caption?: string;
};

/**
 * Lista placeholderów galerii. Po dodaniu rzeczywistych zdjęć podmień pola `src`
 * — strona automatycznie ich użyje (na razie wszystkie wyświetlają się jako
 * `placeholder-frame` bo plik nie istnieje).
 */
export const GALLERY: readonly GalleryItem[] = [
  // ── Mioty ──
  // Miot A (marzec-maj 2024)
  { src: '/images/miot-a/2024-05-28_122140646666236139.avif', alt: 'Miot A — podrośnięte szczenięta', category: 'mioty', caption: 'Miot A · maj 2024' },
  { src: '/images/miot-a/2024-05-25_122139798416236139.avif', alt: 'Miot A — odkrywanie świata', category: 'mioty' },
  { src: '/images/miot-a/2024-05-10_122135346062236139.avif', alt: 'Miot A — szczenięta razem', category: 'mioty' },
  { src: '/images/miot-a/2024-04-16_122127260768236139.avif', alt: 'Miot A — w pierwszych tygodniach', category: 'mioty' },
  // Miot B (maj-lipiec 2025) — Basta, Berta
  { src: '/images/miot-b/miot-b-1.avif', alt: 'Miot B — szczenięta', category: 'mioty', caption: 'Miot B · maj 2025' },
  { src: '/images/miot-b/2025-07-23_122239564844236139.avif', alt: 'Basta z Krainy Wąsaczy', category: 'mioty', caption: 'Basta — brązowy deresz' },
  { src: '/images/miot-b/2025-07-24_122239735526236139.avif', alt: 'Miot B — Berta', category: 'mioty', caption: 'Berta — młoda łowczyni' },
  { src: '/images/miot-b/miot-b-5.avif', alt: 'Miot B — kolaż szczeniąt', category: 'mioty' },
  // Miot C — zdjęcia rodziców i przygotowań do miotu
  { src: '/images/miot-c-przygotowania/2026-03-26_122284950116236139.avif', alt: 'Przygotowania do miotu C', category: 'mioty', caption: 'Miot C · planowany' },
  { src: '/images/miot-c-przygotowania/2026-03-03_122280949208236139.avif', alt: 'Wiosna 2026 — Aria i Eros', category: 'mioty' },
  // ── Rodzice ──
  { src: '/images/inne/2025-09-24_122252410712236139.avif', alt: 'Aria (Nancy ze Staropleských luk) — portret', category: 'rodzice', caption: 'Aria — nasza suka hodowlana' },
  { src: '/images/inne/2025-09-24_122252410640236139.avif', alt: 'Aria w terenie', category: 'rodzice' },
  { src: '/images/inne/2025-09-24_122252410568236139.avif', alt: 'Aria — portret', category: 'rodzice' },
  { src: '/images/inne/2025-08-29_122247499040236139.avif', alt: 'Eros z Vallis Baptismi', category: 'rodzice', caption: 'Eros — reproduktor miotu B' },
  { src: '/images/inne/2025-08-29_122247499028236139.avif', alt: 'Eros — eksterier', category: 'rodzice' },
  { src: '/images/inne/2025-08-29_122247498992236139.avif', alt: 'Eros — chwila skupienia', category: 'rodzice' },
  // ── Praca w polu / codzienne życie ──
  { src: '/images/inne/2025-12-31_122270160098236139.avif', alt: 'Praca w terenie — koniec 2025', category: 'praca', caption: 'Nowy Rok 2026 — nowe tropy' },
  { src: '/images/inne/2025-12-31_122270160050236139.avif', alt: 'Wyprawa do lasu', category: 'praca' },
  { src: '/images/inne/2025-12-31_122270160008236139.avif', alt: 'Polowanie w lesie', category: 'praca' },
  { src: '/images/inne/2025-09-24_122252410490236139.avif', alt: 'Berta w pracy', category: 'praca' },
  { src: '/images/inne/2025-09-24_122252410424236139.avif', alt: 'Dorastający wyżeł czeski', category: 'praca' },
  { src: '/images/inne/2025-09-24_122252410346236139.avif', alt: 'Praca w polu', category: 'praca' },
  { src: '/images/inne/2025-09-24_122252410310236139.avif', alt: 'Codzienność hodowli', category: 'praca' },
  { src: '/images/miot-c-przygotowania/2026-03-03_122280949184236139.avif', alt: 'Wiosenne słońce', category: 'praca', caption: 'Pierwsza wiosna 2026' },
  // Praca w polu / łowisko — z 2025
  { src: '/images/inne/2025-08-29_122247499040236139.avif', alt: 'Eros w terenie', category: 'praca' },
  { src: '/images/inne/2025-08-29_122247499028236139.avif', alt: 'Aria w polu', category: 'praca' },
  { src: '/images/inne/2025-08-29_122247498992236139.avif', alt: 'Praca z psami', category: 'praca' },
  { src: '/images/miot-a/2024-03-20_122115393518236139.avif', alt: 'Aria i Eros — bieganie w lesie', category: 'praca', caption: 'Idealne psy do biegania' },
  // ── Wystawy ──
  { src: '/images/inne/2024-09-14_122169217496236139.avif', alt: 'Eros — Zwycięzca Rasy CACIB Kraków', category: 'wystawy', caption: 'CACIB Kraków — Zwycięzca Rasy' },
  { src: '/images/inne/2024-09-14_122169217526236139.avif', alt: 'Eros na ringu CACIB', category: 'wystawy' },
  { src: '/images/inne/2025-01-05_122193377324236139.avif', alt: 'Aria — Międzynarodowa Wystawa Wrocław 2024', category: 'wystawy', caption: 'Wrocław 2024 — Zwycięzca Rasy' },
  { src: '/images/inne/2025-01-05_122193377360236139.avif', alt: 'Aria na wystawie we Wrocławiu', category: 'wystawy' },
  { src: '/images/inne/2025-01-05_122193377396236139.avif', alt: 'Aria i Eros — Najlepsza Para', category: 'wystawy', caption: 'Finał: Najlepsza Para' },
  { src: '/images/inne/2025-01-05_122193377432236139.avif', alt: 'Ring główny — Wrocław 2024', category: 'wystawy' },
  { src: '/images/miot-b/2025-05-04_122221659986236139.avif', alt: 'Hunting Expo Kraków', category: 'wystawy', caption: 'Hunting Expo Kraków 2025' },
  { src: '/images/miot-b/2025-05-04_122221659962236139.avif', alt: 'Hunting Expo — stoisko', category: 'wystawy' },
  { src: '/images/miot-b/miot-b-8.avif', alt: 'Miot B — odpoczynek', category: 'mioty' },
] as const;

/**
 * Filmy do osadzenia w galerii. Zostaw `youtubeId: null` jeśli filmu jeszcze nie ma —
 * komponent wyrenderuje placeholder. Po podaniu ID YouTube — automatycznie zostanie
 * osadzone bezpieczne iframe (lazy + no-cookies domain).
 */
export type VideoItem = {
  title: string;
  description: string;
  /** Ścieżka do lokalnego pliku MP4 (preferowane) */
  localSrc?: string;
  /** YouTube video ID — alternatywnie, jeśli filmy są na YT */
  youtubeId?: string | null;
  /** Data publikacji na FB */
  date?: string;
};

export const GALLERY_VIDEOS: readonly VideoItem[] = [
  {
    title: 'Atena z miotu A spotyka rodziców',
    description: 'Atena z Krainy Wąsaczy — szczenię z pierwszego miotu, dziś dorosła — spotyka swoich rodziców podczas wspólnej wyprawy do lasu. Miłość, natura i więź pomiędzy psem a człowiekiem.',
    localSrc: '/videos/2026-01-25.mp4',
    date: '2026-01-25',
  },
  {
    title: 'Nauka siadania',
    description: 'Praca z młodym psem z miotu B — pierwsza komenda, pierwsze sukcesy.',
    localSrc: '/videos/2025-09-19.mp4',
    date: '2025-09-19',
  },
  {
    title: 'Bertunia na spacerku z mamą',
    description: 'Berta z Krainy Wąsaczy na spacerze z Arią — typowa scena z naszej codzienności.',
    localSrc: '/videos/2025-09-14.mp4',
    date: '2025-09-14',
  },
  {
    title: 'Miot B — chwila beztroski',
    description: 'Szczenięta miotu B w zabawie — lipiec 2025.',
    localSrc: '/videos/2025-07-22.mp4',
    date: '2025-07-22',
  },
  {
    title: 'Pierwsze kroki',
    description: 'Szczeniaki miotu B — pierwsze tygodnie życia.',
    localSrc: '/videos/2025-08-03.mp4',
    date: '2025-08-03',
  },
  {
    title: 'Wyprawa nad wodę — miłość od pierwszego plusku',
    description: 'Suczki wyżła czeskiego odkrywają uroki wody. Wyżeł czeski to rasa, której woda nie straszy — od najmłodszych dni czują się w niej naturalnie.',
    localSrc: '/videos/2025-08-20.mp4',
    date: '2025-08-20',
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// AKTUALNOŚCI — wybrane posty z Facebooka
// ────────────────────────────────────────────────────────────────────────────

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  body?: string;
  category: 'miot' | 'zdrowie' | 'wydarzenia' | 'rasa' | 'codzienność';
  fbUrl?: string;
  image?: string;
};

export const NEWS: readonly NewsItem[] = [
  {
    id: 'kleszcze-bravecto',
    date: '2026-03-26',
    title: 'Wiosna = czas na ochronę przed kleszczami',
    excerpt: 'Z nadejściem cieplejszych dni wracają kleszcze — realne zagrożenie dla zdrowia naszych psów. Z naszego doświadczenia najlepiej sprawdzają się tabletki Bravecto.',
    body: 'Kleszcze mogą przenosić groźne choroby (babeszjoza, borelioza, anaplazmoza), nieleczone prowadzą do poważnych powikłań. W naszej hodowli stosujemy tabletki Bravecto — działają nawet do 12 tygodni, skutecznie eliminują kleszcze i pchły, są wygodną formą (brak problemu z kąpielą czy deszczem). Dla aktywnych psów (las, łąki, woda) tabletki są szczególnie polecane — działają od środka i nie zmywają się. Zabezpieczenie warto rozpocząć już na początku wiosny.',
    category: 'zdrowie',
    image: '/images/miot-c-przygotowania/2026-03-26_122284950116236139.avif',
    fbUrl: 'https://www.facebook.com/permalink.php?id=61557084189380&story_fbid=122284950308236139',
  },
  {
    id: 'atena-w-lesie',
    date: '2026-01-25',
    title: 'Dla takich chwil założyliśmy naszą hodowlę',
    excerpt: 'Atena z miotu „A" spotyka swoich rodziców podczas wspólnej wyprawy do lasu. Miłość, natura i więź między psem a człowiekiem.',
    category: 'codzienność',
    image: '/images/inne/2025-12-31_122270160098236139.avif',
    fbUrl: 'https://www.facebook.com/reel/866367413051866/',
  },
  {
    id: 'miot-c-rezerwacje',
    date: '2026-02-09',
    title: 'Przyszły miot „C" — ruszają zapisy',
    excerpt: 'Jeśli szukasz wyżła czeskiego do łowiectwa, do aktywnej rodziny, jako partnera w terenie i na co dzień — to nasz miot „C" może być właśnie dla Ciebie.',
    body: 'Zapraszamy do kontaktu w wiadomości prywatnej — chętnie opowiemy więcej o planowanym skojarzeniu i warunkach rezerwacji.',
    category: 'miot',
    image: '/images/miot-b/miot-b-5.avif',
    fbUrl: 'https://www.facebook.com/permalink.php?id=61557084189380&story_fbid=122277060476236139',
  },
  {
    id: 'berta',
    date: '2025-09-24',
    title: 'Berta — młody wyżeł czeski z potencjałem łowieckim',
    excerpt: 'Szczeniak z miotu B z ogromnym potencjałem łowieckim — już teraz pokazuje świetny nos i silny temperament prawdziwego psa pracującego.',
    category: 'miot',
    image: '/images/inne/2025-09-24_122252410712236139.avif',
    fbUrl: 'https://www.facebook.com/permalink.php?id=61557084189380&story_fbid=122252411060236139',
  },
  {
    id: 'basta-prezentacja',
    date: '2025-07-23',
    title: 'Basta z Krainy Wąsaczy — jasna perełka z miotu B',
    excerpt: 'Urodzona 28 maja 2025, 8-tygodniowa suczka wyżła czeskiego (Český fousek). Najjaśniejsze umaszczenie z całego miotu — klasyczny brązowy deresz.',
    body: 'Z charakteru: odważna, ciekawska i bardzo towarzyska. Już teraz pokazuje ogromny potencjał — zarówno jako pies użytkowy, jak i oddana towarzyszka domowa. Rodowód Basty to przemyślane połączenie dwóch znakomitych linii: ojciec Eros z Vallis Baptismi (pracujący pies z doskonałym instynktem łowieckim) i matka Aria (suczka o wyjątkowej psychice).',
    category: 'miot',
    image: '/images/miot-b/2025-07-23_122239564844236139.avif',
    fbUrl: 'https://www.facebook.com/permalink.php?id=61557084189380&story_fbid=122239565162236139',
  },
  {
    id: 'hunting-expo',
    date: '2025-05-04',
    title: 'Hunting Expo Kraków',
    excerpt: 'Mieliśmy okazję uczestniczyć w wystawie Hunting Expo w Krakowie. Spotkania, rozmowy z myśliwymi, pasjonatami i hodowcami — wyjątkowa atmosfera tradycji łowieckich.',
    category: 'wydarzenia',
    image: '/images/miot-b/2025-05-04_122221659986236139.avif',
    fbUrl: 'https://www.facebook.com/permalink.php?story_fbid=122221661414236139&id=61557084189380',
  },
  {
    id: 'cechy-psow-mysliwskich',
    date: '2024-05-04',
    title: 'Co musisz wiedzieć o psach myśliwskich',
    excerpt: 'Cechy psa myśliwskiego: zrównoważony, nie agresywny, inteligentny. Wyżeł czeski to UNIWERSALNY pies — silny, wytrzymały, łagodny i łatwy do ułożenia.',
    body: 'Cechy psów myśliwskich: ZRÓWNOWAŻONE — nie boją się strzału ani niczego innego. NIE AGRESYWNE — myśliwy nie poluje sam, pies musi oddać zwierzynę, nie zjeść. INTELIGENTNE — odróżniają czas pracy od czasu odpoczynku; w domu bawią się z dziećmi i uwielbiają pieszczoty.\n\nWyżeł czeski przez naszych sąsiadów stworzony został jako UNIWERSALNY pies na polowania. Na polowaniu pracuje jako: APORTER (przynosi strzelone ptactwo), GOŃCZY (wypłasza i goni zwierzynę), LEGAWIEC (poluje na ptactwo), TROPOWIEC (poszukuje rannej zwierzyny — wyżły mają doskonały węch), PŁOCHACZ (wypłasza ptaki, wchodzi w gęste szuwary).\n\nWymagają RUCHU (godzina dziennie wybiegania) i ROZRYWKI (zmienność — raz spacer na polu, raz w lesie, bieganie z rowerem, pływanie).',
    category: 'rasa',
    fbUrl: 'https://www.facebook.com/permalink.php?id=61557084189380&story_fbid=122133689744236139',
  },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// SLOGANY / CYTATY (do hero, sekcji, CTA)
// ────────────────────────────────────────────────────────────────────────────

export const QUOTES = {
  hero: 'Prawdziwy myśliwy zna wartość dobrego psa.',
  reservation: 'Do dobrego domu — z pasją do łowiectwa.',
  audience:
    'Ofertę naszą kierujemy do osób poszukujących aktywnych psów pracujących.',
  mission:
    'Hodowla założona z pasji — z myślą o miłośnikach mało znanej, wspaniałej rasy.',
};
