/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  transpilePackages: ['framer-motion'],
  webpack(config) {
    // Поддержка SVG файлов
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  // Отключаем серверные компоненты React для страниц, которые используют анимации
  experimental: {
    serverComponentsExternalPackages: ['framer-motion']
  }
};

module.exports = nextConfig; 