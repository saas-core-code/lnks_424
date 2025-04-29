/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Disable persistent caching to prevent ENOENT errors
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;