import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/placeholders';

export const runtime = 'edge';
export const alt = `${SITE.name} — ${SITE.shortDescription}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Dynamic OG image. Uses system fonts (no external font fetches at build time),
 * so it works offline / on CI without network.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #FAF7F2 0%, #F4EFE6 55%, #E8DFD0 100%)',
          fontFamily: 'Georgia, serif',
          color: '#2A1C15',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#3D5A3D',
            }}
          />
          <span
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#3D5A3D',
            }}
          >
            Hodowla FCI · grupa VII
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{
              fontSize: 120,
              fontWeight: 600,
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {SITE.name}
          </h1>
          <p
            style={{
              fontSize: 38,
              margin: 0,
              marginTop: 24,
              color: '#6E5234',
              fontStyle: 'italic',
            }}
          >
            {SITE.shortDescription}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
            color: '#8B6F47',
          }}
        >
          <span>{SITE.city}, woj. {SITE.region}</span>
          <span style={{ letterSpacing: 4, textTransform: 'uppercase' }}>
            Český fousek
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
