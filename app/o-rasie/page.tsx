import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'O rasie — wyżeł czeski (Český fousek): charakter, wygląd, użytkowość',
  description:
    'Wyżeł czeski szorstkowłosy (Český fousek) — charakter, temperament, wygląd, historia i użytkowość rasy. Wszechstronny pies myśliwski. Hodowla psów myśliwskich w Małopolsce, blisko Krakowa.',
  path: '/o-rasie',
});

const SECTIONS: Array<{ h2: string; body: string[] }> = [
  {
    h2: 'Wyżeł czeski szorstkowłosy — wszechstronny pies myśliwski',
    body: [
      'Wyżeł czeski (Český fousek) to wszechstronny pies myśliwski sklasyfikowany przez FCI w Grupie 7 — wyżły. To rasa stworzona do pracy w polu, w lesie i w wodzie: wystawia zwierzynę, aportuje z lądu i z wody, tropi po śladzie. Dla wielu myśliwych w Polsce i w Małopolsce wyżeł czeski to wzór psa użytkowego — niezawodnego partnera na polowaniu.',
      'W naszej hodowli psów myśliwskich w Małopolsce stawiamy właśnie na te cechy: silny instynkt łowiecki, świetny nos, pasję do wody i chęć współpracy z człowiekiem.',
    ],
  },
  {
    h2: 'Historia rasy — czeski wyżeł szorstkowłosy',
    body: [
      'Český fousek to jedna z najstarszych czeskich ras wyżłów, znana już w średniowieczu. Po I wojnie światowej rasa niemal wyginęła — została odtworzona w latach 20. i 30. XX wieku przez czeskich hodowców, którzy odbudowali ją w oparciu o psy użytkowe. Dzięki temu wyżeł czeski do dziś zachował mocny charakter psa pracującego i zrównoważoną psychikę.',
    ],
  },
  {
    h2: 'Charakter i temperament wyżła czeskiego',
    body: [
      'Charakter wyżła czeskiego to połączenie pasji łowieckiej z łagodnością w domu. To pies żywy, inteligentny i bardzo przywiązany do swojej rodziny — chętnie współpracuje z człowiekiem i szybko się uczy. Temperament ma zrównoważony: w pracy energiczny i skupiony, w domu spokojny i czuły.',
      'Wyżeł czeski dobrze czuje się w aktywnej rodzinie, dogaduje się z dziećmi i innymi zwierzętami. Potrzebuje ruchu, zajęcia i kontaktu z opiekunem — to nie pies do zostawiania samemu sobie, lecz towarzysz do wspólnego działania.',
    ],
  },
  {
    h2: 'Wygląd, umaszczenie i wzrost',
    body: [
      'Wyżeł czeski to pies średniej wielkości o mocnej, harmonijnej budowie. Psy osiągają zwykle 60–66 cm w kłębie, suki 58–62 cm. Charakterystyczna jest szorstka, przylegająca okrywa włosowa oraz wyraźne „wąsy" i brwi, którym rasa zawdzięcza przydomek „wąsacze".',
      'Umaszczenie wyżła czeskiego to przede wszystkim deresz (siwy deresz z brązową głową), brązowy deresz z cętkowaniem oraz jednolicie brązowe. Taka szata dobrze maskuje psa w terenie i chroni go podczas pracy w gęstwinie i w wodzie.',
    ],
  },
  {
    h2: 'Użytkowość — pies myśliwski w polu, lesie i wodzie',
    body: [
      'Użytkowość to serce tej rasy. Wyżeł czeski to wszechstronny pies myśliwski: pewnie wystawia ptactwo, aportuje z lądu i z wody, tropi po śladzie postrzałka. Uwielbia wodę i pływanie, ma doskonały węch i wrodzoną legawość.',
      'Dla myśliwego z Małopolski i okolic Krakowa to praktyczny wybór — jeden pies do wielu zadań w łowisku. Dla rodziny niemyśliwskiej ta sama energia świetnie sprawdzi się w sportach kynologicznych, tropieniu i długich wyprawach w teren.',
    ],
  },
  {
    h2: 'Zdrowie, pielęgnacja i wychowanie',
    body: [
      'Wyżeł czeski to rasa generalnie zdrowa i wytrzymała. Szorstka szata wymaga niewielkiej pielęgnacji — okresowego trymowania i czesania. Najważniejsze dla dobrostanu psa jest jednak zaspokojenie potrzeby ruchu i pracy węchowej.',
      'Szczeniaka warto od początku socjalizować i konsekwentnie, łagodnie prowadzić — wyżeł czeski jest chętny do współpracy i szybko przyswaja zasady. Im więcej wspólnych aktywności, tym lepiej rozwija swój potencjał użytkowy.',
    ],
  },
];

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'Czy wyżeł czeski jest przyjazny dla dzieci?',
    a: 'Tak. Wyżeł czeski to łagodny, rodzinny pies. Nasze szczenięta wychowują się od pierwszych dni razem z małymi dziećmi, a nawet niemowlakami w domu — dzięki temu są świetnie zsocjalizowane, cierpliwe i przyjazne. To doskonały towarzysz dla aktywnej rodziny z dziećmi.',
  },
  {
    q: 'Ile kosztuje szczeniak wyżła czeskiego?',
    a: 'Cena zależy od miotu, rodowodu (ZKwP / FCI) oraz tego, czy rezerwacja jest wcześniejsza. Średnio szczeniak wyżła czeskiego kosztuje od 4000 do 7000 zł. Szczegóły zawsze ustalamy indywidualnie — najlepiej napisz lub zadzwoń do nas.',
  },
  {
    q: 'Jak długo czeka się na szczeniaka?',
    a: 'To zależy od dostępności. Czasem mamy szczeniaki od ręki, a czasem prowadzimy rezerwacje na planowany miot — wtedy na odbiór czeka się zwykle do kilku miesięcy. Warto zapytać o aktualną dostępność i zapisać się na listę rezerwacyjną.',
  },
  {
    q: 'Czy wyżeł czeski nadaje się na polowanie?',
    a: 'Zdecydowanie tak. Český fousek to wszechstronny pies myśliwski — wystawia zwierzynę, aportuje z lądu i z wody, tropi po śladzie. Nasze psy pochodzą ze sprawdzonych linii użytkowych, więc szczeniaki mają silny instynkt łowiecki, świetny nos i naturalną legawość.',
  },
  {
    q: 'Czy wyżeł czeski sprawdzi się w rodzinie niemyśliwskiej?',
    a: 'Tak, pod warunkiem zapewnienia mu ruchu i zajęcia. To pies energiczny i inteligentny — uwielbia długie spacery, pływanie, tropienie i wspólne aktywności. W aktywnej rodzinie będzie szczęśliwym, oddanym towarzyszem także bez polowań.',
  },
];

