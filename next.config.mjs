/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // REQUIRED FOR STATIC EXPORT
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/PJDissanayake.github.io' : '',
  assetPrefix: isGithubPages ? '/PJDissanayake.github.io/' : '',
};

export default nextConfig;