/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // ---- GITHUB PAGES ----
  output: 'export',                     // static export
  trailingSlash: true,                  // /about → /about/
  basePath: isGithubPages ? '/PJDissanayake.github.io' : '',
  assetPrefix: isGithubPages ? '/PJDissanayake.github.io/' : '',
};

export default nextConfig;