export default function ORasiePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Hodowla', path: '/hodowla' },
          { name: 'O rasie', path: '/o-rasie' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      {/* HERO */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">O rasie · FCI Grupa 7</p>
              <h1 className="heading-xl">
                Wyżeł czeski (Český fousek) — charakter, wygląd i użytkowość rasy
              </h1>
              <div className="ornament-divider">
                <span aria-hidden="true" />
              </div>
              <p className="mt-2 leading-relaxed text-bark-500">
                Wszystko o wyżle czeskim szorstkowłosym — wszechstronnym{' '}
                <strong>psie myśliwskim</strong> o łagodnym, rodzinnym charakterze.
                Poznaj rasę, którą hodujemy w naszej{' '}
                <Link href="/hodowla" className="text-forest-400 underline hover:text-forest-500">
                  hodowli psów myśliwskich w Małopolsce
                </Link>
                , blisko Krakowa.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OBRAZEK */}
      <section className="section">
        <div className="container-wide grid gap-4 sm:grid-cols-3">
          {[
            { src: '/images/tata/eros-wystawa-ring.avif', alt: 'Wyżeł czeski (Český fousek) w pozycji wystawowej — eksterier rasy' },
            { src: '/images/miot-b/woda-aport-1.avif', alt: 'Wyżeł czeski aportuje z wody — użytkowość psa myśliwskiego' },
            { src: '/images/miot-a/szczenie-portret-brodka.avif', alt: 'Szczeniak wyżła czeskiego — charakterystyczne wąsy i broda' },
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

      {/* SEKCJE O RASIE */}
      {SECTIONS.map((s, i) => (
        <section key={s.h2} className={i % 2 === 1 ? 'section bg-cream-100' : 'section'}>
          <div className="container-prose text-bark-500">
            <h2 className="heading-lg">{s.h2}</h2>
            {s.body.map((p, j) => (
              <p key={j} className={`${j === 0 ? 'mt-6 text-lg' : 'mt-4'} leading-relaxed`}>
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section bg-cream-100">
        <div className="container-prose">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg">Najczęstsze pytania o wyżła czeskiego</h2>
          <dl className="mt-8 divide-y divide-bark-100">
            {FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-serif text-xl text-bark-700">{f.q}</dt>
                <dd className="mt-3 leading-relaxed text-bark-500">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide">
          <div className="rounded-lg bg-cream-100 px-6 py-12 text-center sm:px-12">
            <h2 className="heading-lg">Chcesz szczeniaka wyżła czeskiego?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-bark-500">
              Jeśli wyżeł czeski to rasa dla Ciebie, sprawdź nasze mioty i zarezerwuj
              szczeniaka z hodowli psów myśliwskich w Małopolsce, blisko Krakowa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/mioty" className="btn-primary">
                Zobacz mioty i szczeniaki
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/hodowla" className="btn-secondary">
                O naszej hodowli
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
