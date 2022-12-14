/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  webpack: config => {
    config.resolve.preferRelative = true
    return config
  },
};

module.exports = nextConfig;
