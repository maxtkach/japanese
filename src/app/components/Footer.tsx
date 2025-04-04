import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100 border-t border-[var(--accent-dark)] py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[var(--accent-light)] font-serif">
                さくら
              </span>
              <span className="ml-2 text-xl">Сакура</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Изысканная японская кухня с аутентичными вкусами и атмосферой
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">Главная</Link></li>
              <li><Link href="/menu" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">Меню</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">О нас</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-[var(--accent-light)] transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Контакты</h3>
            <address className="not-italic">
              <p className="text-neutral-300 mb-2">вул. Хрещатик, 15</p>
              <p className="text-neutral-300 mb-2">Київ, Україна</p>
              <p className="text-neutral-300 mb-4">
                <a href="tel:+380123456789" className="hover:text-[var(--accent-light)] transition-colors">+380 (12) 345-67-89</a>
              </p>
              <p className="text-neutral-300">
                <a href="mailto:info@sakura-restaurant.ua" className="hover:text-[var(--accent-light)] transition-colors">info@sakura-restaurant.ua</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Ресторан "Сакура". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 