'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Динамический импорт компонентов анимации для корректной работы с SSR
const SakuraPetals = dynamic(() => import('./components/animations/SakuraPetals'), { ssr: false });
const MovingClouds = dynamic(() => import('./components/animations/MovingClouds'), { ssr: false });

export default function Home() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  // Состояние для определения мобильного устройства
  const [isMobile, setIsMobile] = useState(false);
  
  // Проверка предпочтения пользователя по уменьшению движения
  const prefersReducedMotion = useReducedMotion();
  
  // Количество элементов анимации в зависимости от устройства и предпочтений пользователя
  const petalCount = prefersReducedMotion || isMobile ? 10 : 30;
  const cloudCount = prefersReducedMotion || isMobile ? 3 : 8;
  
  // Эффект для проверки размера окна
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем при загрузке
    checkIfMobile();
    
    // Добавляем слушатель на изменение размера окна
    window.addEventListener('resize', checkIfMobile);
    
    // Очистка слушателя при размонтировании
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-neutral-950/60 absolute inset-0 z-10"></div>
          <Image
            src={`${basePath}/images/hero-sushi.jpg`}
            alt="Вишукана японська кухня"
            priority
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          
          {/* Анимация облаков */}
          {!prefersReducedMotion && <MovingClouds count={cloudCount} maxOpacity={0.2} className="z-10" />}
          
          {/* Анимация лепестков сакуры */}
          {!prefersReducedMotion && <SakuraPetals count={petalCount} className="z-20" />}
        </div>
        
        <div className="container-custom text-center relative z-10 px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            Ресторан <span className="text-[var(--accent-light)] font-serif">さくら</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-[var(--accent-light)]">
            японська кухня
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Автентичний смак Японії в центрі Києва. Традиції та інновації у кожній страві.
          </p>
          <Link 
            href="/menu" 
            className="btn-primary text-lg mx-3"
          >
            Переглянути меню
          </Link>
          <a 
            href="tel:+380123456789" 
            className="border-2 border-[var(--accent-dark)] hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-6 py-2 rounded transition-colors text-lg inline-block mx-3 mt-4 md:mt-0"
          >
            Забронювати стіл
          </a>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Анимация облаков */}
        {!prefersReducedMotion && <MovingClouds count={cloudCount} maxOpacity={0.1} className="absolute inset-0 z-0" />}
        
        <div className="container-custom px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--accent)]">
            Фірмові страви
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="japanese-border p-3 transition-all hover:shadow-lg">
              <div className="relative h-64 mb-4">
                <Image
                  src={`${basePath}/images/sashimi.jpg`}
                  alt="Сашимі"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Сашимі преміум</h3>
              <p className="text-neutral-300">
                Найсвіжіші шматочки лосося, тунця і морського окуня
              </p>
            </div>
            
            <div className="japanese-border p-3 transition-all hover:shadow-lg">
              <div className="relative h-64 mb-4">
                <Image
                  src={`${basePath}/images/sushi-set.jpg`}
                  alt="Суші-сет"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Суші-сет "Сакура"</h3>
              <p className="text-neutral-300">
                Набір найпопулярніших суші та ролів нашого ресторану
              </p>
            </div>
            
            <div className="japanese-border p-3 transition-all hover:shadow-lg">
              <div className="relative h-64 mb-4">
                <Image
                  src={`${basePath}/images/wagyu.jpg`}
                  alt="Вагю стейк"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Вагю стейк</h3>
              <p className="text-neutral-300">
                Мармуровий стейк з японської яловичини вагю A5
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="border-2 border-[var(--accent-dark)] hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-8 py-3 rounded transition-colors text-lg"
            >
              Повне меню
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-950">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent)]">
                Про ресторан
              </h2>
              <p className="text-lg mb-6">
                Ресторан "Сакура" - це місце, де японські кулінарні традиції зустрічаються 
                з сучасним підходом до гастрономії.
              </p>
              <p className="text-lg mb-6">
                Наші кухарі пройшли навчання в Японії і використовують автентичні рецепти
                та найкращі інгредієнти, щоб створювати справжні кулінарні шедеври.
              </p>
              <p className="text-lg mb-6">
                Інтер'єр ресторану витриманий у мінімалістичному японському стилі,
                створюючи атмосферу спокою і гармонії.
              </p>
              <Link 
                href="/about"
                className="border-2 border-[var(--accent-dark)] hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-6 py-2 rounded transition-colors"
              >
                Дізнатися більше
              </Link>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src={`${basePath}/images/restaurant-interior.jpg`}
                  alt="Інтер'єр ресторану Сакура"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary-dark)]">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Забронюйте стіл
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Заплануйте ідеальний вечір в "Сакура"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+380123456789" 
              className="bg-white text-[var(--primary-dark)] hover:bg-[var(--accent-light)] hover:text-neutral-900 px-8 py-3 rounded transition-colors text-lg font-medium"
            >
              Зателефонувати
            </a>
            <Link 
              href="/contact" 
              className="border-2 border-white hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-8 py-3 rounded transition-colors text-lg"
            >
              Онлайн-бронювання
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
