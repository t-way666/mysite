'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedIcon from './AnimatedIcon';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectImages = [
  "/mysite/img/project-img.png",
  "/mysite/img/mlbbhelper.png"
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-[92px] transition-colors duration-300">
      <div className="container mx-auto max-w-[945px] px-4">
        <h2 className="mb-14 text-3xl font-bold md:mb-[84px] md:text-4xl text-center">
          {t.projects.title}
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="projects-swiper !pb-12"
        >
          {t.projects.items.map((project, idx) => (
            <SwiperSlide key={idx} className="p-4">
              <div className="glass-card flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
                <div className="relative w-full overflow-hidden rounded-lg lg:w-[40%] shrink-0 shadow-lg group">
                  <Image 
                    src={projectImages[idx] || projectImages[0]} 
                    alt={project.title} 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* @ts-ignore */}
                  {project.link && (
                    <a 
                      /* @ts-ignore */
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="rounded-full bg-white px-6 py-2 text-black font-bold">Visit Site</span>
                    </a>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col gap-10">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold leading-none">
                      {project.title}
                    </h3>
                    {/* @ts-ignore */}
                    {project.link && (
                      /* @ts-ignore */
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                         <Image src="/mysite/globe.svg" alt="Link" width={20} height={20} className="dark:invert invert-0" />
                      </a>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <AnimatedIcon delay={0}>
                        <Image src="/mysite/img/project/time-icon.svg" alt="Time" width={24} height={24} className="dark:invert-0 invert animate-neon-pulse" />
                      </AnimatedIcon>
                      <div>
                        <h4 className="mb-2 text-lg font-bold leading-none">{t.projects.labels.time}</h4>
                        <p className="text-base leading-relaxed opacity-80">{project.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <AnimatedIcon delay={0.3}>
                        <Image src="/mysite/img/project/cost-icon.svg" alt="Cost" width={24} height={24} className="dark:invert-0 invert animate-neon-pulse" />
                      </AnimatedIcon>
                      <div>
                        <h4 className="mb-2 text-lg font-bold leading-none">{t.projects.labels.cost}</h4>
                        <p className="text-base leading-relaxed opacity-80">{project.cost}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <AnimatedIcon delay={0.6}>
                      <Image src="/mysite/img/project/feedback-icon.svg" alt="Feedback" width={24} height={24} className="dark:invert-0 invert animate-neon-pulse" />
                    </AnimatedIcon>
                    <div>
                      <h4 className="mb-2 text-lg font-bold leading-none">{t.projects.labels.feedback}</h4>
                      <p className="text-base leading-relaxed opacity-80 italic">&ldquo;{project.feedback}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
