/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

// Get the base path from environment variable for GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Configure for GitHub Pages deployment
  basePath,
  assetPrefix: basePath,
  // Enable static exports for GitHub Pages
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    unoptimized: true, // Required for static export
  },
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);