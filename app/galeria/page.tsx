import { Film } from 'lucide-react';
import { GalleryGrid } from '@/components/GalleryGrid';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { GALLERY, GALLERY_VIDEOS } from '@/lib/placeholders';

export const metadata = pageMetadata({
  title: 'Galeria',
  description:
    'Galeria zdjęć i filmów Krainy Wąsaczy — wyżeł czeski w łowisku, szczenięta z miotów A, B i C, rodzice, wystawy.',
  path: '/galeria',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Galeria', path: '/galeria' },
        ])}
      />

      {/* HEADER */}
      <section className="bg-cream-100">
        <div className="container-wide py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Galeria</p>
            <h1 className="heading-xl">Zdjęcia i filmy z hodowli</h1>
            <div className="ornament-divider">
              <span aria-hidden="true" />
            </div>
            <p className="mt-2 leading-relaxed text-bark-500">
              Codzienność w Krainie Wąsaczy — od pierwszych dni szczeniąt, przez
              pracę naszych psów w łowisku, po wystawy i sukcesy. Galeria jest
              uzupełniana na bieżąco.
            </p>
          </div>
        </div>
      </section>

      {/* ZDJĘCIA */}
      <section className="section">
        <div className="container-wide">
          <GalleryGrid items={GALLERY} />
        </div>
      </section>

      {/* FILMY */}
      <section className="section bg-cream-100">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Filmy</p>
            <h2 className="heading-lg">Psy w pracy</h2>
            <p className="mt-4 text-bark-500">
              Krótkie nagrania z łowiska, treningu i z życia szczeniąt.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_VIDEOS.map((video) => (
              <article key={video.title} className="card-paper overflow-hidden">
                <div className="relative aspect-video w-full bg-bark-700">
                  {video.youtubeId ? (
                    // Lazy-loaded YouTube iframe na domenie no-cookies + sandboxowany
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                      title={video.title}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    // Placeholder — czeka na ID filmu
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cream-100/80">
                      <Film className="h-10 w-10 text-gold" aria-hidden="true" />
                      <span className="px-4 text-center text-xs uppercase tracking-[0.18em]">
                        Film wkrótce
                      </span>
                      {/* TODO: po nagraniu — wgraj film na YouTube i wpisz `youtubeId` w lib/placeholders.ts.
                          Alternatywnie: wgraj .mp4 do /public/videos/ i podmień iframe na <video src=...>. */}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg">{video.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark-400">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
