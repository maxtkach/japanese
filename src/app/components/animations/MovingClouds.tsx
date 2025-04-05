'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CloudProps {
  index: number;
  speed?: number;
  opacity?: number;
  scale?: number;
  zIndex?: number;
  direction?: 'left' | 'right';
  vertical?: boolean;
}

const Cloud: React.FC<CloudProps> = ({
  index,
  speed = 150,
  opacity = 0.8,
  scale = 1,
  zIndex = 0,
  direction = 'right',
  vertical = false
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';

  // Инициализация позиции облака при монтировании компонента
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Случайная начальная позиция
    let x = direction === 'right' 
      ? -300 - Math.random() * windowWidth 
      : windowWidth + Math.random() * windowWidth;
    
    const y = vertical 
      ? Math.random() * windowHeight 
      : (index % 3) * (windowHeight / 3) + Math.random() * (windowHeight / 5);
    
    setPosition({ x, y });
    setDimensions({ width: windowWidth, height: windowHeight });
  }, [index, direction, vertical]);

  // Анимация для горизонтального движения
  const horizontalAnimation = {
    x: direction === 'right' 
      ? [position.x, dimensions.width + 300] 
      : [position.x, -300],
    transition: {
      x: { 
        duration: speed, 
        repeat: Infinity, 
        ease: "linear",
        repeatType: "loop" as const
      }
    }
  };

  // Анимация для вертикального движения
  const verticalAnimation = {
    y: [position.y, position.y + 50, position.y - 50, position.y],
    transition: {
      y: {
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror" as const
      }
    }
  };

  const animation = {
    ...horizontalAnimation,
    ...(vertical ? {} : verticalAnimation)
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        zIndex,
        opacity
      }}
      animate={animation}
      initial={{ scale: 0.8 }}
      whileInView={{ scale }}
      viewport={{ once: false }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <Image
          src={`${basePath}/images/cloud${(index % 3) + 1}.svg`}
          alt="Cloud"
          width={200}
          height={120}
          style={{ filter: 'blur(3px)' }}
        />
      </div>
    </motion.div>
  );
};

interface MovingCloudsProps {
  count?: number;
  minSpeed?: number;
  maxSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  vertical?: boolean;
  className?: string;
}

const MovingClouds: React.FC<MovingCloudsProps> = ({
  count = 8,
  minSpeed = 80,
  maxSpeed = 200,
  minOpacity = 0.4,
  maxOpacity = 0.8,
  vertical = false,
  className = ''
}) => {
  const [clouds, setClouds] = useState<React.ReactNode[]>([]);
  
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const newClouds = Array.from({ length: count }).map((_, i) => {
      const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      const scale = 0.6 + Math.random() * 0.8;
      const zIndex = Math.floor(Math.random() * 3) - 3;
      const direction = Math.random() > 0.5 ? 'right' : 'left';
      
      return (
        <Cloud 
          key={i}
          index={i}
          speed={speed}
          opacity={opacity}
          scale={scale}
          zIndex={zIndex}
          direction={direction}
          vertical={vertical}
        />
      );
    });
    
    setClouds(newClouds);
  }, [count, minSpeed, maxSpeed, minOpacity, maxOpacity, vertical]);

  // Проверяем, что облака уже созданы скриптом
  useEffect(() => {
    // В реальном проекте здесь можно добавить проверку наличия облаков 
    // и создать их, если они отсутствуют
    const checkClouds = async () => {
      try {
        if (typeof window !== 'undefined') {
          // Проверить наличие файлов облаков можно через fetch
          const checkFile = async (cloudId: number) => {
            try {
              const response = await fetch(`${basePath}/images/cloud${cloudId}.svg`);
              return response.ok;
            } catch (error) {
              return false;
            }
          };
          
          // Проверяем наличие всех файлов облаков
          for (let i = 1; i <= 3; i++) {
            const exists = await checkFile(i);
            if (!exists) {
              console.warn(`Файл облака cloud${i}.svg не найден`);
            }
          }
        }
      } catch (error) {
        console.log('Ошибка при проверке облаков:', error);
      }
    };
    
    checkClouds();
  }, [basePath]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {clouds}
    </div>
  );
};

export default MovingClouds; 