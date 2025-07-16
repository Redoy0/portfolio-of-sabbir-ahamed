/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment and update the basePath if deploying to a repository (not username.github.io)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
}

module.exports = nextConfig
