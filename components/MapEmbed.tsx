type MapEmbedProps = {
  /** Wysokość ramki w pikselach (klasy Tailwind do nadpisania spoza) */
  height?: number;
  className?: string;
  title?: string;
};

/**
 * Lekki embed OpenStreetMap (bez zewnętrznych skryptów ani trackerów Google).
 * Bibice koło Krakowa — bbox zawiera centrum miejscowości.
 */
export function MapEmbed({
  height = 400,
  className,
  title = 'Mapa dojazdu — Bibice koło Krakowa',
}: MapEmbedProps) {
  // OSM iframe bbox: south, west, north, east
  // Bibice (gmina Zielonki) approx: lat 50.124, lon 19.948
  const bbox = '19.92,50.10,19.98,50.15';
  const marker = '50.1247,19.9486';
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-bark-100 ${
        className ?? ''
      }`}
      style={{ height }}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        // Sandboxing: no scripts, no top-nav — only static map
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
}
