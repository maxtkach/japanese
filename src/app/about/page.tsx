'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';

// Динамический импорт компонентов анимации
const SakuraPetals = dynamic(() => import('../components/animations/SakuraPetals'), { ssr: false });

export default function About() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  // Проверка предпочтения пользователя по уменьшению движения
  const prefersReducedMotion = useReducedMotion();

  // Информация о команде
  const teamMembers = [
    {
      name: 'Такаші Ямада',
      role: 'Головний шеф-кухар',
      image: `${basePath}/images/team/chef1.jpg`,
      bio: 'Досвід роботи понад 15 років у найкращих ресторанах Токіо. Спеціалізується на традиційній японській кухні.'
    },
    {
      name: 'Юко Танака',
      role: 'Су-шеф',
      image: `${basePath}/images/team/chef2.jpg`,
      bio: 'Експерт з суші та сашимі. Учасник міжнародних кулінарних конкурсів та призер чемпіонату з приготування суші.'
    },
    {
      name: 'Іван Петренко',
      role: 'Шеф-кухар гарячого цеху',
      image: `${basePath}/images/team/chef3.jpg`,
      bio: 'Навчався в Японії, поєднує традиційні техніки та локальні інгредієнти для створення унікальних страв.'
    },
    {
      name: 'Марія Коваль',
      role: 'Менеджер ресторану',
      image: `${basePath}/images/team/manager.jpg`,
      bio: 'Професіонал у сфері ресторанного бізнесу з 10-річним досвідом роботи у преміальних закладах.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Заголовок страницы */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-neutral-950/60 z-10"></div>
        <Image
          src={`${basePath}/images/about-header.jpg`}
          alt="Про ресторан Сакура"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {!prefersReducedMotion && <SakuraPetals count={20} className="z-20" />}
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Про ресторан
          </h1>
        </div>
      </div>
      
      {/* История ресторана */}
      <section className="py-16 bg-neutral-950">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
                Наша історія
              </h2>
              <p className="text-lg mb-6">
                Ресторан "Сакура" був заснований у 2012 році командою ентузіастів та любителів японської культури. 
                Наша мета - познайомити українців з автентичною японською кухнею та подарувати незабутній кулінарний досвід.
              </p>
              <p className="text-lg mb-6">
                Ми починали як невелике кафе з обмеженим меню, але завдяки якості страв та унікальній атмосфері 
                швидко завоювали любов відвідувачів. Сьогодні "Сакура" - це один з провідних японських ресторанів Києва.
              </p>
              <p className="text-lg">
                Головною особливістю ресторану є використання лише свіжих та якісних інгредієнтів, 
                багато з яких імпортуються безпосередньо з Японії.
              </p>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src={`${basePath}/images/about/restaurant-history.jpg`}
                  alt="Історія ресторану Сакура"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Философия */}
      <section className="py-16 bg-neutral-900">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
                Наша філософія
              </h2>
              <p className="text-lg mb-6">
                Філософія ресторану "Сакура" базується на трьох японських принципах: "Wabi" (простота), 
                "Sabi" (краса в недосконалості) та "Umami" (глибокий смак).
              </p>
              <p className="text-lg mb-6">
                Ми прагнемо не лише запропонувати смачні страви, але й створити особливу атмосферу, 
                в якій гості можуть зануритися в японську культуру та традиції.
              </p>
              <p className="text-lg">
                Кожна страва в нашому меню - це результат ретельного підбору інгредієнтів, 
                дотримання традиційних технік приготування та уваги до естетики.
              </p>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src={`${basePath}/images/about/philosophy.jpg`}
                  alt="Філософія ресторану Сакура"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Наша команда */}
      <section className="py-16 bg-neutral-950">
        <div className="container-custom px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--accent)]">
            Наша команда
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 transition-all hover:border-[var(--accent-dark)]">
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[var(--accent)] font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Интерьер */}
      <section className="py-16 bg-neutral-900">
        <div className="container-custom px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[var(--accent)]">
            Інтер'єр ресторану
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior1.jpg`}
                alt="Інтер'єр ресторану Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior2.jpg`}
                alt="Інтер'єр ресторану Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior3.jpg`}
                alt="Інтер'єр ресторану Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary-dark)]">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Відчуйте атмосферу "Сакури"
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Запрошуємо вас завітати до нашого ресторану та насолодитися справжньою японською кухнею
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-white text-[var(--primary-dark)] hover:bg-[var(--accent-light)] hover:text-neutral-900 px-8 py-3 rounded transition-colors text-lg font-medium"
            >
              Переглянути меню
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-8 py-3 rounded transition-colors text-lg"
            >
              Забронювати стіл
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 