'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedIcon from './AnimatedIcon';

const icons = [
  "/mysite/img/features/offer-img.svg",
  "/mysite/img/features/deadline-img.svg",
  "/mysite/img/features/agreement-img.svg",
  "/mysite/img/features/steps-img.svg",
  "/mysite/img/features/storage-img.svg",
  "/mysite/img/features/conversation-img.svg"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-16 text-black dark:text-white md:py-[92px] transition-colors duration-300">
      <div className="container mx-auto max-w-[945px] px-4">
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-3xl font-bold md:mb-[84px] md:text-4xl text-center"
        >
          {t.features.title}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.features.items.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card flex flex-col">
              <AnimatedIcon delay={idx * 0.5} className="mb-[22px] w-fit">
                <Image 
                  src={icons[idx]} 
                  alt={feature.title} 
                  width={48} 
                  height={48} 
                  className="h-12 w-12 animate-neon-pulse"
                />
              </AnimatedIcon>
              <h3 className="mb-4 text-2xl font-bold leading-7">
                {feature.title}
              </h3>
              <p className="text-base leading-7 opacity-80">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
