import emailjs from '@emailjs/browser';

/**
 * Wysyłka maili przez EmailJS (https://www.emailjs.com).
 *
 * Klucze pochodzą ze zmiennych środowiskowych z prefiksem NEXT_PUBLIC_,
 * bo wysyłka odbywa się po stronie przeglądarki. Public Key EmailJS jest
 * z założenia publiczny — ochrona przed nadużyciem to lista dozwolonych
 * domen ustawiona w panelu EmailJS (Account → Security → Allowed origins).
 *
 * Dwa osobne szablony:
 *   - TEMPLATE_CONTACT     → formularz kontaktowy
 *   - TEMPLATE_RESERVATION → formularz rezerwacji szczeniaka
 */

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const TEMPLATE_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT;
export const TEMPLATE_RESERVATION = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_RESERVATION;

/** Czy EmailJS ma podstawową konfigurację (service + public key). */
export const emailjsConfigured = Boolean(SERVICE_ID && PUBLIC_KEY);

/**
 * Wysyła wiadomość przez wybrany szablon EmailJS.
 * Rzuca wyjątkiem, jeśli brak konfiguracji albo wysyłka się nie powiedzie.
 */
export async function sendEmail(
  templateId: string | undefined,
  params: Record<string, string>,
) {
  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    throw new Error('EmailJS nie jest skonfigurowany (brak zmiennych NEXT_PUBLIC_EMAILJS_*).');
  }

  return emailjs.send(SERVICE_ID, templateId, params, { publicKey: PUBLIC_KEY });
}
