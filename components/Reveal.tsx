'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Milisekundowe opóźnienie animacji (do efektu staggera w gridach) */
  delay?: number;
  /** Dystans w px, z którego sekcja się wynurza */
  distance?: number;
  /** Dodatkowe klasy na wrapper */
  className?: string;
  /** 'up' (default) | 'left' | 'right' | 'fade' */
  direction?: 'up' | 'left' | 'right' | 'fade';
};

export function Reveal({
  children,
  delay = 0,
  distance = 24,
  className = '',
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const initialTransform =
    direction === 'left'
      ? `translateX(-${distance}px)`
      : direction === 'right'
        ? `translateX(${distance}px)`
        : direction === 'fade'
          ? 'none'
          : `translateY(${distance}px)`;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : initialTransform,
        transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
}
