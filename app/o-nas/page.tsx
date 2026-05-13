import Image from 'next/image';
import Link from 'next/link';
import { Heart, Crosshair, Award, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { SITE, QUOTES } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'O nas',
  description: `Poznaj naszą rodzinę i historię hodowli ${SITE.name}. Modesta Adamczyk i Artur — pasjonaci wyżła czeskiego, myśliwi, hodowcy z Bibic koło Krakowa.`,
  path: '/o-nas',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'O nas', path: '/o-nas' },
        ])}
      />

      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">O nas</p>
              <h1 className="heading-xl">Modesta, Artur, Aria i Eros</h1>
              <div className="ornament-divider">
                <span aria-hidden="true" />
              </div>
              <p className="mt-2 leading-relaxed text-bark-500">
                Rodzina, pasja i wyżeł czeski — to fundament naszej hodowli.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HISTORIA — Modesta z psem */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-gold/30 shadow-xl">
              <Image
                src="/images/inne/2025-02-09_122200512524236139.avif"
                alt="Modesta Adamczyk z psem — Kraina Wąsaczy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="prose-bark space-y-5 text-bark-500">
              <p className="eyebrow !text-forest-400">Nasza historia</p>
              <h2 className="heading-lg text-bark-700">Hodowla założona z pasji</h2>
              <p className="leading-relaxed">
                Jesteśmy{' '}
                <strong className="text-bark-700">Modestą Adamczyk i Arturem</strong>{' '}
                — parą myśliwych i miłośników psów rasowych z Bibic koło Krakowa.{' '}
                <em>Kraina Wąsaczy</em> to nie tylko nazwa hodowli — to wyraz naszej
                fascynacji wyżłem czeskim szorstkowłosym (Český fousek), mało
                jeszcze znaną w Polsce, ale niezwykle wszechstronną rasą myśliwską.
              </p>
              <p className="leading-relaxed">
                Hodowlę założyliśmy z pasji, nie z planu biznesowego. Naszym celem
                jest <strong>rozpropagowanie tej wspaniałej rasy</strong> — psów
                pracujących, zrównoważonych i przywiązanych do człowieka.
              </p>
              <p className="leading-relaxed">
                Aria i Eros są dla nas członkami rodziny, nie produkcją hodowlaną.
                Mieszkają z nami w domu, dorastają razem, codziennie chodzą
                z nami w teren — do lasu, na łąki, nad wodę. Tak też wychowują się
                nasze szczenięta: w domowych warunkach, otoczone uwagą,
                socjalizowane od pierwszych tygodni.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RODZINNE ZDJĘCIA — Modesta + Artur + Aria + Eros */}
      <section className="bg-cream-100">
        <div className="container-wide py-16">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Pies = członek rodziny</p>
              <h2 className="heading-lg">Razem na co dzień</h2>
              <p className="mt-4 text-bark-500">
                Aria i Eros nie żyją w boksach — są z nami w domu, w samochodzie,
                w terenie. Każda chwila wspólnie spędzona to inwestycja w ich
                charakter i więź z nami.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal direction="left">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-bark-100/40">
                <Image
                  src="/images/inne/2025-02-09_122200512380236139.avif"
                  alt="Rodzinne zdjęcie — Modesta, Artur, Aria i Eros w salonie"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-bark-100/40">
                <Image
                  src="/images/inne/2025-02-09_122200512470236139.avif"
                  alt="Z naszymi psami w domu"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WARTOŚCI */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Wartości hodowli</p>
              <h2 className="heading-lg">W co wierzymy</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <Reveal delay={0}>
              <div className="card-paper h-full p-8 text-center">
                <Heart className="mx-auto h-10 w-10 text-burgundy-500" aria-hidden="true" />
                <h3 className="font-serif text-xl mt-4">Pies = członek rodziny</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark-400">
                  Psy nie żyją u nas w boksach — śpią w domu, jedzą z nami, dorastają
                  razem z dziećmi. Tę samą filozofię polecamy każdemu kto rezerwuje
                  u nas szczeniaka.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card-paper h-full p-8 text-center">
                <Crosshair className="mx-auto h-10 w-10 text-forest-400" aria-hidden="true" />
                <h3 className="font-serif text-xl mt-4">Linia użytkowa</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark-400">
                  Hodowca jest myśliwym. Stawiamy na psy gotowe do pracy w polu,
                  lesie i nad wodą. Aria i Eros codziennie pracują z nami w łowisku —
                  ich potomstwo dziedziczy ten instynkt.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="card-paper h-full p-8 text-center">
                <Award className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
                <h3 className="font-serif text-xl mt-4">Jakość, nie ilość</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark-400">
                  Hodowla zarejestrowana w ZKwP / FCI. Rodzice z badaniami zdrowia,
                  dopuszczeniami do hodowli i osiągnięciami wystawowymi (Zwycięzca
                  Rasy CACIB Kraków).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CYTATY / FILOZOFIA */}
      <section className="section bg-bark-700 text-cream-50">
        <div className="container-prose text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Nasza filozofia
          </p>
          <blockquote className="font-serif text-3xl italic leading-tight text-cream-50">
            „{QUOTES.hero}"
          </blockquote>
          <p className="mt-6 text-cream-100/80">
            Ofertę naszą kierujemy do osób poszukujących{' '}
            <strong className="text-cream-50">aktywnych psów pracujących</strong> —
            myśliwych, miłośników sportów kynologicznych, rodzin gotowych zapewnić
            psu dużo ruchu i pracy umysłowej.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-prose text-center">
          <p className="eyebrow">Skontaktuj się</p>
          <h2 className="heading-lg">Porozmawiajmy o szczeniaku</h2>
          <p className="mt-4 text-bark-500">
            Chętnie opowiemy więcej o naszych psach, planowanych miotach i o tym,
            co czeka Cię z wyżłem czeskim w domu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/rezerwacja" className="btn-accent">
              Zarezerwuj szczeniaka
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
