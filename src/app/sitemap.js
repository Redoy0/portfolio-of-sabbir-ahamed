import { profile } from '@/data/profile';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${profile.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
