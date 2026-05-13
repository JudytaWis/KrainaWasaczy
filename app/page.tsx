import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, HeartHandshake, Trees, Crosshair, CalendarDays } from 'lucide-react';
import { DogCard } from '@/components/DogCard';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { DOGS, SITE, LITTERS, BREED_INFO, QUOTES, NEWS } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Strona główna',
  description:
    'Kraina Wąsaczy — rodzinna hodowla wyżła czeskiego (Český fousek) FCI z Bibic koło Krakowa. Linia użytkowa, psy pracujące. Rezerwacje na miot C 2026 otwarte.',
  path: '/',
});

export default function HomePage() {
  const plannedLitter = LITTERS.find((l) => l.status === 'planned');

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: 'Strona główna', path: '/' }])}
      />

      {/* HERO — ciemny brąz → leśna zieleń */}
      <section className="relative overflow-hidden bg-bark-700 text-cream-50">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-br from-bark-700 via-bark-600 to-forest-500" />
        <div className="absolute inset-0 -z-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-forest-300 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-bark-100 blur-3xl" />
        </div>

        <div className="container-wide relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Hodowla FCI · ZKwP · grupa VII · wyżły
            </p>
            <h1 className="heading-xl text-cream-50">
              {SITE.name}
              <span className="mt-3 block font-serif text-2xl font-normal text-cream-100/80 sm:text-3xl">
                {SITE.shortDescription}
              </span>
            </h1>
            <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-5 font-serif text-xl italic leading-relaxed text-cream-100/90">
              „{QUOTES.hero}"
            </blockquote>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/80">
              Rodzinna hodowla wyżła czeskiego z Bibic koło Krakowa — założona z pasji
              do mało znanej w Polsce, wspaniałej rasy. Hodowca jest myśliwym, psy
              pracujące, linia użytkowa, sprawdzone pochodzenie.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/rezerwacja" className="btn-accent">
                Zarezerwuj szczeniaka
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/rodzice"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-wider text-cream-50 transition hover:bg-cream-50/10"
              >
                Poznaj rodziców
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-gold/30 shadow-2xl">
              <Image
                src="/images/inne/2025-12-31_122270160098236139.avif"
                alt="Aria i Eros — wyżły czeskie z Krainy Wąsaczy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-gold/80">
              Aria & Eros — nasze psy hodowlane
            </p>
          </div>
        </div>
      </section>

      {/* AKTUALNY MIOT — wyróżniony pasek/karta */}
      {plannedLitter && (
        <section className="border-b border-bark-100 bg-cream-100">
          <div className="container-wide py-10 sm:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <span className="ribbon-accent">Rezerwacje otwarte</span>
                <h2 className="heading-md mt-4">
                  {plannedLitter.name} —{' '}
                  <span className="font-serif italic text-bark-400">
                    {plannedLitter.plannedFor}
                  </span>
                </h2>
                <p className="mt-3 max-w-2xl text-bark-500">
                  {plannedLitter.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <Link href="/rezerwacja" className="btn-accent">
                  Zarezerwuj
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={`/mioty/${plannedLitter.id}`} className="btn-secondary">
                  Szczegóły miotu
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* O HODOWLI */}
      <section className="section">
        <Reveal>
          <div className="container-prose text-center">
            <p className="eyebrow">O hodowli</p>
            <h2 className="heading-lg">Pasja, myślistwo, miłość do rasy</h2>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 text-lg leading-relaxed text-bark-500">
              Kraina Wąsaczy to nowo powstała hodowla z Bibic koło Krakowa,
              zarejestrowana w {SITE.registration}. Naszym celem jest rozpropagowanie
              tej mało znanej w naszym kraju wspaniałej rasy psów. Hodowla założona
              z pasji — z myślą o miłośnikach wyżła czeskiego, dla których pies to nie
              tylko towarzysz, ale i partner w łowisku.
            </p>
            <p className="mt-4 text-bark-500">
              Hodowca jest myśliwym. Stawiamy na linie użytkowe, sprawdzone
              pochodzenie i psy gotowe do pracy w polu, lesie i nad wodą.
            </p>
          </div>
        </Reveal>

        <div className="container-wide mt-16 grid gap-8 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="card-paper p-8 text-center">
              <Crosshair
                className="mx-auto h-10 w-10 text-forest-400"
                aria-hidden="true"
              />
              <h3 className="heading-md mt-4 text-xl">Linia użytkowa</h3>
              <p className="mt-3 text-sm leading-relaxed text-bark-400">
                Sprawdzone pochodzenie, psy pracujące w łowisku — wystawianie, aport
                z lądu i z wody, tropienie.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-paper p-8 text-center">
              <Award className="mx-auto h-10 w-10 text-forest-400" aria-hidden="true" />
              <h3 className="heading-md mt-4 text-xl">Rodowód ZKwP / FCI</h3>
              <p className="mt-3 text-sm leading-relaxed text-bark-400">
                Hodowla zarejestrowana w Związku Kynologicznym w Polsce. Rodzice z badaniami
                i dopuszczeniami do hodowli.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="card-paper p-8 text-center">
              <HeartHandshake
                className="mx-auto h-10 w-10 text-forest-400"
                aria-hidden="true"
              />
              <h3 className="heading-md mt-4 text-xl">Wychowanie rodzinne</h3>
              <p className="mt-3 text-sm leading-relaxed text-bark-400">
                Szczenięta rodzą się i dorastają w domu — od pierwszych dni socjalizacja,
                kontakt z ludźmi i naturą.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NASI RODZICE */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Nasi rodzice</p>
              <h2 className="heading-lg">Aria i Eros</h2>
              <p className="mt-4 text-bark-500">
                Poznaj psy, które tworzą podstawę naszej hodowli — ich rodowody,
                osiągnięcia w łowisku i charaktery.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Reveal direction="left">
              <DogCard dog={DOGS.mama} />
            </Reveal>
            <Reveal direction="right">
              <DogCard dog={DOGS.tata} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MIOTY — karty A / B / C */}
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Mioty</p>
              <h2 className="heading-lg">Historia i przyszłość Krainy Wąsaczy</h2>
              <p className="mt-4 text-bark-500">
                Od pierwszego miotu w marcu 2024 — z każdym kolejnym pokoleniem dbamy
                o jakość, charakter i predyspozycje pracy.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {LITTERS.map((litter, i) => (
              <Reveal key={litter.id} delay={i * 100}>
              <Link
                href={`/mioty/${litter.id}`}
                className="card-paper flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow !mb-0">{litter.name}</p>
                  {litter.status === 'planned' && (
                    <span className="rounded-full bg-burgundy-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-burgundy-600">
                      Rezerwacje
                    </span>
                  )}
                </div>
                <p className="mt-2 font-serif text-3xl text-bark-700">{litter.code}</p>
                <p className="mt-1 text-sm text-bark-400">
                  {litter.status === 'past'
                    ? `Urodzony ${litter.bornDisplay}`
                    : `Planowany — ${litter.plannedFor}`}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-bark-500">
                  {litter.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-forest-400">
                  Zobacz miot <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/mioty" className="btn-secondary">
              Wszystkie mioty
            </Link>
          </div>
        </div>
      </section>

      {/* RASA — pełny opis z FB */}
      <section className="section bg-forest-500 text-cream-50">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Český fousek
            </p>
            <h2 className="heading-lg text-cream-50">
              Czeski wyżeł szorstkowłosy
            </h2>
            <div className="ornament-divider mx-0">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 text-base leading-relaxed text-cream-100/90">
              {BREED_INFO.shortDescription}
            </p>
            {BREED_INFO.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-cream-100/80">
                {p}
              </p>
            ))}
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg ring-1 ring-gold/30 shadow-xl">
            <Image
              src="/images/inne/2025-08-29_122247499040236139.avif"
              alt="Český fousek — wyżeł czeski szorstkowłosy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* AKTUALNOŚCI — wybrane wpisy z naszego Facebooka */}
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Aktualności</p>
              <h2 className="heading-lg">Z naszego życia</h2>
              <p className="mt-4 text-bark-500">
                Najnowsze wpisy z Facebooka — mioty, codzienność, porady zdrowotne,
                wystawy i wydarzenia.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS.slice(0, 6).map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <article className="card-paper flex h-full flex-col overflow-hidden">
                  {item.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-bark-300">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={item.date}>
                        {new Date(item.date).toLocaleDateString('pl-PL', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="rounded-full bg-forest-400/10 px-2 py-0.5 text-[10px] text-forest-400">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl leading-tight text-bark-700">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-bark-500">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Więcej na Facebooku
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* DLA KOGO NASZE SZCZENIĘTA */}
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Dla kogo nasze szczenięta</p>
              <h2 className="heading-lg">Komu polecamy Krainę Wąsaczy</h2>
              <p className="mt-4 text-bark-500">„{QUOTES.audience}"</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {BREED_INFO.targetAudience.map((target, i) => (
              <Reveal key={target.title} delay={i * 120}>
                <div className="card-paper h-full p-8">
                  <Trees className="h-8 w-8 text-forest-400" aria-hidden="true" />
                  <h3 className="font-serif text-xl mt-4">{target.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bark-400">
                    {target.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA KONTAKT */}
      <section className="section bg-cream-100">
        <div className="container-prose text-center">
          <p className="eyebrow">Kontakt</p>
          <h2 className="heading-lg">Porozmawiajmy o szczeniaku</h2>
          <p className="mt-4 text-bark-500">
            Zapraszamy do kontaktu — telefonicznie, mailowo, przez Messenger lub
            WhatsApp. Chętnie odpowiemy na pytania o naszą hodowlę, planowane mioty
            i rasę.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/rezerwacja" className="btn-accent">
              Zarezerwuj szczeniaka
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/kontakt" className="btn-secondary">
              Przejdź do kontaktu
            </Link>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Facebook hodowli
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
