import Link from 'next/link';
import Image from 'next/image';
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
  // Normalizujemy galerię do par { src, alt } — wpisy tekstowe dostają alt generowany.
  const gallery = (dog.galleryImages ?? []).map((img) =>
    typeof img === 'string' ? { src: img, alt: `${dog.name} — zdjęcie` } : img,
  );
  const mainImg = dog.portraitImage ?? gallery[0]?.src;
  const mainAlt =
    gallery.find((img) => img.src === mainImg)?.alt ?? `${dog.name} — główne zdjęcie`;
  const restImgs = mainImg ? gallery.filter((img) => img.src !== mainImg) : [];

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
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Pobierz rodowód (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section">
        <div className="container-wide">
          {mainImg ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg shadow-xl ring-1 ring-gold/30 lg:col-span-2 lg:row-span-2">
                <Image
                  src={mainImg}
                  alt={mainAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  quality={70}
                  className="object-cover"
                />
              </div>
              {restImgs.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-bark-100/40 transition hover:shadow-lg hover:ring-gold/40"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    quality={68}
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              <div className="placeholder-frame col-span-2 row-span-2 aspect-square lg:col-span-2 lg:row-span-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-6 text-center text-sm uppercase tracking-[0.18em]">
                    Główne zdjęcie
                  </span>
                </div>
              </div>
              {gallerySlots.map((_, i) => (
                <div
                  key={i}
                  className="placeholder-frame aspect-square"
                  aria-label={`Miejsce na zdjęcie ${i + 1}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.18em]">
                      Zdjęcie {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OPIS */}
      <section className="section bg-cream-100">
        <div className="container-prose">
          <p className="eyebrow">O {dog.role === 'Suka hodowlana' ? 'Arii' : 'Erosie'}</p>
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

      {/* OSIĄGNIĘCIA WYSTAWOWE */}
      {dog.shows.length > 0 && (
        <section className="section bg-cream-100">
          <div className="container-wide grid gap-12 lg:grid-cols-3">
            <div>
              <p className="eyebrow">Osiągnięcia</p>
              <h2 className="heading-md">Wystawy i sukcesy</h2>
            </div>
            <ul className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {dog.shows.map((item) => (
                <li key={item} className="border-l-2 border-forest-200 pl-4 text-bark-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
