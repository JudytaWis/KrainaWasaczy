'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'kw-cookie-ack-v1';

/**
 * Prosty baner informacyjny o plikach cookies.
 *
 * Strona nie używa cookies analitycznych ani reklamowych — jedyne to cookies
 * niezbędne (techniczne) oraz wysyłka formularzy przez EmailJS. Dlatego nie ma
 * tu granularnej zgody, a jedynie informacja z potwierdzeniem „Rozumiem".
 * Wybór zapisujemy w localStorage, żeby nie pokazywać banera ponownie.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage niedostępny (tryb prywatny) — pokaż baner, bez zapisu
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informacja o plikach cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-bark-700/95 px-4 py-4 text-cream-100 backdrop-blur sm:px-6"
    >
      <div className="container-wide flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-3 text-sm leading-relaxed text-cream-100/85">
          <Cookie className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
          <span>
            Ta strona używa wyłącznie niezbędnych plików cookies do poprawnego
            działania. Nie stosujemy śledzenia ani reklam. Szczegóły znajdziesz w{' '}
            <Link
              href="/polityka-prywatnosci"
              className="underline underline-offset-2 hover:text-cream-50"
            >
              polityce prywatności
            </Link>
            .
          </span>
        </p>
        <button
          type="button"
          onClick={accept}
          className="btn-accent shrink-0 self-start sm:self-auto"
        >
          Rozumiem
        </button>
      </div>
    </div>
  );
}
