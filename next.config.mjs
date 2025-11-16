/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // No basePath needed for USERNAME.github.io repositories
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig