import Link from 'next/link';
import { FileText, ArrowLeft, Info } from 'lucide-react';
import type { Dog } from '@/lib/placeholders';

type DogDetailProps = {
  dog: Dog;
};

/**
 * Pełna podstrona psa hodowlanego (rodzica).
 * Część pól ma wciąż [TODO: ...] — zob. lib/placeholders.ts.
 */
export function DogDetail({ dog }: DogDetailProps) {
  const gallerySlots = Array.from({ length: dog.galleryCount });

  return (
    <>
      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-12 sm:py-16">
          <Link
            href="/rodzice"
            className="inline-flex items-center gap-2 text-sm text-bark-400 transition hover:text-forest-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Wróć do listy rodziców
          </Link>
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">{dog.role}</p>
              <h1 className="heading-xl">{dog.name}</h1>
              <p className="mt-2 font-serif text-xl italic text-bark-400">
                {dog.kennelName}
              </p>
              <p className="mt-6 max-w-2xl border-l-2 border-gold pl-4 font-serif text-lg italic leading-relaxed text-bark-500">
                „{dog.tagline}"
              </p>
              {!dog.livesAtKennel && (
                <p className="mt-4 inline-flex items-start gap-2 rounded-md bg-cream-50 px-4 py-2 text-xs text-bark-400">
                  <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-forest-400" aria-hidden="true" />
                  <span>
                    Reproduktor wybrany do miotu B — nie mieszka u nas, jest psem z zewnętrznej hodowli.
                  </span>
                </p>
              )}
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={dog.pedigreePdfPath}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Pobierz rodowód (PDF)
                {/* TODO: dodać prawdziwy plik PDF do public/documents/ */}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="placeholder-frame col-span-2 row-span-2 aspect-square lg:col-span-2 lg:row-span-2">
              {/* TODO: <Image src={`/images/${dog.slug}/portrait.jpg`} alt={dog.fullName} fill /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 text-center text-sm uppercase tracking-[0.18em]">
                  Główne zdjęcie
                  <br />
                  <span className="text-xs normal-case tracking-normal text-bark-400">
                    /images/{dog.slug}/portrait.jpg
                  </span>
                </span>
              </div>
            </div>
            {gallerySlots.map((_, i) => (
              <div
                key={i}
                className="placeholder-frame aspect-square"
                aria-label={`Miejsce na zdjęcie ${i + 1}`}
              >
                {/* TODO: <Image src={`/images/${dog.slug}/gallery-${i+1}.jpg`} ... /> */}
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
      <section className="section bg-cream-100">
        <div className="container-prose">
          <p className="eyebrow">O {dog.role === 'Suka hodowlana' ? 'Nancy' : 'Erosie'}</p>
          <h2 className="heading-lg">{dog.fullName}</h2>
          <p className="mt-6 text-lg leading-relaxed text-bark-500">
            {dog.description}
          </p>
        </div>
      </section>

      {/* DANE PODSTAWOWE */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Metryka</p>
            <h2 className="heading-md">Dane podstawowe</h2>
          </div>
          <dl className="lg:col-span-2 divide-y divide-bark-100 rounded-md border border-bark-100 bg-cream-50 px-6">
            {(
              [
                ['Imię', dog.fullName],
                ['Płeć', dog.role === 'Suka hodowlana' ? 'Suka' : 'Pies'],
                ['Data urodzenia', dog.birthDate],
                ['Maść / typ owłosienia', dog.coat],
                ['Numer rodowodowy FCI', dog.pedigreeNumber],
                ['Hodowla pochodzenia', dog.origin],
                ['Ojciec', dog.sire],
                ['Matka', dog.dam],
              ] as const
            ).map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <dt className="w-full max-w-[220px] flex-shrink-0 text-sm font-medium uppercase tracking-wider text-bark-400">
                  {label}
                </dt>
                <dd className="text-bark-700">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* BADANIA / OSIĄGNIĘCIA */}
      <section className="section bg-cream-100">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Badania i osiągnięcia</p>
            <h2 className="heading-md">Zdrowie, próby pracy, wystawy</h2>
          </div>
          <div className="lg:col-span-2 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-serif text-xl">Zdrowie / certyfikaty</h3>
              <ul className="mt-4 space-y-2 text-sm text-bark-500">
                {dog.health.map((item) => (
                  <li key={item} className="border-l-2 border-forest-200 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl">Praca w łowisku</h3>
              <ul className="mt-4 space-y-2 text-sm text-bark-500">
                {dog.trials.map((item) => (
                  <li key={item} className="border-l-2 border-forest-200 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl">Wystawy</h3>
              <ul className="mt-4 space-y-2 text-sm text-bark-500">
                {dog.shows.map((item) => (
                  <li key={item} className="border-l-2 border-forest-200 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CHARAKTER */}
      <section className="section">
        <div className="container-prose">
          <p className="eyebrow">Charakter</p>
          <h2 className="heading-lg">Osobowość</h2>
          <p className="mt-6 text-lg leading-relaxed text-bark-500">{dog.character}</p>
        </div>
      </section>
    </>
  );
}
