'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[40px] w-[80px] rounded-full bg-gray-200 dark:bg-gray-800" />;
  }

  const isEn = language === 'en';

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.button
        onClick={() => setLanguage(isEn ? 'ru' : 'en')}
        animate={{
          backgroundColor: isEn ? '#2563eb' : '#dc2626', // Blue for EN, Red for RU
          borderColor: isEn ? '#93c5fd' : '#fca5a5',
          boxShadow: isEn 
            ? '0 0 15px rgba(37, 99, 235, 0.5)' 
            : '0 0 15px rgba(220, 38, 38, 0.5)'
        }}
        className="relative h-[40px] w-[80px] overflow-hidden rounded-full border-2 p-1 focus:outline-hidden cursor-pointer"
        aria-label="Toggle language"
        whileTap={{ scale: 0.95 }}
      >
        {/* Labels */}
        <div className="absolute inset-0 flex items-center justify-between px-3 text-[10px] font-bold text-white/50">
          <span>RU</span>
          <span>EN</span>
        </div>

        {/* Rolling Ball with Active Label */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          animate={{
            x: isEn ? 40 : 0,
          }}
          className="relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white shadow-lg"
        >
          <AnimatePresence mode="wait">
             <motion.span
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-xs font-bold text-black"
             >
               {language.toUpperCase()}
             </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </div>
  );
}
