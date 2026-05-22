import { PageWrapper } from '../components/PageWrapper';
import type { Metadata } from 'next';

import { PageTitle } from '@/base/components/PageTitle';
import { Writings } from '@/features/home/components/Writings';

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Artigos por John Enderson',
  openGraph: {
    images: [{ url: 'https://johnenderson.com/logo.jpeg' }],
  },
};

export default function Page() {
  return (
    <PageWrapper>
      <main id="main">
        <div className="content">
          <PageTitle title="Artigos" subtitle="Guias, notas e textos pessoais." />
          <Writings header={false} />
        </div>
      </main>
    </PageWrapper>
  );
}
