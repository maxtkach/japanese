'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const AnimatedHeading = ({ 
  children, 
  as = 'h2', 
  delay = 0, 
  className = '',
  direction = 'up'
}: AnimatedHeadingProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -50, y: 0 };
      case 'right': return { x: 50, y: 0 };
      case 'down': return { x: 0, y: -50 };
      case 'up':
      default: return { x: 0, y: 50 };
    }
  };

  // Используем JSX напрямую вместо динамического создания компонента
  const renderHeading = () => {
    const props = {
      initial: { opacity: 0, ...getInitialPosition() },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay 
      },
      className
    };

    switch (as) {
      case 'h1':
        return <motion.h1 {...props}>{children}</motion.h1>;
      case 'h3':
        return <motion.h3 {...props}>{children}</motion.h3>;
      case 'h4':
        return <motion.h4 {...props}>{children}</motion.h4>;
      case 'h5':
        return <motion.h5 {...props}>{children}</motion.h5>;
      case 'h6':
        return <motion.h6 {...props}>{children}</motion.h6>;
      default:
        return <motion.h2 {...props}>{children}</motion.h2>;
    }
  };
  
  return renderHeading();
};

export default AnimatedHeading; 