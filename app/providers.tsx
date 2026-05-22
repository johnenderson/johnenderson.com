'use client';

import { ReactNode } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Layout } from '@/base/components/Layout';
import { ThemeProvider } from '@/base/components/Theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
