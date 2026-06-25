import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { SITE, CONTACT } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Polityka prywatności',
  description: `Polityka prywatności hodowli ${SITE.name}. Informacje o przetwarzaniu danych osobowych zgodnie z RODO przy kontakcie i rezerwacji szczeniąt.`,
  path: '/polityka-prywatnosci',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Polityka prywatności', path: '/polityka-prywatnosci' },
        ])}
      />

      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Informacja prawna</p>
            <h1 className="heading-xl">Polityka prywatności</h1>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 leading-relaxed text-bark-500">
              Informacja o przetwarzaniu danych osobowych zgodnie z RODO.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <article className="container-prose prose-bark space-y-8 text-bark-600">
          <div>
            <h2 className="heading-md">1. Administrator danych</h2>
            <p className="mt-3 leading-relaxed">
              Administratorem Twoich danych osobowych jest hodowla{' '}
              <strong>{SITE.name}</strong> z siedzibą w {SITE.city} ({SITE.postalCode}),{' '}
              {SITE.county}, województwo {SITE.region}. Kontakt z administratorem:{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-forest-400 underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
              , tel. {CONTACT.phoneDisplay}.
            </p>
          </div>

          <div>
            <h2 className="heading-md">2. Cel i podstawa przetwarzania</h2>
            <p className="mt-3 leading-relaxed">
              Twoje dane (imię, nazwisko, numer telefonu, adres e-mail, miasto oraz
              dane wpisane w treści wiadomości / formularza rezerwacji) przetwarzamy
              wyłącznie w celu:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>odpowiedzi na zapytanie wysłane przez formularz kontaktowy,</li>
              <li>obsługi procesu rezerwacji szczeniaka z planowanego miotu,</li>
              <li>
                późniejszego kontaktu telefonicznego, mailowego lub poprzez WhatsApp /
                Messenger w sprawie hodowli i szczeniąt,
              </li>
              <li>
                ewentualnego zawarcia i wykonania umowy rezerwacyjnej oraz umowy
                sprzedaży szczenięcia.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Podstawą prawną przetwarzania jest Twoja zgoda (art. 6 ust. 1 lit. a
              RODO) oraz — w przypadku rezerwacji — działania zmierzające do zawarcia
              umowy (art. 6 ust. 1 lit. b RODO).
            </p>
          </div>

          <div>
            <h2 className="heading-md">3. Okres przechowywania</h2>
            <p className="mt-3 leading-relaxed">
              Dane przechowujemy przez czas niezbędny do obsługi Twojego zapytania,
              nie dłużej niż 24 miesiące od ostatniego kontaktu, chyba że dojdzie do
              zawarcia umowy — wówczas przez okres wymagany przepisami (m.in. dla
              celów podatkowych przez 5 lat).
            </p>
          </div>

          <div>
            <h2 className="heading-md">4. Odbiorcy danych</h2>
            <p className="mt-3 leading-relaxed">
              Twoich danych nie udostępniamy podmiotom trzecim z wyjątkiem dostawców
              technicznych: hostingu strony (Vercel Inc.), usługi wysyłki wiadomości
              z formularzy (EmailJS) oraz poczty elektronicznej (Google / Gmail),
              a także przypadków, gdy obowiązek udostępnienia wynika z przepisów prawa.
              Część z tych dostawców działa poza Europejskim Obszarem Gospodarczym —
              przekazywanie danych odbywa się wówczas na podstawie standardowych
              klauzul umownych zatwierdzonych przez Komisję Europejską.
            </p>
          </div>

          <div>
            <h2 className="heading-md">5. Twoje prawa</h2>
            <p className="mt-3 leading-relaxed">
              W każdej chwili masz prawo do: dostępu do swoich danych, ich
              sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia
              danych, wniesienia sprzeciwu oraz cofnięcia zgody. Masz również prawo
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
              (ul. Stawki 2, 00-193 Warszawa).
            </p>
            <p className="mt-3 leading-relaxed">
              Aby skorzystać z tych praw, napisz na{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-forest-400 underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="heading-md">6. Pliki cookies i analityka</h2>
            <p className="mt-3 leading-relaxed">
              Strona w wersji podstawowej nie używa plików cookies analitycznych ani
              reklamowych. Mapa dojazdu osadzona jest z serwisu OpenStreetMap — bez
              śledzących skryptów. Filmy w galerii (jeśli pojawią się w przyszłości)
              osadzane są w trybie zwiększonej prywatności (youtube-nocookie.com).
            </p>
          </div>

          <div>
            <h2 className="heading-md">7. Dobrowolność podania danych</h2>
            <p className="mt-3 leading-relaxed">
              Podanie danych jest dobrowolne, ale niezbędne do obsługi zapytania
              i procesu rezerwacji szczeniaka. Bez kontaktu telefonicznego lub
              mailowego nie jesteśmy w stanie omówić warunków oraz przygotować
              odpowiedzi na Twoje pytania.
            </p>
          </div>

          <p className="text-sm text-bark-300">
            Ostatnia aktualizacja: maj 2026 r.
          </p>
        </article>
      </section>
    </>
  );
}
