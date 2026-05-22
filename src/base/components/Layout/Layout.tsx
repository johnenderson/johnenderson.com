import { FC, PropsWithChildren } from 'react';

import { Footer } from '@/base/components/Footer';
import { AnimationLayout } from '@/base/components/Layout/AnimationLayout';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <AnimationLayout>
    {children}
    <Footer />
  </AnimationLayout>
);
