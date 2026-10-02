import { profile } from '@/data/profile';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/cv/'],
      crawlDelay: 1,
    },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
