import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';
  
  return (
    <footer className="bg-neutral-950 text-neutral-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <Link href="/" className="block mb-4">
              <Image 
                src={`${basePath}/images/logo-light.png`} 
                alt="Сакура логотип" 
                width={120} 
                height={60} 
              />
            </Link>
            <p className="text-sm text-neutral-400">
              Автентична японська кухня в серці Києва.
              Традиції та інновації у кожній страві.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="hover:text-[var(--accent-light)] transition-colors">
                  Суші та роли
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[var(--accent-light)] transition-colors">
                  Гарячі страви
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[var(--accent-light)] transition-colors">
                  Десерти
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[var(--accent-light)] transition-colors">
                  Напої
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Інформація</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--accent-light)] transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent-light)] transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Контакти</h3>
            <p className="mb-2">вул. Хрещатик 1, Київ</p>
            <p className="mb-2">+380 (44) 123-45-67</p>
            <p className="mb-4">sakura@example.com</p>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-neutral-400 hover:text-[var(--accent-light)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-neutral-400 hover:text-[var(--accent-light)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 px-4 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Сакура. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
} 