import type { MetadataRoute } from 'next';

import { getPostsList } from 'src/lib/getPostsList';

const SITE_URL = 'https://johnenderson.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getPostsList().map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/writings`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sobre`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...posts,
  ];
}
