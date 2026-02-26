/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === 'true' ? '/saola-website-v9' : '',
  trailingSlash: true,
};

export default nextConfig;
