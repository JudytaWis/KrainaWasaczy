'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import type { GalleryCategory, GalleryItem } from '@/lib/placeholders';

type Filter = 'all' | GalleryCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Wszystko' },
  { value: 'rodzice', label: 'Rodzice' },
  { value: 'mioty', label: 'Mioty' },
  { value: 'praca', label: 'Praca w polu' },
  { value: 'wystawy', label: 'Wystawy' },
];

type Props = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: Props) {
  const [filter, setFilter] = useState<Filter>('all');

  const visibleItems = useMemo(
    () =>
      filter === 'all'
        ? items
        : items.filter((it) => it.category === filter),
    [items, filter],
  );

  return (
    <div>
      {/* FILTRY */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Filtry galerii">
        {FILTERS.map((f) => {
          const active = f.value === filter;
          return (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition ${
                active
                  ? 'bg-forest-400 text-cream-50'
                  : 'border border-bark-200 bg-cream-50 text-bark-500 hover:border-forest-400 hover:text-forest-400'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* GRID */}
      <ul
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {visibleItems.map((item, i) => (
          <li
            key={item.src}
            className="group relative overflow-hidden rounded-lg bg-cream-200 shadow-sm ring-1 ring-bark-100/40 transition duration-500 hover:shadow-lg hover:ring-gold-500/50"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading={i < 6 ? 'eager' : 'lazy'}
              />
            </div>
            {item.caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark-700/85 via-bark-700/40 to-transparent p-4 text-sm text-cream-50">
                {item.caption}
              </p>
            )}
          </li>
        ))}

        {visibleItems.length === 0 && (
          <li className="col-span-full rounded-md border border-bark-100 bg-cream-50 p-12 text-center text-bark-400">
            Brak zdjęć w tej kategorii.
          </li>
        )}
      </ul>
    </div>
  );
}
