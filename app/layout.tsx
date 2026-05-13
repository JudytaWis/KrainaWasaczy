import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { organizationJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/placeholders';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

const display = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.shortDescription}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.longDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: 'Next.js',
  keywords: [
    'Český fousek',
    'wyżeł czeski',
    'fousek',
    'hodowla wyżła czeskiego',
    'hodowla psów myśliwskich',
    'FCI',
    'pies myśliwski',
    'szczenięta wyżła czeskiego',
    'Kraków',
    'Bibice',
    'małopolska',
    'Kraina Wąsaczy',
  ],
  alternates: {
    canonical: '/',
    languages: { 'pl-PL': '/' },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.shortDescription}`,
    description: SITE.longDescription,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — hodowla wyżła czeskiego`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.shortDescription}`,
    description: SITE.longDescription,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-forest-400 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
