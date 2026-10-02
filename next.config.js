/** @type {import('next').NextConfig} */

// The site used to have one route per section; keep those links working.
const legacySections = {
  about: 'about',
  projects: 'projects',
  achievements: 'achievements',
  testimonials: 'achievements',
  services: 'services',
  contact: 'contact',
};

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(legacySections).map(([path, section]) => ({
      source: `/${path}`,
      destination: `/#${section}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
