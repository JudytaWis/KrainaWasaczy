import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PawPrint, MapPin, Crosshair, Award } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Hodowla wyżła czeskiego blisko Krakowa — psy myśliwskie i szczeniaki',
  description:
    'Hodowla psów myśliwskich blisko Krakowa (Bibice, gmina Zielonki). Wyżeł czeski (Český fousek) z rodowodem FCI — szczeniaki do łowiectwa i dla aktywnej rodziny. Rezerwacje miotu otwarte.',
  path: '/hodowla',
});

export default function HodowlaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Hodowla', path: '/hodowla' },
        ])}
      />

      {/* HERO */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Hodowla wyżła czeskiego · FCI</p>
              <h1 className="heading-xl">
                Hodowla psów myśliwskich blisko Krakowa — wyżeł czeski (Český fousek)
              </h1>
              <div className="ornament-divider">
                <span aria-hidden="true" />
              </div>
              <p className="mt-2 leading-relaxed text-bark-500">
                Kraina Wąsaczy to rodzinna <strong>hodowla wyżła czeskiego</strong> spod
                Krakowa. Hodujemy <strong>psy myśliwskie</strong> z rodowodem ZKwP / FCI —
                szczeniaki do łowiectwa, prób pracy i dla aktywnej rodziny. Mieszkamy
                w Bibicach (gmina Zielonki), tuż przy Krakowie.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/rezerwacja" className="btn-primary">
                  Zarezerwuj szczeniaka
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/mioty" className="btn-secondary">
                  Zobacz nasze mioty
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HODOWLA WYŻŁA CZESKIEGO */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-gold/30 shadow-xl">
              <Image
                src="/images/inne/hodowca-wyzly-czeskie-wystawa.avif"
                alt="Hodowla wyżła czeskiego blisko Krakowa — hodowca z psami myśliwskimi na wystawie"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="space-y-5 text-bark-500">
              <p className="eyebrow !text-forest-400">Kim jesteśmy</p>
              <h2 className="heading-lg">Hodowla wyżła czeskiego z pasji do łowiectwa</h2>
              <p className="text-lg leading-relaxed">
                Nasza <strong>hodowla wyżła czeskiego</strong> powstała z miłości do
                mało znanej w Polsce, wszechstronnej czeskiej rasy. Český fousek to
                klasyczny <strong>pies myśliwski</strong> — wytrwały w polu, w lesie
                i w wodzie. Stawiamy na linie użytkowe: nasze psy pracują, wystawiają
                i są pełnoprawnymi członkami rodziny.
              </p>
              <p className="leading-relaxed">
                Każdy nasz miot to szczenięta po rodzicach z rodowodem FCI, wychowane
                w domu, od pierwszych tygodni socjalizowane z ludźmi, dziećmi i naturą.
                Poznaj naszych rodziców —{' '}
                <Link href="/rodzice/mama" className="text-forest-400 underline hover:text-forest-500">
                  Arię
                </Link>{' '}
                i{' '}
                <Link href="/rodzice/tata" className="text-forest-400 underline hover:text-forest-500">
                  Erosa
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SZCZENIAKI / PSY MYŚLIWSKIE */}
      <section className="section bg-cream-100">
        <div className="container-prose text-bark-500">
          <p className="eyebrow">Szczeniaki wyżła czeskiego</p>
          <h2 className="heading-lg">Psy myśliwskie i szczeniaki z rodowodem FCI</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Szukasz <strong>szczeniaka wyżła czeskiego</strong>? Nasze szczenięta to
            przyszłe <strong>psy myśliwskie</strong> z genami pracy — silny instynkt
            łowiecki, świetny nos, zrównoważona psychika i piękny eksterier. To
            idealny wybór zarówno dla myśliwych, jak i dla aktywnych rodzin szukających
            mądrego, oddanego towarzysza.
          </p>
          <p className="mt-4 leading-relaxed">
            Mioty planujemy rozważnie, a rezerwacje prowadzimy z wyprzedzeniem.
            Sprawdź aktualnie{' '}
            <Link href="/mioty/c" className="text-forest-400 underline hover:text-forest-500">
              planowany miot z otwartymi rezerwacjami
            </Link>{' '}
            oraz historię{' '}
            <Link href="/mioty" className="text-forest-400 underline hover:text-forest-500">
              naszych miotów
            </Link>
            .
          </p>
        </div>
        <div className="container-wide mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { src: '/images/miot-a/szczenie-portret-brodka.avif', alt: 'Szczeniak wyżła czeskiego — hodowla blisko Krakowa' },
            { src: '/images/miot-a/szczeniaki-w-trawie.avif', alt: 'Szczeniaki wyżła czeskiego bawią się w trawie' },
            { src: '/images/miot-b/woda-plywanie-1.avif', alt: 'Pies myśliwski wyżeł czeski aportuje z wody' },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-bark-100/40 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={68}
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HODOWLA PSA BLISKO KRAKOWA — lokalne SEO */}
      <section className="section">
        <div className="container-prose text-bark-500">
          <p className="eyebrow">Lokalizacja</p>
          <h2 className="heading-lg">Hodowla psa blisko Krakowa — Bibice, gmina Zielonki</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Jesteśmy <strong>hodowlą psów blisko Krakowa</strong> — w Bibicach, w gminie
            Zielonki, kilka minut od granic miasta. To wygodna lokalizacja dla osób
            szukających <strong>hodowli psa w Krakowie</strong> i okolicach: Zielonki,
            Michałowice, Zabierzów, Wieliczka, cała Małopolska. Odbiór szczeniąt
            ustalamy indywidualnie, najczęściej w Krakowie.
          </p>
          <p className="mt-4 leading-relaxed">
            Jako <strong>hodowla psów myśliwskich w Małopolsce</strong> stawiamy na
            sprawdzone linie użytkowe wyżła czeskiego — nasze szczeniaki trafiają do
            myśliwych i aktywnych rodzin z Krakowa, Małopolski i całej Polski.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, t: 'Blisko Krakowa', d: 'Bibice, gmina Zielonki — tuż przy Krakowie.' },
              { icon: Crosshair, t: 'Linie użytkowe', d: 'Psy myśliwskie sprawdzone w polu, lesie i wodzie.' },
              { icon: Award, t: 'Rodowód FCI', d: 'Szczenięta po rodzicach z rodowodem ZKwP / FCI.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg border border-bark-100 bg-cream-50 p-6">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-xl text-bark-700">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WYŻEŁ CZESKI — RASA */}
      <section className="section bg-cream-100">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="space-y-5 text-bark-500 order-2 lg:order-1">
              <p className="eyebrow !text-forest-400">Rasa</p>
              <h2 className="heading-lg">Wyżeł czeski — pies myśliwski i rodzinny w jednym</h2>
              <p className="text-lg leading-relaxed">
                Wyżeł czeski szorstkowłosy (Český fousek) to wszechstronny{' '}
                <strong>pies myśliwski</strong>: wystawia, aportuje z lądu i z wody,
                tropi. Jednocześnie to pies o łagodnym, rodzinnym usposobieniu —
                przywiązany do człowieka, dobry z dziećmi, spokojny w domu.
              </p>
              <p className="leading-relaxed">
                W naszej <strong>hodowli wyżła czeskiego</strong> łączymy eksterier
                wystawowy z prawdziwym charakterem psa pracującego. Zobacz{' '}
                <Link href="/galeria" className="text-forest-400 underline hover:text-forest-500">
                  galerię naszych psów
                </Link>{' '}
                albo poznaj{' '}
                <Link href="/o-nas" className="text-forest-400 underline hover:text-forest-500">
                  naszą historię
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-gold/30 shadow-xl order-1 lg:order-2">
              <Image
                src="/images/tata/eros-portret.avif"
                alt="Wyżeł czeski (Český fousek) — pies myśliwski z hodowli blisko Krakowa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="rounded-lg bg-cream-100 px-6 py-12 text-center sm:px-12">
            <PawPrint className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="heading-lg mt-4">Szukasz szczeniaka wyżła czeskiego?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bark-500">
              Jeśli marzysz o psie myśliwskim z hodowli blisko Krakowa — wypełnij
              formularz rezerwacji albo napisz do nas. Chętnie odpowiemy na pytania
              o wyżła czeskiego, nasze mioty i dostępne szczeniaki.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/rezerwacja" className="btn-primary">
                Wypełnij formularz rezerwacji
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/kontakt" className="btn-secondary">
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
