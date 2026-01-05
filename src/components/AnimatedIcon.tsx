'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  delay?: number; // Задержка перед началом (для рассинхрона)
  className?: string;
}

export default function AnimatedIcon({ children, delay = 0, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -6, 0] }} // Прыжок на 6px вверх
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 3, // Пауза 3 секунды между прыжками
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
