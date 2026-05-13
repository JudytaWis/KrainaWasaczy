import Link from 'next/link';
import { PhoneCall, Handshake, Wallet, PackageCheck, Phone, Mail } from 'lucide-react';
import { ReservationForm } from '@/components/ReservationForm';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { CONTACT, QUOTES, SITE } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Rezerwacja szczeniaka',
  description:
    'Rezerwacja szczeniaka wyżła czeskiego (Český fousek) — Kraina Wąsaczy. Miot C 2026/2027 — rezerwacje otwarte. Wypełnij formularz i porozmawiajmy.',
  path: '/rezerwacja',
});

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Rozmowa telefoniczna',
    desc: 'Po otrzymaniu zgłoszenia dzwonimy lub odpisujemy w ciągu 1–3 dni. Krótka rozmowa o Tobie, Twoim domu i oczekiwaniach.',
  },
  {
    icon: Handshake,
    title: 'Spotkanie / wizyta',
    desc: 'Zapraszamy do nas w Bibicach — można poznać Arię, zobaczyć w jakich warunkach dorastają szczenięta i porozmawiać na żywo.',
  },
  {
    icon: Wallet,
    title: 'Wstępna rezerwacja (zaliczka)',
    desc: 'Po obustronnej akceptacji — wstępna rezerwacja z zaliczką. Kolejność wyboru szczeniąt ustalamy po urodzeniu miotu, według daty rezerwacji.',
  },
  {
    icon: PackageCheck,
    title: 'Odbiór szczeniaka',
    desc: 'Szczenięta wydajemy nie wcześniej niż w 8. tygodniu życia — odrobaczone, zaszczepione, z mikroczipem, książeczką zdrowia i metryką ZKwP. Odbiór: Kraków.',
  },
] as const;

export default function ReservationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Rezerwacja', path: '/rezerwacja' },
        ])}
      />

      {/* HEADER */}
      <section className="bg-bark-700 text-cream-50">
        <div className="absolute inset-x-0 -z-0 h-[420px] bg-gradient-to-br from-bark-700 via-bark-600 to-forest-500" />
        <div className="container-wide relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="ribbon-accent !border-gold/40 !bg-gold/10 !text-gold">
              Miot C — rezerwacje otwarte
            </span>
            <h1 className="heading-xl mt-6 text-cream-50">
              Rezerwacja szczeniaka
            </h1>
            <p className="mt-6 font-serif text-xl italic text-cream-100/90">
              „{QUOTES.reservation}"
            </p>
            <p className="mt-6 leading-relaxed text-cream-100/80">
              Wypełnij formularz — chcemy poznać Ciebie i Twoje oczekiwania. Nie
              jest to jeszcze wiążąca rezerwacja, a początek rozmowy. Zależy nam,
              żeby każdy szczeniak trafił do domu, w którym będzie szczęśliwy.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARZ + KONTAKT */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="heading-md">Formularz rezerwacyjny</h2>
            <p className="mt-3 text-sm text-bark-400">
              Pola oznaczone <span aria-hidden="true">*</span> są wymagane.
            </p>
            <div className="mt-8">
              <ReservationForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="card-paper p-6">
                <h3 className="font-serif text-lg">Wolisz zadzwonić?</h3>
                <p className="mt-2 text-sm text-bark-400">
                  Telefon, WhatsApp lub Messenger — często szybsza odpowiedź niż mail.
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-forest-400" aria-hidden="true" />
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-bark-700 hover:text-forest-400"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-forest-400" aria-hidden="true" />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-bark-700 hover:text-forest-400"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-forest-400 underline hover:text-forest-500"
                >
                  Lub przez Facebook Messenger →
                </a>
              </div>

              <div className="card-paper p-6">
                <h3 className="font-serif text-lg">O rasie</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-500">
                  Český fousek to pies pracujący — wszechstronny myśliwy, pasjonat
                  pracy, wymagający aktywności. Nie dla każdego.{' '}
                  <Link href="/" className="underline text-forest-400 hover:text-forest-500">
                    Poczytaj więcej
                  </Link>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CO DALEJ — kroki po wysłaniu */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Co dalej po wysłaniu zgłoszenia</p>
            <h2 className="heading-lg">Jak wygląda proces</h2>
            <p className="mt-4 text-bark-500">
              Nie sprzedajemy szczeniąt „od ręki" — chcemy poznać Cię najpierw.
              Cały proces zwykle zajmuje od kilku tygodni do kilku miesięcy,
              w zależności od planowanego terminu miotu.
            </p>
          </div>

          <ol className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, idx) => (
              <li key={step.title} className="card-paper relative p-6">
                <span
                  className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-burgundy-500 font-serif text-sm text-cream-50"
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <step.icon className="h-8 w-8 text-forest-400" aria-hidden="true" />
                <h3 className="font-serif text-lg mt-4">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-500">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
