'use client';

import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { CONTACT } from '@/lib/placeholders';
import { sendEmail, emailjsConfigured, TEMPLATE_RESERVATION } from '@/lib/email';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/** Czy formularz rezerwacji wyśle przez EmailJS (jest service + key + szablon). */
const RESERVATION_READY = emailjsConfigured && Boolean(TEMPLATE_RESERVATION);

const ACTIVITY_OPTIONS = [
  { value: 'mysliwy', label: 'Aktywny myśliwy' },
  { value: 'rodzina', label: 'Aktywna rodzina' },
  { value: 'sport', label: 'Sport kynologiczny (dummy, mantrailing, agility)' },
  { value: 'inne', label: 'Inne' },
] as const;

const SEX_OPTIONS = [
  { value: 'suka', label: 'Suka' },
  { value: 'samiec', label: 'Samiec' },
  { value: 'obojetne', label: 'Bez znaczenia' },
] as const;

const LITTER_OPTIONS = [
  { value: 'C-2026-27', label: 'Miot C — zima 2026/2027' },
  { value: 'przyszly', label: 'Dowolny przyszły miot' },
] as const;

/**
 * Formularz rezerwacji szczeniaka.
 *
 * Wysyłka przez EmailJS (lib/email.ts). Gdy klucze EmailJS nie są ustawione
 * w env, formularz robi fallback na klienta poczty (mailto:).
 */
