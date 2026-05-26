import { FC, PropsWithChildren } from 'react';

import { Footer } from '@/base/components/Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);
