import Link from 'next/link';
import Image from 'next/image';

export default function StaticNavigation() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';

  return (
    <header className="py-3 md:py-4 border-b border-[var(--accent-dark)] shadow-md fixed w-full z-50 bg-neutral-900/90">
      <div className="container-custom flex justify-between items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Перейти на головну сторінку">
          <Image 
            src={`${basePath}/images/logo-light.png`} 
            alt="Сакура логотип" 
            width={120} 
            height={60} 
          />
          <span className="ml-2 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-light)] font-serif">
            さくら
          </span>
          <span className="ml-2 text-base sm:text-lg md:text-xl font-medium">
            Сакура
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8" aria-label="Основна навігація">
          <div>
            <Link
              href="/"
              className="transition-colors relative px-1 py-2 text-sm lg:text-base hover:text-[var(--accent)]"
            >
              Главная
            </Link>
          </div>
          <div>
            <Link
              href="/menu"
              className="transition-colors relative px-1 py-2 text-sm lg:text-base hover:text-[var(--accent)]"
            >
              Меню
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="transition-colors relative px-1 py-2 text-sm lg:text-base hover:text-[var(--accent)]"
            >
              О нас
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="transition-colors relative px-1 py-2 text-sm lg:text-base hover:text-[var(--accent)]"
            >
              Контакты
            </Link>
          </div>
          <div>
            <a
              href="tel:+380123456789"
              className="btn-primary text-sm lg:text-base"
              aria-label="Зателефонувати для бронювання столу"
            >
              Забронювати стіл
            </a>
          </div>
        </nav>

        <button className="md:hidden text-white p-2" aria-label="Відкрити меню">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 