export function ReservationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const city = String(data.get('city') ?? '').trim();
    const experience = String(data.get('experience') ?? '').trim();
    const activity = String(data.get('activity') ?? '').trim();
    const sex = String(data.get('sex') ?? '').trim();
    const litter = String(data.get('litter') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const rodo = data.get('rodo') === 'on';

    // Walidacja klient — server-side musi to powtórzyć po podpięciu backendu
    if (!name || name.length < 2) {
      setStatus('error');
      setErrorMessage('Proszę podać imię i nazwisko (co najmniej 2 znaki).');
      return;
    }
    if (!phone || phone.replace(/\D/g, '').length < 9) {
      setStatus('error');
      setErrorMessage('Proszę podać prawidłowy numer telefonu.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Proszę podać prawidłowy adres email.');
      return;
    }
    if (!activity) {
      setStatus('error');
      setErrorMessage('Proszę wybrać profil aktywności.');
      return;
    }
    if (!sex) {
      setStatus('error');
      setErrorMessage('Proszę wybrać preferowaną płeć szczeniaka.');
      return;
    }
    if (!rodo) {
      setStatus('error');
      setErrorMessage('Wymagana jest zgoda na przetwarzanie danych (RODO).');
      return;
    }

    // Sformatowane body emaila — czytelne dla hodowcy
    const activityLabel =
      ACTIVITY_OPTIONS.find((o) => o.value === activity)?.label ?? activity;
    const sexLabel = SEX_OPTIONS.find((o) => o.value === sex)?.label ?? sex;
    const litterLabel =
      LITTER_OPTIONS.find((o) => o.value === litter)?.label ?? litter;

    const subject = `Rezerwacja szczeniaka — ${name}`;
    const body = [
      'REZERWACJA SZCZENIAKA — Kraina Wąsaczy',
      '====================================',
      '',
      `Imię i nazwisko: ${name}`,
      `Telefon:         ${phone}`,
      `Email:           ${email}`,
      `Miasto:          ${city || '—'}`,
      '',
      `Profil aktywności:    ${activityLabel}`,
      `Preferowana płeć:     ${sexLabel}`,
      `Preferowany miot:     ${litterLabel || '—'}`,
      '',
      'Doświadczenie z psami:',
      experience || '—',
      '',
      'Dodatkowa wiadomość:',
      message || '—',
      '',
      'Zgoda RODO: TAK',
    ].join('\n');

    try {
      if (RESERVATION_READY) {
        await sendEmail(TEMPLATE_RESERVATION, {
          subject,
          from_name: name,
          reply_to: email,
          phone,
          city: city || '—',
          activity: activityLabel,
          sex: sexLabel,
          litter: litterLabel || '—',
          experience: experience || '—',
          message: message || '—',
        });
      } else {
        // Fallback bez konfiguracji EmailJS — otwórz klienta poczty.
        const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage(
        'Nie udało się wysłać rezerwacji. Spróbuj ponownie lub napisz bezpośrednio na ' +
          CONTACT.email,
      );
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {/* DANE KONTAKTOWE */}
      <fieldset className="space-y-5">
        <legend className="font-serif text-xl text-bark-700">
          Dane kontaktowe
        </legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Imię i nazwisko" required autoComplete="name" minLength={2} maxLength={120} />
          <Field id="phone" label="Telefon" required type="tel" autoComplete="tel" maxLength={32} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="email" label="Email" required type="email" autoComplete="email" maxLength={200} />
          <Field id="city" label="Miasto" autoComplete="address-level2" maxLength={120} />
        </div>
      </fieldset>

      {/* PROFIL */}
      <fieldset className="space-y-5">
        <legend className="font-serif text-xl text-bark-700">
          Profil i preferencje
        </legend>

        <div>
          <span className="block text-sm font-medium text-bark-500">
            Profil aktywności <span aria-hidden="true">*</span>
          </span>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {ACTIVITY_OPTIONS.map((opt) => (
              <RadioOption key={opt.value} name="activity" value={opt.value} label={opt.label} />
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-bark-500">
            Preferowana płeć <span aria-hidden="true">*</span>
          </span>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {SEX_OPTIONS.map((opt) => (
              <RadioOption key={opt.value} name="sex" value={opt.value} label={opt.label} />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="litter" className="block text-sm font-medium text-bark-500">
            Preferencje co do miotu
          </label>
          <select
            id="litter"
            name="litter"
            defaultValue="C-2026-27"
            className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
          >
            {LITTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-bark-500">
            Doświadczenie z psami
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={4}
            maxLength={2000}
            placeholder="Opowiedz krótko o swoim doświadczeniu z psami (rasy, lata, praca w łowisku, sporty)."
            className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-bark-500">
            Dodatkowa wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={4000}
            placeholder="Cokolwiek chcesz nam przekazać — pytania, oczekiwania, sytuacja domowa, plany z psem."
            className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
          />
        </div>
      </fieldset>

      {/* RODO */}
      <label className="flex items-start gap-3 text-sm text-bark-400">
        <input
          id="rodo"
          name="rodo"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-bark-300 text-forest-400 focus:ring-forest-400"
        />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez {' '}
          <strong>Kraina Wąsaczy</strong> w celu kontaktu w sprawie rezerwacji
          szczeniaka. Dane nie są udostępniane podmiotom trzecim. <span aria-hidden="true">*</span>
        </span>
      </label>

      {/* SUBMIT */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="btn-accent disabled:opacity-60"
          disabled={status === 'submitting'}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {status === 'submitting' ? 'Wysyłanie...' : 'Wyślij rezerwację'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-forest-400" role="status">
            {RESERVATION_READY
              ? 'Dziękujemy! Rezerwacja została wysłana. Odpowiemy w ciągu 1-3 dni.'
              : 'Otwarto Twój klient poczty — wystarczy wysłać wiadomość. Odpowiemy w ciągu 1-3 dni.'}
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

/* ───────── helpers ───────── */

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
};

function Field({
  id,
  label,
  required,
  type = 'text',
  autoComplete,
  minLength,
  maxLength,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-bark-500">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className="mt-2 block w-full rounded-md border border-bark-100 bg-cream-50 px-4 py-3 text-bark-700 placeholder:text-bark-200 focus:border-forest-400 focus:outline-none focus:ring-2 focus:ring-forest-400/30"
      />
    </div>
  );
}

function RadioOption({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-bark-100 bg-cream-50 px-3 py-2.5 text-sm text-bark-500 transition hover:border-forest-400 has-[:checked]:border-forest-400 has-[:checked]:bg-forest-50">
      <input
        type="radio"
        name={name}
        value={value}
        required
        className="h-4 w-4 border-bark-300 text-forest-400 focus:ring-forest-400"
      />
      <span>{label}</span>
    </label>
  );
}
