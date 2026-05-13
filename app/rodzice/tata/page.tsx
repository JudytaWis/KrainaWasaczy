import { DogDetail } from '@/components/DogDetail';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { DOGS } from '@/lib/placeholders';

const dog = DOGS.tata;

export const metadata = pageMetadata({
  title: `Eros z Vallis Baptismi — reproduktor`,
  description: `${dog.fullName} — reproduktor wybrany do miotu B Krainy Wąsaczy. Piękny i pracujący pies, zrównoważony, z doskonałym instynktem łowieckim i świetnym eksterierem. Rodowód ZKwP / FCI.`,
  path: '/rodzice/tata',
});

export default function TataPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Strona główna', path: '/' },
          { name: 'Nasi rodzice', path: '/rodzice' },
          { name: dog.fullName, path: '/rodzice/tata' },
        ])}
      />
      <DogDetail dog={dog} />
    </>
  );
}
