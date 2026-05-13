import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Dog } from '@/lib/placeholders';

type DogCardProps = {
  dog: Dog;
};

export function DogCard({ dog }: DogCardProps) {
  const href = `/rodzice/${dog.slug}`;

  return (
    <article className="card-paper group flex flex-col overflow-hidden">
      <Link
        href={href}
        className="relative block aspect-[4/5] w-full overflow-hidden"
        aria-label={`${dog.role} — ${dog.fullName}, przejdź do podstrony`}
      >
        {dog.portraitImage ? (
          <Image
            src={dog.portraitImage}
            alt={`${dog.name} — ${dog.role.toLowerCase()}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="placeholder-frame flex h-full w-full items-center justify-center">
            <span className="px-6 text-center text-sm uppercase tracking-[0.18em]">
              Zdjęcie {dog.role.toLowerCase()}
            </span>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{dog.role}</p>
        <h3 className="heading-md mt-1">{dog.name}</h3>
        <p className="font-serif text-base italic text-bark-400">
          {dog.kennelName}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-bark-500">
          „{dog.tagline}"
        </p>
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-forest-400 transition hover:text-forest-500"
          >
            Poznaj {dog.role === 'Suka hodowlana' ? 'naszą sukę' : 'naszego reproduktora'}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
