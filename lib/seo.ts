import type { Metadata } from 'next';
import { SITE, CONTACT } from './placeholders';

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string; // np. '/rodzice/mama'
  ogImage?: string;
};

/**
 * Tworzy spójne metadane Next.js dla podstron — title, description, OG, Twitter.
 */
export function pageMetadata({
  title,
  description,
  path = '/',
  ogImage,
}: PageMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === '/' ? `${SITE.name} — ${SITE.shortDescription}` : `${title} — ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/**
 * BreadcrumbList JSON-LD generator.
 */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

/**
 * Organization / LocalBusiness JSON-LD — używany w layout.tsx.
 * Hodowla psów nie ma własnego typu w schema.org — najlepiej pasuje LocalBusiness
 * z additionalType "Dog Breeder".
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://www.productontology.org/id/Dog_breeder',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.fullName,
    description: SITE.longDescription,
    slogan: SITE.tagline,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/opengraph-image`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '4000–7000 PLN',
    currenciesAccepted: 'PLN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      postalCode: SITE.postalCode,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: 'PL',
    knowsAbout: [
      'Český fousek',
      'Wyżeł czeski',
      'Hodowla psów myśliwskich',
      'FCI grupa VII',
    ],
    sameAs: [SITE.facebookUrl],
  };
}
