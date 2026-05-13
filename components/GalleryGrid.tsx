'use client';

import { useState, useMemo } from 'react';
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
        {visibleItems.map((item) => (
          <li key={item.src} className="card-paper overflow-hidden">
            <div className="placeholder-frame aspect-[4/3] w-full">
              {/* Po wgraniu zdjęcia do /public — podmień na <Image src={item.src} alt={item.alt} fill /> */}
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <span className="text-xs uppercase tracking-[0.18em]">
                  {item.alt}
                </span>
              </div>
            </div>
            {item.caption && (
              <p className="px-4 py-3 text-sm text-bark-400">
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
