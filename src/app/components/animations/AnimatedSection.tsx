'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay 
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 