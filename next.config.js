/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static site — deployed to GitHub Pages, no Node server
  images: { unoptimized: true }, // next/image optimization needs a server; static export has none
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? '/landing-openruleta' : '',
};

module.exports = nextConfig;
