import Link from 'next/link';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { SITE, CONTACT } from '@/lib/placeholders';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-bark-100 bg-bark-700 text-cream-100">
      <div className="container-wide grid gap-12 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-cream-50">{SITE.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream-100/70">
            {SITE.shortDescription}
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/80">
            {SITE.longDescription}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-cream-100/60">
            Hodowla zarejestrowana w {SITE.registration}
          </p>
          <p className="mt-2 text-xs italic text-cream-100/60">
            „{SITE.tagline}"
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg text-cream-50">Kontakt</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-100"
                aria-hidden="true"
              />
              <span>
                {SITE.city} {SITE.postalCode}
                <br />
                {SITE.county}, woj. {SITE.region}
                <br />
                <span className="text-cream-100/60">(odbiór szczeniąt: {SITE.pickupCity})</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-100"
                aria-hidden="true"
              />
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-cream-50"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-100"
                aria-hidden="true"
              />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-cream-50">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Facebook
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-100"
                aria-hidden="true"
              />
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg text-cream-50">Strony</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-cream-50">
                Strona główna
              </Link>
            </li>
            <li>
              <Link href="/hodowla" className="hover:text-cream-50">
                Hodowla
              </Link>
            </li>
            <li>
              <Link href="/o-nas" className="hover:text-cream-50">
                O nas
              </Link>
            </li>
            <li>
              <Link href="/o-rasie" className="hover:text-cream-50">
                O rasie — wyżeł czeski
              </Link>
            </li>
            <li>
              <Link href="/rodzice" className="hover:text-cream-50">
                Nasi rodzice
              </Link>
            </li>
            <li>
              <Link href="/rodzice/mama" className="hover:text-cream-50">
                Aria (suka)
              </Link>
            </li>
            <li>
              <Link href="/rodzice/tata" className="hover:text-cream-50">
                Eros (reproduktor)
              </Link>
            </li>
            <li>
              <Link href="/mioty" className="hover:text-cream-50">
                Mioty
              </Link>
            </li>
            <li>
              <Link href="/mioty/c" className="text-burgundy-500 hover:text-cream-50">
                Miot C — rezerwacje
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-cream-50">
                Galeria
              </Link>
            </li>
            <li>
              <Link href="/rezerwacja" className="hover:text-cream-50">
                Rezerwacja
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-cream-50">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/polityka-prywatnosci" className="hover:text-cream-50">
              Polityka prywatności
            </Link>
            <a href="/sitemap.xml" className="hover:text-cream-50">
              Mapa strony
            </a>
            <a
              href="https://highheelscode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cream-50"
            >
              Design &amp; Development: High Heels Code
              <img
                src="/images/hhc-logo.svg"
                alt="High Heels Code"
                width={12}
                height={11}
                loading="lazy"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
