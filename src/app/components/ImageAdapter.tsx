'use client';

import Image from 'next/image';

interface ImageAdapterProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  priority?: boolean;
  className?: string;
}

const ImageAdapter = ({
  src,
  alt,
  fill,
  width,
  height,
  style,
  priority,
  className
}: ImageAdapterProps) => {
  // Объединяем style с дополнительными классами, если они есть
  const combinedStyle = className 
    ? { ...style, className } 
    : style;
  
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      style={combinedStyle}
      priority={priority}
    />
  );
};

export default ImageAdapter; 