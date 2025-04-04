'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

interface HoverEffectProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
  colorClass?: string;
}

const HoverEffect = ({ 
  children, 
  scale = 1.05, 
  className = '',
  colorClass = 'hover:text-red-500' 
}: HoverEffectProps) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`transition-colors duration-300 ${colorClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default HoverEffect; 