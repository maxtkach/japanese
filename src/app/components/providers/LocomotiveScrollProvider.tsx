'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

// Не импортируем здесь - будем импортировать внутри useEffect

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    let scroll: any = null;
    
    const initScroll = async () => {
      try {
        // Динамически импортируем модуль и стили
        const LocomotiveScrollModule = await import('locomotive-scroll');
        await import('locomotive-scroll/dist/locomotive-scroll.css');
        
        scroll = new LocomotiveScrollModule.default({
          el: containerRef.current!,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          reloadOnContextChange: true,
          touchMultiplier: 2,
          smartphone: {
            smooth: true,
            breakpoint: 767,
          },
          tablet: {
            smooth: true,
            breakpoint: 1024,
          }
        });

        setLocomotiveScroll(scroll);

        // Обновляем скролл при изменении DOM
        window.addEventListener('load', () => {
          scroll.update();
        });

        // Обновляем при изменении размера окна
        window.addEventListener('resize', () => {
          scroll.update();
        });
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initScroll();

    return () => {
      if (scroll) {
        scroll.destroy();
        setLocomotiveScroll(null);
      }
    };
  }, []);

  return (
    <div id="locomotiveScroll-container" ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
} 