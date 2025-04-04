'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  bgImage?: string;
  bgColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  bgImage,
  bgColor = 'transparent',
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  overlayOpacity = 0.5
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Добавляем атрибуты для Locomotive Scroll
    sectionRef.current.setAttribute('data-scroll', '');
    sectionRef.current.setAttribute('data-scroll-section', '');

    // Направление параллакса
    const parallaxDirection = direction === 'up' ? 'vertical' 
                            : direction === 'down' ? 'vertical' 
                            : 'horizontal';

    // Если у нас есть изображение фона, добавляем ему атрибуты для параллакса
    const bgImageElement = sectionRef.current.querySelector('.bg-image');
    if (bgImageElement) {
      bgImageElement.setAttribute('data-scroll', '');
      bgImageElement.setAttribute('data-scroll-speed', `${direction === 'down' || direction === 'right' ? speed : -speed}`);
      bgImageElement.setAttribute('data-scroll-direction', parallaxDirection);
    }
  }, [speed, direction]);

  // Определяем стили для фона
  const bgStyle = bgColor ? { backgroundColor: bgColor } : {};
  const overlayStyle = { 
    backgroundColor: overlayColor,
    opacity: overlayOpacity
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={bgStyle}
    >
      {bgImage && (
        <div className="bg-image absolute inset-0 w-full h-full -z-10">
          <Image 
            src={bgImage} 
            alt="Background" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
      )}
      
      {/* Overlay для обеспечения контраста с текстом */}
      <div className="absolute inset-0 -z-10" style={overlayStyle}></div>
      
      {/* Контейнер для содержимого */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection; 