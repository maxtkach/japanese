'use client';

import Image from 'next/image';

type ImageAdapterProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function ImageAdapter({
  src,
  alt,
  className = '',
  style,
  priority = false,
  fill = false,
  width,
  height,
}: ImageAdapterProps) {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  // Проверяем, содержит ли src расширение файла
  const hasExtension = /\.(jpg|jpeg|png|gif|webp|svg)$/.test(src);
  const fullSrc = hasExtension ? src : `${src}.jpg`;
  
  // Формируем полный путь с учетом базового пути для GitHub Pages
  const imagePath = fullSrc.startsWith('/') 
    ? `${basePath}${fullSrc}` 
    : `${basePath}/${fullSrc}`;

  // Используем div с className для обертывания компонента Image
  if (className) {
    return (
      <div className={className}>
        <Image
          src={imagePath}
          alt={alt}
          style={style}
          priority={priority}
          fill={fill}
          width={width}
          height={height}
        />
      </div>
    );
  }

  // Если className не указан, просто возвращаем Image
  return (
    <Image
      src={imagePath}
      alt={alt}
      style={style}
      priority={priority}
      fill={fill}
      width={width}
      height={height}
    />
  );
} 