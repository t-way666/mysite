'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const socialLinks = [
  { href: "https://github.com/t-way666", src: "/img/socials/github.svg", alt: "GitHub" },
  { href: "https://t.me/T_w_a_y", src: "/img/socials/telegram.svg", alt: "Telegram" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden bg-linear-to-b from-transparent to-background/50 pb-[155px] pt-[50px]">
      <div className="container mx-auto max-w-[945px] px-4">
        {/* Header Top */}
        <div className="mb-[105px] flex items-center justify-between gap-6">
          {/* Соцсети: скрыты на мобилках, видны на md и выше */}
          <div className="hidden items-center gap-5 md:flex">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="transition-opacity hover:opacity-100" target="_blank" rel="noopener noreferrer">
                <Image src={link.src} alt={link.alt} width={17} height={16} className="h-4 w-[17px] dark:invert-0 invert icon-neon-hover" />
              </a>
            ))}
          </div>
          
          {/* Переключатели: всегда видны, на мобилках прижаты к правому краю через justify-end в родителе */}
          <div className="ml-auto flex items-center gap-4">
             <LanguageToggle />
             <ThemeToggle />
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-3 block text-2xl font-bold text-accent"
            >
              {t.hero.subtitle}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-5 text-[50px] font-bold leading-none"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-9 max-w-[420px] text-base leading-7 opacity-80"
            >
              {t.hero.description}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="neon-avatar-wrapper h-[300px] w-[300px] shrink-0 md:h-[389px] md:w-[389px]"
          >
             {/* Контейнер картинки: плотно прилегает, без отступов */}
             <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                <Image 
                    src="/img/avatar.jpg" 
                    alt="Ибодулло Исматов" 
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 300px, 389px"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}