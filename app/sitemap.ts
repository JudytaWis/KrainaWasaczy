import type { MetadataRoute } from 'next';
import { SITE, LITTERS } from '@/lib/placeholders';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<{
    path: string;
    priority: number;
    freq: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1.0, freq: 'monthly' },
    { path: '/hodowla', priority: 0.9, freq: 'monthly' },
    { path: '/o-rasie', priority: 0.85, freq: 'monthly' },
    { path: '/o-nas', priority: 0.85, freq: 'monthly' },
    { path: '/rodzice', priority: 0.9, freq: 'monthly' },
    { path: '/rodzice/mama', priority: 0.8, freq: 'monthly' },
    { path: '/rodzice/tata', priority: 0.8, freq: 'monthly' },
    { path: '/mioty', priority: 0.9, freq: 'monthly' },
    // Miot C (planned, reservations open) — wyższy priorytet, częstsza zmiana
    ...LITTERS.map((l) => ({
      path: `/mioty/${l.id}`,
      priority: l.status === 'planned' ? 0.95 : 0.7,
      freq: (l.status === 'planned' ? 'weekly' : 'yearly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    })),
    { path: '/rezerwacja', priority: 0.95, freq: 'weekly' },
    { path: '/galeria', priority: 0.6, freq: 'monthly' },
    { path: '/kontakt', priority: 0.7, freq: 'yearly' },
    { path: '/polityka-prywatnosci', priority: 0.2, freq: 'yearly' },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
