import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // `/og/` is intentionally crawlable so social platforms can fetch the
      // dynamic Open Graph images referenced in page metadata.
      // `/og-preview/` and `/error-test/` are development-only routes (they
      // return 404 in production), disallowed here for consistency.
      disallow: ['/api/', '/og-preview/', '/error-test/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
