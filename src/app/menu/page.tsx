'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';

// Динамический импорт компонентов анимации
const MovingClouds = dynamic(() => import('../components/animations/MovingClouds'), { ssr: false });

export default function Menu() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  // Проверка предпочтения пользователя по уменьшению движения
  const prefersReducedMotion = useReducedMotion();
  
  // Категории меню
  const categories = [
    {
      id: 'sushi',
      name: 'Суші та роли',
      description: 'Традиційні та фірмові суші і роли'
    },
    {
      id: 'hot',
      name: 'Гарячі страви',
      description: 'Гарячі страви японської кухні'
    },
    {
      id: 'desserts',
      name: 'Десерти',
      description: 'Традиційні японські десерти'
    },
    {
      id: 'drinks',
      name: 'Напої',
      description: 'Японські чаї, саке та інші напої'
    }
  ];
  
  // Блюда меню
  const menuItems = [
    {
      id: 1,
      category: 'sushi',
      name: 'Сашимі лосось',
      description: 'Свіжий нарізаний лосось преміум якості',
      price: '280 грн',
      image: `${basePath}/images/menu/sashimi-salmon.jpg`
    },
    {
      id: 2,
      category: 'sushi',
      name: 'Рол "Веселка"',
      description: 'Рол з різними видами риби, авокадо та огірком',
      price: '320 грн',
      image: `${basePath}/images/menu/rainbow-roll.jpg`
    },
    {
      id: 3,
      category: 'sushi',
      name: 'Філадельфія',
      description: 'Класичний рол з лососем, вершковим сиром та авокадо',
      price: '290 грн',
      image: `${basePath}/images/menu/philadelphia.jpg`
    },
    {
      id: 4,
      category: 'hot',
      name: 'Місо суп',
      description: 'Традиційний японський суп з тофу, водоростями та зеленою цибулею',
      price: '150 грн',
      image: `${basePath}/images/menu/miso-soup.jpg`
    },
    {
      id: 5,
      category: 'hot',
      name: 'Теріякі стейк',
      description: 'Яловичий стейк у соусі теріякі з овочами',
      price: '420 грн',
      image: `${basePath}/images/menu/teriyaki-steak.jpg`
    },
    {
      id: 6,
      category: 'hot',
      name: 'Темпура',
      description: 'Креветки та овочі у хрусткому клярі',
      price: '290 грн',
      image: `${basePath}/images/menu/tempura.jpg`
    },
    {
      id: 7,
      category: 'desserts',
      name: 'Моті',
      description: 'Традиційний японський десерт з рисового тіста з начинкою',
      price: '180 грн',
      image: `${basePath}/images/menu/mochi.jpg`
    },
    {
      id: 8,
      category: 'desserts',
      name: 'Дораякі',
      description: 'Японські млинці з пастою зі солодких бобів',
      price: '160 грн',
      image: `${basePath}/images/menu/dorayaki.jpg`
    },
    {
      id: 9,
      category: 'drinks',
      name: 'Саке',
      description: 'Традиційне японське рисове вино',
      price: '250 грн',
      image: `${basePath}/images/menu/sake.jpg`
    },
    {
      id: 10,
      category: 'drinks',
      name: 'Зелений чай',
      description: 'Японський зелений чай сенча вищої якості',
      price: '120 грн',
      image: `${basePath}/images/menu/green-tea.jpg`
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-neutral-950/60 z-10"></div>
        <Image
          src={`${basePath}/images/menu-header.jpg`}
          alt="Меню ресторану Сакура"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Меню ресторану
          </h1>
        </div>
      </div>
      
      <div className="container-custom py-16 px-4 relative">
        {/* Анимация облаков для фона */}
        {!prefersReducedMotion && <MovingClouds count={5} maxOpacity={0.05} className="absolute inset-0 z-0" />}
        
        <div className="relative z-10">
          {/* Категории меню */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map(category => (
              <a 
                key={category.id} 
                href={`#${category.id}`}
                className="block p-6 bg-neutral-900 border border-neutral-800 rounded-lg transition-all hover:border-[var(--accent-dark)] hover:shadow-lg"
              >
                <h2 className="text-xl font-bold mb-2 text-[var(--accent)]">{category.name}</h2>
                <p className="text-neutral-400">{category.description}</p>
              </a>
            ))}
          </div>
          
          {/* Блюда по категориям */}
          {categories.map(category => (
            <section key={category.id} id={category.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[var(--accent)] border-b border-neutral-800 pb-2">
                {category.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === category.id)
                  .map(item => (
                    <div 
                      key={item.id} 
                      className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 transition-all hover:border-[var(--accent-dark)]"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <span className="text-[var(--accent)] font-medium">{item.price}</span>
                        </div>
                        <p className="text-neutral-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
} 