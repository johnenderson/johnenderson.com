import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // `/og/` is intentionally crawlable so social platforms can fetch the
      // dynamic Open Graph images referenced in page metadata.
      disallow: ['/api/', '/og-preview/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
