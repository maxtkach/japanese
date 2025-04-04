'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [locomotiveScroll, setLocomotiveScroll] = useState<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
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

    return () => {
      scroll.destroy();
      setLocomotiveScroll(null);
    };
  }, []);

  return (
    <div id="locomotiveScroll-container" ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
} 