'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  return (
    <>
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src={`${basePath}/images/contact-hero.jpg`}
            alt="Контакты ресторана Сакура"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-neutral-950/60 z-0"></div>
        
        <div className="container-custom relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            Контакти
          </h1>
          <p className="text-xl text-neutral-200 text-center max-w-2xl mx-auto mb-10">
            Зв'яжіться з нами для бронювання або питань про ресторан
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--accent)]">
                Контактна інформація
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Адреса</h3>
                  <p className="text-neutral-300">вул. Хрещатик, 15</p>
                  <p className="text-neutral-300">Київ, Україна</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Телефон</h3>
                  <p className="text-neutral-300">
                    <a 
                      href="tel:+380123456789" 
                      className="hover:text-[var(--accent-light)] transition-colors"
                    >
                      +380 (12) 345-67-89
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-neutral-300">
                    <a 
                      href="mailto:info@sakura-restaurant.ua" 
                      className="hover:text-[var(--accent-light)] transition-colors"
                    >
                      info@sakura-restaurant.ua
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Години роботи</h3>
                  <p className="text-neutral-300">Понеділок - Четвер: 12:00 - 22:00</p>
                  <p className="text-neutral-300">П'ятниця - Субота: 12:00 - 23:00</p>
                  <p className="text-neutral-300">Неділя: 13:00 - 22:00</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Соціальні мережі</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors"
                    aria-label="Наш Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors"
                    aria-label="Наш Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors"
                    aria-label="Наш Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="japanese-border p-3">
                <div className="relative aspect-square md:aspect-auto md:h-[500px]">
                  <Image
                    src={`${basePath}/images/map.jpg`}
                    alt="Карта расположения ресторана Сакура"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://goo.gl/maps/xyz123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--accent-light)] hover:underline"
                >
                  Відкрити в Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-950">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent)]">
              Бронювання столика
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Для бронювання столика ви можете зателефонувати нам або відправити запит за електронною поштою.
              Ми рекомендуємо бронювати столик заздалегідь, особливо на вихідні дні.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+380123456789" 
                className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] text-white px-8 py-4 rounded-lg transition-colors text-lg font-medium"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Зателефонувати
                </span>
              </a>
              <a 
                href="mailto:booking@sakura-restaurant.ua" 
                className="border-2 border-[var(--accent-dark)] hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Написати Email
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--primary-dark)]">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Запрошуємо вас!
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Ми з нетерпінням чекаємо на зустріч з вами та готові створити незабутню атмосферу для вашого візиту
          </p>
          <Link 
            href="/menu" 
            className="bg-white text-[var(--primary-dark)] hover:bg-[var(--accent-light)] hover:text-neutral-900 px-8 py-3 rounded transition-colors text-lg font-medium"
          >
            Переглянути меню
          </Link>
        </div>
      </section>
    </>
  );
} 