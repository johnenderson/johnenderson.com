import type { Metadata } from 'next';

import { AnimationLayout } from '@/base/components/Layout/AnimationLayout';
import { Navbar } from '@/base/components/Navbar';
import { Title } from '@/base/components/Title';
import { About } from '@/features/home/components/About';
import { LastfmCard } from '@/features/home/components/Activity';
import { SkipLink } from '@/features/home/components/SkipLink';
import { Writings } from '@/features/home/components/Writings';

export const metadata: Metadata = {
  title: {
    absolute: 'johnenderson.com',
  },
  description: 'Site pessoal — artigos, notas e experimentos.',
  openGraph: {
    images: [{ url: 'https://johnenderson.com/logo.jpeg' }],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <SkipLink />
      <AnimationLayout>
        <main id="main">
          <div className="content">
            <Title text="John Enderson" />
            <About />
            <LastfmCard />
            <Writings />
          </div>
        </main>
      </AnimationLayout>
    </>
  );
}
