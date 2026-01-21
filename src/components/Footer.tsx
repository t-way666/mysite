'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedIcon from './AnimatedIcon';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 md:py-[120px]">
      <div className="container mx-auto max-w-[945px] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-[600px] !p-12"
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {t.footer.title}
          </h2>
          <p className="mb-10 text-lg opacity-80">
            {t.footer.description}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a 
              href="https://t.me/T_w_a_y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-[5px] border border-transparent bg-slate-900 text-white py-[24px] text-[12px] font-bold uppercase transition-all hover:shadow-lg dark:border-card-border dark:bg-card-bg sm:w-[280px]"
            >
              <AnimatedIcon delay={0}>
                <Image src="/mysite/img/socials/telegram.svg" alt="TG" width={20} height={20} className="brightness-100 animate-neon-pulse" />
              </AnimatedIcon>
              {t.footer.tgButton}
            </a>
            
            <a 
              href="https://github.com/t-way666" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-[5px] border border-transparent bg-slate-900 text-white py-[24px] text-[12px] font-bold uppercase transition-all hover:shadow-lg dark:border-card-border dark:bg-card-bg sm:w-[280px]"
            >
              <AnimatedIcon delay={0.3}>
                <Image src="/mysite/img/socials/github.svg" alt="GH" width={20} height={20} className="brightness-100 animate-neon-pulse" />
              </AnimatedIcon>
              GitHub
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-card-border pt-8 opacity-60">
          <p className="text-sm">
            © {new Date().getFullYear()} {t.hero.title}.
          </p>
          <span className="text-sm opacity-60">
            {t.footer.policy}
          </span>
        </div>
      </div>
    </footer>
  );
}