'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Facebook, ChevronDown } from 'lucide-react';
import { SITE } from '@/lib/placeholders';

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: 'Strona główna', href: '/' },
  {
    label: 'Rodzice',
    href: '/rodzice',
    children: [
      { label: 'Nancy (suka)', href: '/rodzice/mama' },
      { label: 'Eros (reproduktor)', href: '/rodzice/tata' },
    ],
  },
  {
    label: 'Mioty',
    href: '/mioty',
    children: [
      { label: 'Miot A — 2024', href: '/mioty/a' },
      { label: 'Miot B — 2025', href: '/mioty/b' },
      { label: 'Miot C — rezerwacje', href: '/mioty/c' },
    ],
  },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-bark-100/60 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/80">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col leading-tight"
          aria-label={`${SITE.name} — strona główna`}
        >
          <span className="font-serif text-xl text-bark-700 transition group-hover:text-forest-400 sm:text-2xl">
            {SITE.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-bark-300 sm:text-xs">
            {SITE.shortDescription}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-bark-500 transition hover:text-forest-400"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.href}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
                {openDropdown === item.href && (
                  <div className="absolute left-0 top-full pt-3">
                    <ul className="min-w-[240px] rounded-md border border-bark-100 bg-cream-50 py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-bark-500 transition hover:bg-bark-50 hover:text-forest-400"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-bark-500 transition hover:text-forest-400"
              >
                {item.label}
              </Link>
            ),
          )}

          {/* CTA Rezerwacja — wyróżnione, burgundy */}
          <Link
            href="/rezerwacja"
            className="inline-flex items-center justify-center rounded-full bg-burgundy-500 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-cream-50 transition hover:bg-burgundy-600"
          >
            Zarezerwuj szczeniaka
          </Link>

          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bark-200 text-bark-500 transition hover:border-forest-400 hover:text-forest-400"
            aria-label="Facebook hodowli (otwiera się w nowej karcie)"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-bark-500 lg:hidden"
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-bark-100 bg-cream-50 lg:hidden"
          aria-label="Mobilna nawigacja"
        >
          <ul className="container-wide flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-bark-500 transition hover:text-forest-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-bark-100 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-bark-400 transition hover:text-forest-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-3">
              <Link
                href="/rezerwacja"
                className="inline-flex w-full items-center justify-center rounded-full bg-burgundy-500 px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream-50 transition hover:bg-burgundy-600"
                onClick={() => setMobileOpen(false)}
              >
                Zarezerwuj szczeniaka
              </Link>
            </li>
            <li>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 py-2 text-sm text-bark-500 hover:text-forest-400"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Facebook hodowli
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
