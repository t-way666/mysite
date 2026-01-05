'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectImages = [
  "/mysite/img/project-img.png"
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-[92px] transition-colors duration-300">
      <div className="container mx-auto max-w-[945px] px-4">
        <h2 className="mb-14 text-3xl font-bold md:mb-[84px] md:text-4xl">
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
                <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:w-[40%] shrink-0 shadow-lg">
                  <Image 
                    src={projectImages[idx] || projectImages[0]} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-1 flex-col gap-10">
                  <h3 className="text-2xl font-bold leading-none">
                    {project.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <Image src="/mysite/img/project/time-icon.svg" alt="Time" width={24} height={24} className="dark:invert-0 invert icon-neon-hover" />
                      <div>
                        <h4 className="mb-2 text-lg font-bold leading-none">{t.projects.labels.time}</h4>
                        <p className="text-base leading-relaxed opacity-80">{project.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Image src="/mysite/img/project/cost-icon.svg" alt="Cost" width={24} height={24} className="dark:invert-0 invert icon-neon-hover" />
                      <div>
                        <h4 className="mb-2 text-lg font-bold leading-none">{t.projects.labels.cost}</h4>
                        <p className="text-base leading-relaxed opacity-80">{project.cost}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Image src="/mysite/img/project/feedback-icon.svg" alt="Feedback" width={24} height={24} className="dark:invert-0 invert icon-neon-hover" />
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
