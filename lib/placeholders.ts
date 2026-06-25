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
  url: 'https://www.kraina-wasaczy.pl',
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

/**
 * Zdjęcie galerii — albo sama ścieżka (alt generowany automatycznie),
 * albo para { src, alt } z własnym, opisowym tekstem alternatywnym.
 */
export type GalleryImage = string | { readonly src: string; readonly alt: string };

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
  galleryImages?: readonly GalleryImage[];
};

export const MAMA: Dog = {
  slug: 'mama',
  role: 'Suka hodowlana',
  name: 'Aria',
  kennelName: 'ze Staropleských luk',
  fullName: 'Aria (Nancy ze Staropleských luk)',
  tagline:
    'Suczka o wyjątkowej psychice, naturalnym talencie użytkowym i silnym przywiązaniu do człowieka.',
  birthDate: '17.01.2021',
  coat: 'Brązowy deresz, duża, silna sylwetka — typowy eksterier rasy',
  pedigreeNumber: 'ČLP/CF/56055/21',
  origin: 'Hodowla „ze Staropleských luk" (Czechy) — pełne imię hodowlane: Aria (Nancy ze Staropleských luk)',
  sire: 'Aris od Lesa Borkovniku (ČLP/CF/62827/17)',
  dam: 'Laura ze Staropleských luk (ČLP/CF/63160/19)',
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
  portraitImage: '/images/mama/aria-portret.avif',
  galleryImages: [
    {
      src: '/images/mama/aria-portret.avif',
      alt: 'Aria — brązowy deresz wyżła czeskiego, siedzi z radosnym wyrazem i pucharem podczas prób pracy.',
    },
    {
      src: '/images/mama/aria-wystawa-podium.avif',
      alt: 'Aria na podium „1" Międzynarodowej Wystawy Psów Rasowych — zwyciężczyni rasy między rozetami.',
    },
    {
      src: '/images/mama/aria-proby-pracy.avif',
      alt: 'Aria skupiona podczas prób pracy w polu, z pucharem i ringówką — sprawdzona suka użytkowa.',
    },
    {
      src: '/images/mama/aria-jezioro-zachod.avif',
      alt: 'Aria nad jeziorem o zachodzie słońca — wpatrzona w złotą taflę wody.',
    },
    {
      src: '/images/mama/aria-plywanie.avif',
      alt: 'Aria pływa razem z Modestą w jeziorze o zmierzchu — uwielbia wodę.',
    },
    {
      src: '/images/mama/aria-w-trawie.avif',
      alt: 'Aria w wysokiej trawie w słoneczny dzień, w towarzystwie przewodnika.',
    },
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
  birthDate: '13.02.2023',
  coat: 'Siwa maść z brązową głową — klasyczny eksterier wystawowy rasy',
  pedigreeNumber: 'ČLP/CF/65921/23',
  origin: 'Hodowla „z Vallis Baptismi"',
  sire: 'Max od Tyrše (ČLP/CF/64125/22)',
  dam: 'Brie z Nezabylicke hajenky (ČLP/CF/64699/21)',
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
  portraitImage: '/images/tata/eros-portret.avif',
  galleryImages: [
    {
      src: '/images/tata/eros-portret.avif',
      alt: 'Eros z Vallis Baptismi — portret w ciepłym, wieczornym świetle, z wystawową rozetą na szyi.',
    },
    {
      src: '/images/tata/eros-wystawa-cacib.avif',
      alt: 'Eros prezentowany na podium podczas XXVI Międzynarodowej Wystawy Psów Rasowych CACIB w Krakowie.',
    },
    {
      src: '/images/tata/eros-aria-para.avif',
      alt: 'Eros i Aria — para hodowlana Krainy Wąsaczy, siwy deresz i brązowy deresz obok siebie.',
    },
    {
      src: '/images/tata/eros-miot.avif',
      alt: 'Eros jako dumny ojciec — spokojnie czuwa, gdy szczenięta z miotu rozbiegają się po schodach.',
    },
    {
      src: '/images/tata/eros-szczeniak.avif',
      alt: 'Eros w przydomowym ogrodzie podczas spotkania z jednym ze szczeniąt.',
    },
    {
      src: '/images/tata/eros-wystawa-ring.avif',
      alt: 'Eros wystawiany w ringu podczas wystawy CACIB w Krakowie — pełna sylwetka w pozycji wystawowej.',
    },
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
    galleryCount: 14,
    coverImage: '/images/miot-a/szczenie-portret-brodka.avif',
    images: [
      '/images/miot-a/miot-a-przytulanie.avif',
      '/images/miot-a/miot-a-grupa-w-tunelu.avif',
      '/images/miot-a/joga-szczenie-na-macie.avif',
      '/images/miot-a/szczenie-portret-brodka.avif',
      '/images/miot-a/szczenie-siedzi.avif',
      '/images/miot-a/szczenie-na-krzesle.avif',
      '/images/miot-a/szczenie-stoi.avif',
      '/images/miot-a/szczenie-w-trzcinach.avif',
      '/images/miot-a/szczenie-w-lesie.avif',
      '/images/miot-a/szczeniaki-w-trawie.avif',
      '/images/miot-a/2024-05-28_122140646666236139.avif',
      '/images/miot-a/2024-05-25_122139798416236139.avif',
      '/images/miot-a/2024-05-10_122135346062236139.avif',
      '/images/miot-a/2024-04-16_122127260768236139.avif',
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
    galleryCount: 15,
    coverImage: '/images/miot-b/szczenie-na-dywanie.avif',
    images: [
      '/images/miot-b/noworodki-z-mama.avif',
      '/images/miot-b/noworodek-portret.avif',
      '/images/miot-b/noworodki-razem.avif',
      '/images/miot-b/szczenie-na-dywanie.avif',
      '/images/miot-b/szczenie-stoi-dywan.avif',
      '/images/miot-b/szczenie-dywan-2.avif',
      '/images/miot-b/szczenie-na-rekach.avif',
      '/images/miot-b/2025-07-23_122239564844236139.avif',
      '/images/miot-b/2025-07-24_122239735526236139.avif',
      '/images/miot-b/woda-aport-1.avif',
      '/images/miot-b/woda-aport-2.avif',
      '/images/miot-b/woda-aport-3.avif',
      '/images/miot-b/woda-plywanie-1.avif',
      '/images/miot-b/woda-plywanie-2.avif',
      '/images/miot-b/miot-b-1.avif',
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
  // ── Mioty / szczenięta ──
  // Miot A (2024)
  { src: '/images/miot-a/szczenie-portret-brodka.avif', alt: 'Szczenię z miotu A — portret z bliska', category: 'mioty', caption: 'Miot A · 2024' },
  { src: '/images/miot-a/joga-szczenie-na-macie.avif', alt: 'Joga ze szczeniakiem wyżła czeskiego na macie', category: 'mioty', caption: 'Joga ze szczeniakiem' },
  { src: '/images/miot-a/miot-a-grupa-w-tunelu.avif', alt: 'Miot A — gromadka szczeniąt razem', category: 'mioty' },
  { src: '/images/miot-a/miot-a-przytulanie.avif', alt: 'Przytulanie ze szczeniętami miotu A', category: 'mioty' },
  { src: '/images/miot-a/szczenie-siedzi.avif', alt: 'Podrośnięte szczenię miotu A — siedzi', category: 'mioty' },
  { src: '/images/miot-a/szczeniaki-w-trawie.avif', alt: 'Szczenięta miotu A bawią się w trawie', category: 'mioty' },
  { src: '/images/miot-a/szczenie-w-lesie.avif', alt: 'Szczenię miotu A na leśnej wyprawie', category: 'mioty' },
  { src: '/images/miot-a/2024-05-28_122140646666236139.avif', alt: 'Miot A — podrośnięte szczenięta', category: 'mioty', caption: 'Miot A · maj 2024' },
  // Miot B (2025) — Basta, Berta, noworodki
  { src: '/images/miot-b/noworodki-z-mama.avif', alt: 'Miot B — noworodki przy mamie Arii', category: 'mioty', caption: 'Miot B · maj 2025' },
  { src: '/images/miot-b/noworodek-portret.avif', alt: 'Noworodek miotu B — pierwsze dni życia', category: 'mioty' },
  { src: '/images/miot-b/noworodki-razem.avif', alt: 'Miot B — szczenięta tulą się razem', category: 'mioty' },
  { src: '/images/miot-b/szczenie-na-dywanie.avif', alt: 'Szczenię miotu B odkrywa świat', category: 'mioty' },
  { src: '/images/miot-b/szczenie-na-rekach.avif', alt: 'Szczenię miotu B na rękach', category: 'mioty' },
  { src: '/images/miot-b/2025-07-23_122239564844236139.avif', alt: 'Basta z Krainy Wąsaczy', category: 'mioty', caption: 'Basta — brązowy deresz' },
  // ── Praca / woda / łowisko ──
  { src: '/images/miot-b/woda-aport-1.avif', alt: 'Wyżeł czeski aportuje z jeziora', category: 'praca', caption: 'Aport z wody' },
  { src: '/images/miot-b/woda-aport-3.avif', alt: 'Aport z wody — pies płynie z aportem', category: 'praca' },
  { src: '/images/miot-b/woda-plywanie-1.avif', alt: 'Pływanie w jeziorze — pies w swoim żywiole', category: 'praca' },
  { src: '/images/miot-b/woda-plywanie-2.avif', alt: 'Wyżeł czeski pływa w jeziorze', category: 'praca' },
  { src: '/images/mama/aria-plywanie.avif', alt: 'Aria pływa o zmierzchu razem z Modestą', category: 'praca', caption: 'Uwielbiają wodę' },
  { src: '/images/inne/2025-12-31_122270160098236139.avif', alt: 'Zimowa wyprawa do lasu', category: 'praca', caption: 'Nowy Rok 2026 — nowe tropy' },
  { src: '/images/miot-a/2024-03-20_122115393518236139.avif', alt: 'Aria i Eros — bieganie w lesie', category: 'praca', caption: 'Idealne psy do biegania' },
  // ── Rodzice ──
  { src: '/images/mama/aria-portret.avif', alt: 'Aria — portret suki hodowlanej', category: 'rodzice', caption: 'Aria — nasza suka hodowlana' },
  { src: '/images/mama/aria-jezioro-zachod.avif', alt: 'Aria nad jeziorem o zachodzie słońca', category: 'rodzice' },
  { src: '/images/tata/eros-portret.avif', alt: 'Eros z Vallis Baptismi — portret', category: 'rodzice', caption: 'Eros — reproduktor miotu B' },
  { src: '/images/tata/eros-aria-para.avif', alt: 'Aria i Eros — para hodowlana Krainy Wąsaczy', category: 'rodzice' },
  // ── Wystawy ──
  { src: '/images/tata/eros-wystawa-cacib.avif', alt: 'Eros na ringu CACIB w Krakowie', category: 'wystawy', caption: 'CACIB Kraków' },
  { src: '/images/mama/aria-wystawa-podium.avif', alt: 'Aria na podium „1" — Zwycięzca Rasy', category: 'wystawy', caption: 'Zwycięzca Rasy' },
  { src: '/images/tata/eros-wystawa-ring.avif', alt: 'Eros prezentowany w ringu wystawowym', category: 'wystawy' },
  { src: '/images/inne/2024-09-14_122169217496236139.avif', alt: 'Eros — Zwycięzca Rasy CACIB Kraków', category: 'wystawy', caption: 'CACIB Kraków — Zwycięzca Rasy' },
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
