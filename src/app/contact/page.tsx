'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Свяжитесь с нами"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Свяжитесь с <span className="text-[var(--accent)]">Нами</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto">
            Забронируйте столик или задайте нам вопрос
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Наши Контакты</h2>
              
              <div className="mb-10">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">Телефон</h3>
                    <p className="text-neutral-300"><a href="tel:+71234567890" className="hover:text-[var(--accent)]">+7 (123) 456-78-90</a></p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">Email</h3>
                    <p className="text-neutral-300"><a href="mailto:info@sakura-restaurant.ru" className="hover:text-[var(--accent)]">info@sakura-restaurant.ru</a></p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">Адрес</h3>
                    <p className="text-neutral-300">ул. Японская, 5</p>
                    <p className="text-neutral-300">Москва, Россия</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">Часы работы</h3>
                    <p className="text-neutral-300">Пн-Чт: 12:00 - 23:00</p>
                    <p className="text-neutral-300">Пт-Вс: 12:00 - 00:00</p>
                  </div>
                </div>
              </div>
              
              <div className="h-[300px] relative japanese-border p-2">
                {/* Здесь в реальном проекте была бы карта */}
                <Image
                  src="/images/map.jpg"
                  alt="Карта расположения ресторана"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div>
              <h2 className="section-title">Забронировать Столик</h2>
              
              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-medium text-white mb-2">Спасибо за заявку!</h3>
                  <p className="text-neutral-300">
                    Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
                  </p>
                  <button 
                    className="mt-6 btn-primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-900 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-neutral-300 mb-2">Ваше имя*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-neutral-300 mb-2">Телефон*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-neutral-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-neutral-300 mb-2">Дата*</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-neutral-300 mb-2">Время*</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-neutral-300 mb-2">Гости*</label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}</option>
                        ))}
                        <option value="more">Больше 10</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-neutral-300 mb-2">Особые пожелания</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-white focus:outline-none focus:border-[var(--accent)]"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full py-3 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Отправка...
                      </>
                    ) : "Забронировать столик"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 