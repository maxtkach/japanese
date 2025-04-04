'use client';

import React from 'react';

interface LocomotiveScrollProviderProps {
  children: React.ReactNode;
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  return (
    <div id="locomotiveScroll-container" data-scroll-container>
      {children}
    </div>
  );
} 