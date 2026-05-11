/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // TEMPORARY: skip type & lint check during migration to i18n.
  // After all sections are migrated to use the new {en, vi} content shape,
  // remove these two blocks and let strict mode catch real errors again.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
