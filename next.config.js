/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: true, // Отключаем оптимизацию изображений для статического экспорта
  },
  output: 'export', // Для статической сборки
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