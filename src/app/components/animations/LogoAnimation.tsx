'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  text: string;
  className?: string;
}

const LogoAnimation = ({ text, className = '' }: LogoAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Анимация исчезает через 3 секунды
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Анимация для каждого символа
  const letterVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: { 
      opacity: 1, 
      pathLength: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        staggerChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 } 
    }
  };

  // Разбиваем текст на символы для анимации
  const characters = text.split('');

  return (
    <motion.div 
      className={`font-japanese text-4xl ${className}`}
      initial="initial"
      animate={isAnimating ? "animate" : "exit"}
      variants={letterVariants}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LogoAnimation; 