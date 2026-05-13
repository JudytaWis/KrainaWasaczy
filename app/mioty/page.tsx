import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { LITTERS, QUOTES } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Mioty',
  description:
    'Mioty Krainy Wąsaczy — wyżeł czeski (Český fousek) FCI. Miot A (2024), Miot B (2025, Aria × Eros) i planowany Miot C 2026/2027 — rezerwacje otwarte.',
  path: '/mioty',
});

export default function LittersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Mioty', path: '/mioty' },
        ])}
      />

      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Mioty</p>
            <h1 className="heading-xl">Historia i przyszłość hodowli</h1>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 leading-relaxed text-bark-500">
              Nasze mioty od początku planujemy z myślą o jakości, charakterze
              i predyspozycjach pracy. Każde krycie poprzedza analiza pochodzenia,
              zdrowia rodziców i ich kompatybilności genetycznej. Hodujemy w klimacie
              łowieckim — pies pracujący to pies szczęśliwy.
            </p>
            <p className="mt-6 font-serif text-lg italic text-bark-400">
              „{QUOTES.audience}"
            </p>
          </div>
        </div>
      </section>

      {/* LISTA MIOTÓW */}
      <section className="section">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-3">
            {LITTERS.map((litter) => (
              <article key={litter.id} className="card-paper flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                  {litter.coverImage ? (
                    <Image
                      src={litter.coverImage}
                      alt={`${litter.name} — okładka`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-bark-400">
                      <CalendarDays className="h-10 w-10 text-gold" aria-hidden="true" />
                      <span className="px-6 text-center text-sm uppercase tracking-[0.18em]">
                        {litter.name}
                      </span>
                      {litter.plannedFor && (
                        <span className="text-xs text-bark-300">
                          {litter.plannedFor}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow !mb-0">Miot {litter.code}</p>
                    {litter.status === 'planned' ? (
                      <span className="ribbon-accent !tracking-[0.14em]">Rezerwacje</span>
                    ) : (
                      <span className="text-xs uppercase tracking-[0.18em] text-bark-300">
                        Zakończony
                      </span>
                    )}
                  </div>

                  <h2 className="heading-md mt-3">
                    {litter.status === 'past'
                      ? litter.bornDisplay
                      : litter.plannedFor}
                  </h2>

                  <p className="mt-3 text-sm text-bark-400">
                    <span className="font-medium">Rodzice:</span>{' '}
                    {litter.parents.tata} × {litter.parents.mama}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-bark-500">
                    {litter.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/mioty/${litter.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-forest-400 transition hover:text-forest-500"
                    >
                      Szczegóły miotu
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {litter.reservationsOpen && (
                      <Link
                        href="/rezerwacja"
                        className="inline-flex items-center gap-2 rounded-full bg-burgundy-500 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-cream-50 transition hover:bg-burgundy-600"
                      >
                        Rezerwuj
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-forest-500 text-cream-50">
        <div className="container-prose text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Miot C — 2026/2027
          </p>
          <h2 className="heading-lg text-cream-50">Otwieramy rezerwacje</h2>
          <p className="mx-auto mt-6 max-w-xl text-cream-100/90">
            Jeśli szukasz wyżła czeskiego do łowiectwa, do aktywnej rodziny,
            jako partnera w terenie i na co dzień — Miot C może być Twoim wyborem.
          </p>
          <div className="mt-10">
            <Link href="/rezerwacja" className="btn-accent">
              Zarezerwuj szczeniaka
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
