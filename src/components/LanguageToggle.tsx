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
    return <div className="h-[40px] w-[120px] rounded-full bg-gray-200 dark:bg-gray-800" />;
  }

  // Position calculation: 38px per slot approx
  // Container: 120px. Padding 4px (p-1). Available: 112px.
  // 112 / 3 = ~37.33px.
  // We used explicit offsets before: 0, 38, 76.
  // Let's keep those offsets for the ball.
  const xPositions = {
    ru: 0,
    uz: 38,
    en: 76
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative h-[40px] w-[120px] rounded-full border-2 border-slate-300 bg-slate-100 p-1 transition-colors dark:border-slate-700 dark:bg-slate-800"
      >
        {/* Labels Background - Clickable Zones */}
        <div className="absolute inset-0 flex items-center justify-between px-1 text-[10px] font-bold text-slate-400">
          <button 
            onClick={() => setLanguage('ru')}
            className="flex h-full w-[38px] cursor-pointer items-center justify-center focus:outline-hidden hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            RU
          </button>
          <button 
            onClick={() => setLanguage('uz')}
            className="flex h-full w-[38px] cursor-pointer items-center justify-center focus:outline-hidden hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            UZ
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className="flex h-full w-[38px] cursor-pointer items-center justify-center focus:outline-hidden hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            EN
          </button>
        </div>

        {/* Rolling Ball with Active Label (Pointer Events None to let clicks pass through if needed, though usually it covers the active one anyway) */}
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          animate={{
            x: xPositions[language] || 0,
          }}
          className="pointer-events-none relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white shadow-lg"
        >
          <AnimatePresence mode="wait">
             <motion.span
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[10px] font-bold text-black"
             >
               {language.toUpperCase()}
             </motion.span>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
