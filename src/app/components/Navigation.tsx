'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

// Анимация для контейнера меню
const menuVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Анимация для отдельных элементов меню
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

interface NavLink {
  title: string;
  href: string;
  neonClass: string;
}

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Закрываем мобильное меню при клике на ссылку
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Отслеживаем размер окна для адаптивности
  useEffect(() => {
    // Задаем начальную ширину окна
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Закрываем меню при ресайзе окна больше 768px
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Закрываем меню при нажатии на Escape
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  // Предотвращаем прокрутку страницы когда меню открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links: NavLink[] = [
    { title: 'Главная', href: '/', neonClass: 'neon-text-gold' },
    { title: 'Меню', href: '/menu', neonClass: 'neon-text-gold' },
    { title: 'О нас', href: '/about', neonClass: 'neon-text-gold' },
    { title: 'Контакты', href: '/contact', neonClass: 'neon-text-gold' }
  ];

  return (
    <motion.header 
      className={`py-3 md:py-4 border-b border-[var(--accent-dark)] shadow-md fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-900/90 backdrop-blur-sm' : 'bg-neutral-900/90'
      }`}
      initial="hidden"
      animate="visible"
      variants={navigationVariants}
    >
      <div className="container-custom flex justify-between items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Перейти на главную страницу">
          <Logo className="text-[var(--accent-light)] w-8 h-8 sm:w-10 sm:h-10" />
          <span className="ml-2 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-light)] font-serif">
            さくら
          </span>
          <span className="ml-2 text-base sm:text-lg md:text-xl font-medium">
            Сакура
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8" aria-label="Основная навигация">
          {links.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`
                  transition-colors relative px-1 py-2 text-sm lg:text-base hover:text-[var(--accent)] ${link.neonClass}
                  ${pathname === link.href ? 'text-[var(--accent-light)]' : 'text-white'}
                `}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.title}
                {pathname === link.href && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent-light)]"
                    layoutId="navigation-underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          ))}
          <div>
            <motion.a 
              href="tel:+71234567890" 
              className="btn-primary text-sm lg:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Позвонить для бронирования стола"
            >
              Забронировать стол
            </motion.a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 top-[57px] bg-neutral-900/90 backdrop-blur-lg z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
          >
            <div className="h-full flex flex-col justify-between px-4 pt-6 pb-8">
              <nav className="flex flex-col space-y-6">
                {links.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link 
                      href={link.href}
                      className={`
                        text-2xl transition-colors ${link.neonClass}
                        ${pathname === link.href ? 'text-[var(--accent-light)]' : 'text-white'}
                      `}
                      onClick={() => setIsOpen(false)}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div variants={itemVariants}>
                <div className="mt-6 text-center">
                  <a 
                    href="tel:+71234567890" 
                    className="btn-primary inline-block w-full py-3"
                    onClick={() => setIsOpen(false)}
                    aria-label="Позвонить для бронирования стола"
                  >
                    Забронировать стол
                  </a>
                </div>
                
                <div className="mt-8 flex justify-center space-x-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--accent-light)] transition-colors" aria-label="Наш Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--accent-light)] transition-colors" aria-label="Наш Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="mt-6 text-center text-neutral-400 text-sm">
                  <p>вул. Хрещатик, 15, Київ, Україна</p>
                  <p className="mt-1">+380 (12) 345-67-89</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation; 