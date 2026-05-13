import { Phone, Mail, Facebook, Clock, MapPin, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { MapEmbed } from '@/components/MapEmbed';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { SITE, CONTACT } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Kontakt',
  description: `Skontaktuj się z hodowlą ${SITE.name} z Bibic koło Krakowa. Telefon, WhatsApp, Messenger, email. Pytania o szczenięta wyżła czeskiego (Český fousek) i nasze mioty.`,
  path: '/kontakt',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Kontakt', path: '/kontakt' },
        ])}
      />

      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kontakt</p>
            <h1 className="heading-xl">Porozmawiajmy</h1>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 leading-relaxed text-bark-500">
              Masz pytania o naszą hodowlę, planowane mioty albo chcesz po prostu
              poznać rasę bliżej? Skontaktuj się z nami — chętnie odpowiemy.
            </p>
          </div>
        </div>
      </section>

      {/* DANE + FORMULARZ */}
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <h2 className="heading-md">Dane kontaktowe</h2>
            <ul className="mt-6 space-y-5 text-bark-500">
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">
                    Telefon · WhatsApp
                  </p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-bark-700 hover:text-forest-400"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <p className="mt-1 text-xs text-bark-400">
                    Dostępne także na{' '}
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-forest-400"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-bark-700 hover:text-forest-400"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">
                    Facebook
                  </p>
                  <a
                    href={SITE.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bark-700 hover:text-forest-400"
                  >
                    Kraina Wąsaczy — fanpage
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">
                    Messenger
                  </p>
                  <p className="text-bark-700">{CONTACT.messengerNote}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">
                    Lokalizacja
                  </p>
                  <p className="text-bark-700">
                    {SITE.city} {SITE.postalCode}
                    <br />
                    {SITE.county}, woj. {SITE.region}
                    <br />
                    <span className="text-sm text-bark-400">
                      Odbiór szczeniąt: {SITE.pickupCity}
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-bark-300">
                    Godziny kontaktu
                  </p>
                  <p className="text-bark-700">
                    Pon. – Pt.: {CONTACT.hoursWeekdays}
                    <br />
                    Sob. – Nd.: {CONTACT.hoursWeekend}
                  </p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="lg:col-span-3">
            <h2 className="heading-md">Napisz do nas</h2>
            <p className="mt-3 text-sm text-bark-400">
              Pola oznaczone <span aria-hidden="true">*</span> są wymagane. Jeśli
              chcesz zapytać konkretnie o rezerwację szczeniaka — wypełnij{' '}
              <a href="/rezerwacja" className="underline hover:text-forest-400">
                formularz rezerwacyjny
              </a>
              .
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Mapa dojazdu</p>
            <h2 className="heading-lg">Jak do nas trafić</h2>
            <p className="mt-4 text-bark-500">
              Hodowla mieści się w Bibicach koło Krakowa (gmina Zielonki, województwo
              małopolskie). Dokładny adres przekazujemy po wcześniejszym ustaleniu wizyty.
              Odbiór szczeniąt odbywa się w Krakowie.
            </p>
          </div>
          <div className="mt-10">
            <MapEmbed height={480} />
          </div>
        </div>
      </section>
    </>
  );
}
