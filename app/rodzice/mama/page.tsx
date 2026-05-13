import { DogDetail } from '@/components/DogDetail';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { DOGS } from '@/lib/placeholders';

const dog = DOGS.mama;

export const metadata = pageMetadata({
  title: `Nancy ze Staropleských luk — suka hodowlana`,
  description: `${dog.fullName} — suka hodowlana wyżła czeskiego (Český fousek) w Krainie Wąsaczy. Aktywnie pracująca w łowisku: wystawianie, aport z lądu i wody, tropienie. Rodowód ZKwP / FCI.`,
  path: '/rodzice/mama',
});

export default function MamaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Nasi rodzice', path: '/rodzice' },
          { name: dog.fullName, path: '/rodzice/mama' },
        ])}
      />
      <DogDetail dog={dog} />
    </>
  );
}
