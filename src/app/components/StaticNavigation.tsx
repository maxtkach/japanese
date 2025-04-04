import Link from 'next/link';

const StaticNavigation = () => {
  const navLinks = [
    { name: 'Главная', href: '/' },
    { name: 'Меню', href: '/menu' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <header className="py-4 border-b border-[var(--accent)] shadow-md fixed w-full z-50 bg-neutral-900">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold text-[var(--accent)] font-serif">
            さくら
          </span>
          <span className="ml-2 text-lg md:text-xl font-medium">
            Сакура
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <div>
            <a 
              href="tel:+71234567890" 
              className="btn-primary"
            >
              Забронировать стол
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default StaticNavigation; 