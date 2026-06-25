'use client';

import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { CONTACT } from '@/lib/placeholders';
import { sendEmail, emailjsConfigured, TEMPLATE_CONTACT } from '@/lib/email';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Czy formularz kontaktowy wyśle przez EmailJS (jest service + key + szablon). */
const CONTACT_READY = emailjsConfigured && Boolean(TEMPLATE_CONTACT);

/**
 * Formularz kontaktowy.
 *
 * Wysyłka przez EmailJS (lib/email.ts). Gdy klucze EmailJS nie są ustawione
 * w env, formularz robi fallback na klienta poczty (mailto:).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    // Basic client-side validation — server-side validation must mirror this
    // once a real backend endpoint is added.
    if (!name || name.length < 2) {
      setStatus('error');
      setErrorMessage('Proszę podać imię i nazwisko (co najmniej 2 znaki).');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Proszę podać prawidłowy adres email.');
      return;
    }
    if (!message || message.length < 10) {
      setStatus('error');
      setErrorMessage('Wiadomość powinna zawierać co najmniej 10 znaków.');
      return;
    }

    const subject = `Zapytanie ze strony — ${name}`;
    const body = `Imię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${
      phone || '—'
    }\n\nWiadomość:\n${message}`;

    try {
      if (CONTACT_READY) {
        await sendEmail(TEMPLATE_CONTACT, {
          subject,
          from_name: name,
          reply_to: email,
          phone: phone || '—',
          message,
        });
      } else {
        // Fallback bez konfiguracji EmailJS — otwórz klienta poczty.
        const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage(
        'Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na ' +
          CONTACT.email,
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bark-500">
            Imię i nazwisko <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bark-500">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-bark-500">
          Telefon <span className="text-bark-200">(opcjonalnie)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={32}
          className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bark-500">
          Wiadomość <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={4000}
          className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
        />
      </div>

      <div className="flex items-start gap-2 text-xs text-bark-400">
        <p>
          Wysyłając wiadomość wyrażasz zgodę na kontakt zwrotny w sprawie zapytania.
          {/* TODO: link do polityki prywatności */}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-primary disabled:opacity-60"
          disabled={status === 'submitting'}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {status === 'submitting' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-forest-400" role="status">
            {CONTACT_READY
              ? 'Dziękujemy! Wiadomość została wysłana — odezwiemy się wkrótce.'
              : 'Otwarto Twój klient poczty — wystarczy wysłać wiadomość.'}
          </p>
        )}
        {status === 'error' && errorMessage && (
          <p className="text-sm text-burgundy-500" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
