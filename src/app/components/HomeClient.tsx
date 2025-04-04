'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import ImageAdapter from './ImageAdapter';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedHeading from './animations/AnimatedHeading';
import HoverEffect from './animations/HoverEffect';
import SakuraPetals from './animations/SakuraPetals';
import MovingClouds from './animations/MovingClouds';
import { motion, useReducedMotion } from 'framer-motion';
import ClientOnly from './ClientOnly';

export default function HomeClient() {
  // Определяем, нужно ли уменьшить количество анимаций
  const prefersReducedMotion = useReducedMotion();
  
  // Оптимизация для мобильных устройств
  const [isMobile, setIsMobile] = React.useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем при загрузке
    checkIfMobile();
    
    // Следим за изменением размера окна
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Уменьшаем количество анимаций для мобильных устройств или если пользователь предпочитает меньше анимаций
  const petalCount = prefersReducedMotion || isMobile ? 8 : 20;
  const cloudCount = prefersReducedMotion || isMobile ? 3 : 6;
  
  return (
    <ClientOnly>
      {/* Добавляем облака на фон */}
      <MovingClouds count={cloudCount} minOpacity={0.07} maxOpacity={0.15} />
      
      {/* Секция Hero с лепестками сакуры */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageAdapter
            src="/images/hero-sushi.jpg"
            alt="Японская кухня"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Добавляем анимацию лепестков сакуры с меньшим количеством для мобильных */}
        {!prefersReducedMotion && <SakuraPetals count={petalCount} />}
        
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Аутентичная <span className="text-[var(--accent-light)] neon-text-gold">японская кухня</span> в сердце города
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 md:mb-8">
              Погрузитесь в мир традиционных вкусов и насладитесь уникальной атмосферой Японии
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/menu" className="btn-primary pulse-on-hover text-sm sm:text-base">
                  Наше меню
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link 
                  href="/contact" 
                  className="text-white border-2 border-[var(--accent-dark)] hover:border-[var(--accent)] hover:text-[var(--accent-light)] px-4 sm:px-6 py-2 rounded transition-colors text-sm sm:text-base"
                >
                  Забронировать стол
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Секция О нас */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-neutral-950">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              className="relative h-[300px] sm:h-[350px] md:h-[400px] japanese-border p-2 overflow-hidden scale-on-hover"
              whileHover={{ boxShadow: "0 0 12px 3px rgba(212, 175, 55, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <ImageAdapter
                src="/images/restaurant-interior.jpg"
                alt="Интерьер ресторана Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div>
              <AnimatedHeading as="h2" className="section-title text-2xl sm:text-3xl md:text-4xl">
                О нашем ресторане
              </AnimatedHeading>
              <p className="text-neutral-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Ресторан "Сакура" — это уникальное место, где традиционная японская кухня встречается с современными кулинарными тенденциями. Наша цель — предложить вам аутентичные вкусы Японии в элегантной и расслабляющей атмосфере.
              </p>
              <p className="text-neutral-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Каждое блюдо готовится из свежайших ингредиентов по традиционным рецептам нашими шеф-поварами, прошедшими обучение в Японии.
              </p>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="/about" 
                  className="text-[var(--accent)] font-medium flex items-center neon-text-gold underline-hover text-sm sm:text-base"
                >
                  Узнать больше
                  <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Секция Фирменные блюда с лепестками сакуры */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden">
        {/* Добавляем меньше лепестков для этой секции */}
        {!prefersReducedMotion && <SakuraPetals count={isMobile ? 6 : 12} className="opacity-40" />}
        
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <AnimatedHeading as="h2" className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
            Наши фирменные блюда
          </AnimatedHeading>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-950 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <ImageAdapter
                  src="/images/sashimi.jpg"
                  alt="Сашими"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-white neon-text-gold">Сашими</h3>
                <p className="text-neutral-400 mb-4 text-sm sm:text-base">
                  Изысканные ломтики свежайшей рыбы, подаются с васаби и имбирем.
                </p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/menu#sushi" className="text-[var(--accent)] font-medium underline-hover flex items-center text-sm sm:text-base">
                    Смотреть в меню
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-950 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <ImageAdapter
                  src="/images/sushi-set.jpg"
                  alt="Суши-сет"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-white neon-text-gold">Суши-сет "Сакура"</h3>
                <p className="text-neutral-400 mb-4 text-sm sm:text-base">
                  Фирменный набор из 16 кусочков суши и роллов от шеф-повара.
                </p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/menu#sushi" className="text-[var(--accent)] font-medium underline-hover flex items-center text-sm sm:text-base">
                    Смотреть в меню
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-950 rounded-lg overflow-hidden sm:col-span-2 md:col-span-1"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <ImageAdapter
                  src="/images/wagyu.jpg"
                  alt="Вагю стейк"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-white neon-text-gold">Вагю стейк</h3>
                <p className="text-neutral-400 mb-4 text-sm sm:text-base">
                  Мраморная говядина вагю с уникальным вкусом, приготовленная на гриле.
                </p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/menu#main" className="text-[var(--accent)] font-medium underline-hover flex items-center text-sm sm:text-base">
                    Смотреть в меню
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Секция Отзывы с облаками наверху */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-950 relative overflow-hidden">
        {/* Добавляем больше плотных облаков для этой секции */}
        {!prefersReducedMotion && <MovingClouds count={isMobile ? 4 : 8} minOpacity={0.2} maxOpacity={0.4} className="h-64 top-0" />}
        
        <div className="container-custom relative z-10 pt-12 md:pt-16 px-4 sm:px-6">
          <AnimatedHeading as="h2" className="section-title text-center mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
            Отзывы наших гостей
          </AnimatedHeading>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 12px 3px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 p-6 sm:p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-[var(--accent)] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base sm:text-lg">Анна К.</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">Постоянный гость</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base">
                "Лучшие суши в городе! Обслуживание на высшем уровне, а интерьер создает настоящую японскую атмосферу. Обязательно рекомендую попробовать фирменный сет «Сакура»."
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 12px 3px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 p-6 sm:p-8 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-[var(--accent)] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white text-base sm:text-lg">Михаил Д.</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">Ценитель японской кухни</p>
                </div>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base">
                "Вагю стейк просто потрясающий! Нежный, сочный, тает во рту. В «Сакуре» я нашел настоящий вкус Японии, который искал долгое время. Отдельное спасибо шеф-повару за мастерство."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Секция Бронирование с добавлением лепестков */}
      <section className="py-12 sm:py-16 md:py-20 bg-[var(--primary-dark)] relative overflow-hidden">
        {/* Добавляем лепестки сакуры */}
        {!prefersReducedMotion && <SakuraPetals count={isMobile ? 8 : 15} className="opacity-60" />}
        
        <div className="container-custom relative z-10 text-center px-4 sm:px-6">
          <AnimatedHeading as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Забронируйте столик уже сегодня
          </AnimatedHeading>
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Почувствуйте настоящую атмосферу Японии и насладитесь изысканной кухней
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="tel:+380123456789" 
              className="bg-white text-[var(--primary-dark)] hover:bg-[var(--accent-light)] hover:text-neutral-900 px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors text-base sm:text-lg font-medium pulse-on-hover"
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px 3px rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              Позвонить
            </motion.a>
            <motion.a 
              href="/contact" 
              className="border-2 border-white hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors text-base sm:text-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px 3px rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.97 }}
            >
              Заполнить форму
            </motion.a>
          </div>
        </div>
      </section>
    </ClientOnly>
  );
} 