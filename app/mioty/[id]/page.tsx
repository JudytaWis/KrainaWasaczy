import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CalendarDays, Star, Lock, Info } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { LITTERS, LITTERS_BY_ID, SITE, type Litter } from '@/lib/placeholders';

type Params = { id: 'a' | 'b' | 'c' };

export function generateStaticParams(): Params[] {
  return LITTERS.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const litter = LITTERS_BY_ID[params.id];
  if (!litter) {
    return pageMetadata({ title: 'Miot — nie znaleziono', description: '', path: `/mioty/${params.id}` });
  }
  const dateInfo =
    litter.status === 'past' ? `Urodzony ${litter.bornDisplay}` : `Planowany — ${litter.plannedFor}`;
  return pageMetadata({
    title: `${litter.name} — ${litter.parents.tata} × ${litter.parents.mama}`,
    description: `${litter.name} Krainy Wąsaczy. ${dateInfo}. ${litter.description}`,
    path: `/mioty/${litter.id}`,
  });
}

/** Schema.org Offer dla miotu z otwartymi rezerwacjami (PreOrder) */
function litterOfferJsonLd(litter: Litter) {
  if (!litter.reservationsOpen) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `Szczenięta wyżła czeskiego — ${litter.name}`,
    description: litter.description,
    url: `${SITE.url}/mioty/${litter.id}`,
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'PLN',
    // Cena nie jest publikowana — kontakt po wstępnej rezerwacji
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'PLN',
      // Pole celowo bez `price` — hodowla ustala cenę indywidualnie
    },
    seller: {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
    },
  };
}

export default function LitterPage({ params }: { params: Params }) {
  const litter = LITTERS_BY_ID[params.id];
  if (!litter) notFound();

  const offerSchema = litterOfferJsonLd(litter);
  const gallerySlots = Array.from({ length: litter.galleryCount });
  const isPlanned = litter.status === 'planned';

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Mioty', path: '/mioty' },
          { name: litter.name, path: `/mioty/${litter.id}` },
        ])}
      />
      {offerSchema && <JsonLd data={offerSchema} />}

      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-12 sm:py-16">
          <Link
            href="/mioty"
            className="inline-flex items-center gap-2 text-sm text-bark-400 transition hover:text-forest-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Wszystkie mioty
          </Link>
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <p className="eyebrow !mb-0">Miot {litter.code}</p>
                {isPlanned ? (
                  <span className="ribbon-accent">Rezerwacje otwarte</span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-bark-200 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-bark-400">
                    <Lock className="h-3 w-3" aria-hidden="true" />
                    Zakończony
                  </span>
                )}
              </div>
              <h1 className="heading-xl mt-4">{litter.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-bark-400">
                <CalendarDays className="h-5 w-5 text-forest-400" aria-hidden="true" />
                {isPlanned
                  ? `Planowany — ${litter.plannedFor}`
                  : `Urodzony ${litter.bornDisplay}`}
              </p>
            </div>
            {isPlanned && (
              <div className="lg:col-span-4 lg:text-right">
                <Link href="/rezerwacja" className="btn-accent">
                  {litter.ctaText ?? 'Zarezerwuj szczeniaka'}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RODZICE */}
      <section className="section">
        <div className="container-wide grid gap-8 lg:grid-cols-2">
          {/* Tata */}
          <ParentCard
            role="Reproduktor (ojciec)"
            fullName={litter.parents.tata}
            link={litter.parents.tataSlug ? `/rodzice/${litter.parents.tataSlug}` : undefined}
          />
          {/* Mama */}
          <ParentCard
            role="Suka hodowlana (matka)"
            fullName={litter.parents.mama}
            link={litter.parents.mamaSlug ? `/rodzice/${litter.parents.mamaSlug}` : undefined}
          />
        </div>
      </section>

      {/* GALERIA */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <p className="eyebrow text-center">Galeria miotu</p>
          <h2 className="heading-lg text-center">Zdjęcia szczeniąt i rodziców</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallerySlots.map((_, i) => (
              <div
                key={i}
                className="placeholder-frame aspect-square"
                aria-label={`${litter.name} — miejsce na zdjęcie ${i + 1}`}
              >
                {/* TODO: <Image src={`/images/miot-${litter.id}/${i+1}.jpg`} ... /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.18em]">
                    Zdjęcie {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPIS */}
      {litter.longDescription && (
        <section className="section">
          <div className="container-prose">
            <p className="eyebrow">O miocie</p>
            <h2 className="heading-lg">Charakter i pochodzenie</h2>
            <p className="mt-6 text-lg leading-relaxed text-bark-500">
              {litter.longDescription}
            </p>
          </div>
        </section>
      )}

      {/* SZCZENIĘTA WYRÓŻNIONE */}
      {litter.notableLittermates && litter.notableLittermates.length > 0 && (
        <section className="section bg-cream-100">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Wyróżnione szczenięta</p>
              <h2 className="heading-lg">Niektóre z naszych podopiecznych</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {litter.notableLittermates.map((pup) => (
                <article key={pup.name} className="card-paper p-6">
                  <div className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <h3 className="font-serif text-xl">{pup.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-bark-500">
                        {pup.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER MIOTU — status / CTA */}
      <section className="section">
        <div className="container-prose">
          {isPlanned ? (
            <div className="rounded-md border border-burgundy-500/30 bg-burgundy-500/5 p-8 text-center">
              <h3 className="heading-md text-bark-700">Rezerwacje otwarte</h3>
              <p className="mt-3 text-bark-500">
                {litter.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/rezerwacja" className="btn-accent">
                  Wypełnij formularz rezerwacji
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/kontakt" className="btn-secondary">
                  Skontaktuj się z nami
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-md border border-bark-100 bg-cream-50 p-8 text-center">
              <Info className="mx-auto h-6 w-6 text-forest-400" aria-hidden="true" />
              <h3 className="heading-md mt-3 text-bark-700">Miot zakończony</h3>
              <p className="mt-3 text-bark-500">
                Wszystkie szczenięta z {litter.name.toLowerCase()} są już w nowych domach.
                Jeśli interesuje Cię miot z naszej hodowli, zerknij na{' '}
                <Link href="/mioty/c" className="underline text-forest-400 hover:text-forest-500">
                  Miot C — rezerwacje otwarte
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ParentCard({
  role,
  fullName,
  link,
}: {
  role: string;
  fullName: string;
  link?: string;
}) {
  const isTodo = fullName.startsWith('[TODO');
  const content = (
    <article className="card-paper flex h-full flex-col p-6">
      <p className="eyebrow">{role}</p>
      <h3 className="heading-md mt-1">{fullName}</h3>
      {link ? (
        <p className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-forest-400">
          Karta psa <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </p>
      ) : (
        <p className="mt-auto pt-4 text-xs italic text-bark-400">
          {isTodo
            ? 'Reproduktor zostanie ogłoszony przed kryciem.'
            : 'Brak osobnej karty — pies z zewnętrznej hodowli.'}
        </p>
      )}
    </article>
  );
  return link ? <Link href={link}>{content}</Link> : content;
}
