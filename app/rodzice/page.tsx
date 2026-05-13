import { DogCard } from '@/components/DogCard';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { DOGS } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Nasi rodzice',
  description:
    'Poznaj psy hodowlane Krainy Wąsaczy — Aria (Nancy ze Staropleských luk) (suka) i Erosa z Vallis Baptismi (reproduktor miotu B). Rodowody ZKwP / FCI, charaktery, praca w łowisku.',
  path: '/rodzice',
});

export default function ParentsListPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Nasi rodzice', path: '/rodzice' },
        ])}
      />

      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Nasi rodzice</p>
            <h1 className="heading-xl">Aria i Eros</h1>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 leading-relaxed text-bark-500">
              Poznaj psy stanowiące fundament naszej hodowli. Każdy z nich
              posiada wymagane przez Związek Kynologiczny w Polsce badania
              i dopuszczenia do hodowli, a ich predyspozycje użytkowe są
              potwierdzone codzienną pracą w łowisku.
            </p>
            <p className="mt-4 text-sm text-bark-400">
              Aria mieszka u nas i jest podstawą hodowli. Eros to reproduktor
              wybrany do miotu B — pies z zewnętrznej hodowli.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <DogCard dog={DOGS.mama} />
            <DogCard dog={DOGS.tata} />
          </div>
        </div>
      </section>
    </>
  );
}
