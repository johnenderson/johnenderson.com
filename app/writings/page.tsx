import { PageWrapper } from '../components/PageWrapper';
import type { Metadata } from 'next';

import { PageTitle } from '@/base/components/PageTitle';
import { ArticlesList } from '@/features/articles/components/ArticlesList';
import { DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guias, notas e textos pessoais por John Enderson',
  openGraph: {
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default function Page() {
  return (
    <PageWrapper>
      <main id="main">
        <div className="content">
          <PageTitle
            title="Artigos"
            subtitle="Guias, tutoriais e notas pessoais."
          />
          <ArticlesList
            grouped
            header={false}
            itemVariant="compact"
            showTags={false}
          />
        </div>
      </main>
    </PageWrapper>
  );
}
