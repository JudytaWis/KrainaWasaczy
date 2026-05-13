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
  // Bibice (gmina Zielonki) — przybliżone współrzędne
  geo: { lat: 50.1247, lng: 19.9486 },
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
};

export const MAMA: Dog = {
  slug: 'mama',
  role: 'Suka hodowlana',
  name: 'Nancy',
  kennelName: 'ze Staropleských luk',
  fullName: 'Nancy ze Staropleských luk',
  tagline:
    'Suczka o wyjątkowej psychice, naturalnym talencie użytkowym i silnym przywiązaniu do człowieka.',
  birthDate: '[TODO: data urodzenia — DD.MM.RRRR]',
  coat: '[TODO: maść — np. brązowy deresz / siwa z brązową głową]',
  pedigreeNumber: '[TODO: numer rodowodowy FCI / ČMKU]',
  origin: 'Hodowla „ze Staropleských luk" (Czechy)',
  sire: '[TODO: imię ojca Nancy]',
  dam: '[TODO: imię matki Nancy]',
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
  shows: ['[TODO: oceny wystawowe — klasa, ocena, sędzia]'],
  character:
    'Zrównoważona, oddana, łagodna w domu i pełna pasji w pracy. Doskonale współpracuje z człowiekiem — łączy w sobie wrodzony instynkt łowiecki z silną więzią rodzinną. Z dzieci i innych zwierząt potrafi cieszyć się tak samo jak z dnia spędzonego w łowisku.',
  description:
    'Nancy to fundament naszej hodowli — suczka o wyjątkowej psychice, naturalnym talencie użytkowym i silnym przywiązaniu do człowieka. W łowisku pracuje aktywnie: wystawia, aportuje z lądu i z wody, świetnie tropi. Pochodzi z czeskiej hodowli „ze Staropleských luk" — z linii sprawdzonych pracujących wyżłów czeskich.',
  livesAtKennel: true,
  galleryCount: 4,
  pedigreePdfPath: '/documents/nancy-rodowod.pdf',
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
  coat: '[TODO: maść — np. brązowy deresz / siwy z brązową głową]',
  pedigreeNumber: '[TODO: numer rodowodowy FCI / ČMKU]',
  origin: 'Hodowla „z Vallis Baptismi" (reproduktor z zewnątrz)',
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
  shows: ['[TODO: oceny wystawowe — klasa, ocena, sędzia]'],
  character:
    'Piękny i pracujący pies — zrównoważony, z doskonałym instynktem łowieckim i świetnym eksterierem. Pewny siebie, ale nie agresywny; w pracy energiczny i skupiony.',
  description:
    'Eros to reproduktor wybrany do miotu B Krainy Wąsaczy. Łączy w sobie eksterier wystawowy z prawdziwym charakterem psa pracującego — daje potomstwo o silnym instynkcie łowieckim i zrównoważonej psychice. Eros nie mieszka u nas — jest reproduktorem z zewnętrznej hodowli, wybranym pod konkretny miot.',
  livesAtKennel: false,
  galleryCount: 4,
  pedigreePdfPath: '/documents/eros-rodowod.pdf',
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
      mama: '[TODO: matka miotu A]',
      tata: '[TODO: ojciec miotu A]',
    },
    description:
      'Pierwszy miot Krainy Wąsaczy. Wszystkie szczenięta trafiły do swoich nowych, troskliwych domów.',
    longDescription:
      'Z ogromną dumą i nie skrywaną radością powitaliśmy nasz pierwszy miot — małe wyżełki, które przyszły na świat 26 marca 2024 roku. Wszystkie maluchy czuły się dobrze od pierwszych dni, a młoda mama z dużym apetytem i troskliwie opiekowała się swoim potomstwem. Miot A otworzył historię naszej hodowli — szczenięta są dziś w nowych domach.',
    galleryCount: 6,
  },
  {
    id: 'b',
    code: 'B',
    name: 'Miot B',
    status: 'past',
    born: '2025-05-27',
    bornDisplay: '27 maja 2025',
    parents: {
      mama: 'Nancy ze Staropleských luk',
      mamaSlug: 'mama',
      tata: 'Eros z Vallis Baptismi',
      tataSlug: 'tata',
    },
    description:
      'Drugi miot hodowli — z połączenia naszej Nancy i reproduktora Erosa z Vallis Baptismi. Linia użytkowa, sprawdzone pochodzenie, potencjał łowiecki i wystawowy.',
    longDescription:
      'Miot B to psy o genach pracy, instynkcie i lojalności — które nie zawiodą w polu, w lesie ani na wodzie. Rodowód ZKwP / FCI, linia użytkowa, sprawdzone pochodzenie. Potencjał zarówno łowiecki, jak i wystawowy. Idealne dla aktywnych myśliwych i pasjonatów kynologii użytkowej. Wszystkie szczenięta odebrane przez swoich nowych właścicieli.',
    notableLittermates: [
      {
        name: 'Basta z Krainy Wąsaczy',
        desc: 'Suczka o najjaśniejszym umaszczeniu z całego miotu — klasyczny brązowy deresz. Odważna, ciekawska, towarzyska — od pierwszych tygodni wyróżniała się charakterem.',
      },
    ],
    galleryCount: 8,
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
      mama: 'Nancy ze Staropleských luk',
      mamaSlug: 'mama',
      tata: '[TODO: reproduktor wybierany pod miot C]',
    },
    description:
      'Planowany miot — rezerwacje otwarte. Jeśli szukasz wyżła czeskiego do łowiectwa, do aktywnej rodziny, jako partnera w terenie i na co dzień — to miot dla Ciebie.',
    longDescription:
      'Jeśli szukasz wyżła czeskiego: do łowiectwa, do aktywnej rodziny, jako partnera w terenie i na co dzień, to nasz miot „C" może być właśnie dla Ciebie. Ofertę naszą kierujemy do osób poszukujących aktywnych psów pracujących — myśliwych, miłośników sportów kynologicznych, rodzin gotowych zapewnić psu dużo ruchu i pracy umysłowej. Reproduktor wybierany pod miot — informacja zostanie opublikowana po zatwierdzeniu krycia.',
    galleryCount: 4,
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
  // Rodzice — Nancy
  { src: '/images/galeria/nancy-1.jpg', alt: 'Nancy ze Staropleských luk — portret', category: 'rodzice' },
  { src: '/images/galeria/nancy-2.jpg', alt: 'Nancy w łowisku', category: 'rodzice', caption: 'Praca w polu' },
  { src: '/images/galeria/nancy-3.jpg', alt: 'Nancy — aport z wody', category: 'rodzice' },
  // Rodzice — Eros
  { src: '/images/galeria/eros-1.jpg', alt: 'Eros z Vallis Baptismi — portret', category: 'rodzice' },
  { src: '/images/galeria/eros-2.jpg', alt: 'Eros w terenie', category: 'rodzice' },
  // Miot A
  { src: '/images/galeria/miot-a-1.jpg', alt: 'Miot A — szczenięta w pierwszych tygodniach', category: 'mioty' },
  { src: '/images/galeria/miot-a-2.jpg', alt: 'Miot A — zabawa', category: 'mioty' },
  { src: '/images/galeria/miot-a-3.jpg', alt: 'Miot A — pierwsze wyjście', category: 'mioty' },
  // Miot B (zdjęcia z 27.05.2025)
  { src: '/images/miot-b/miot-b-1.avif', alt: 'Miot B — Nancy ze szczeniętami', category: 'mioty' },
  { src: '/images/miot-b/miot-b-2.avif', alt: 'Miot B — szczenięta', category: 'mioty' },
  { src: '/images/miot-b/miot-b-3.avif', alt: 'Miot B — pierwsze tygodnie', category: 'mioty' },
  { src: '/images/miot-b/miot-b-4.avif', alt: 'Miot B — szczenięta razem', category: 'mioty' },
  { src: '/images/miot-b/miot-b-5.avif', alt: 'Miot B — Basta i rodzeństwo', category: 'mioty', caption: 'Basta — brązowy deresz' },
  { src: '/images/miot-b/miot-b-6.avif', alt: 'Miot B — portret szczenięcia', category: 'mioty' },
  { src: '/images/miot-b/miot-b-7.avif', alt: 'Miot B — zabawa', category: 'mioty' },
  { src: '/images/miot-b/miot-b-8.avif', alt: 'Miot B — odpoczynek', category: 'mioty' },
  // Praca w polu
  { src: '/images/galeria/praca-1.jpg', alt: 'Praca w polu — wystawianie', category: 'praca' },
  { src: '/images/galeria/praca-2.jpg', alt: 'Aport z lądu', category: 'praca' },
  { src: '/images/galeria/praca-3.jpg', alt: 'Aport z wody', category: 'praca' },
  { src: '/images/galeria/praca-4.jpg', alt: 'Tropienie', category: 'praca' },
  { src: '/images/galeria/praca-5.jpg', alt: 'Praca w lesie', category: 'praca' },
  { src: '/images/galeria/praca-6.jpg', alt: 'Polowanie — moment skupienia', category: 'praca' },
  // Wystawy
  { src: '/images/galeria/wystawa-1.jpg', alt: 'Wystawa — ring', category: 'wystawy' },
  { src: '/images/galeria/wystawa-2.jpg', alt: 'Wystawa — ocena sędziowska', category: 'wystawy' },
] as const;

/**
 * Filmy do osadzenia w galerii. Zostaw `youtubeId: null` jeśli filmu jeszcze nie ma —
 * komponent wyrenderuje placeholder. Po podaniu ID YouTube — automatycznie zostanie
 * osadzone bezpieczne iframe (lazy + no-cookies domain).
 */
export type VideoItem = {
  title: string;
  description: string;
  /** YouTube video ID, np. "dQw4w9WgXcQ" — null oznacza placeholder */
  youtubeId: string | null;
};

export const GALLERY_VIDEOS: readonly VideoItem[] = [
  {
    title: 'Praca Nancy w polu',
    description: 'Wystawianie i aport z lądu — Nancy ze Staropleských luk w łowisku.',
    youtubeId: null, // TODO: ID filmu YouTube po nagraniu / upload
  },
  {
    title: 'Aport z wody',
    description: 'Wyżeł czeski w pracy nad wodą — naturalny instynkt aportowania.',
    youtubeId: null,
  },
  {
    title: 'Szczenięta miotu B',
    description: 'Pierwsze tygodnie z Bastą i jej rodzeństwem.',
    youtubeId: null,
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
