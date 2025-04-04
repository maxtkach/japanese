import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/about-hero.jpg"
            alt="О ресторане Сакура"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-neutral-950/60 z-0"></div>
        
        <div className="container-custom relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            О ресторане <span className="text-[var(--accent-light)] font-serif">Сакура</span>
          </h1>
          <p className="text-xl text-neutral-200 text-center max-w-2xl mx-auto mb-10">
            Ми поєднуємо автентичну японську кухню з сучасним підходом до гастрономії
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent)]">
                Наша історія
              </h2>
              <p className="text-lg mb-6">
                Ресторан "Сакура" був заснований у 2010 році групою ентузіастів японської кухні, 
                які прагнули познайомити жителів Києва з автентичними смаками Японії.
              </p>
              <p className="text-lg mb-6">
                Назва "Сакура" символізує не тільки красу цвітіння вишні, але й філософію нашого ресторану: 
                недовговічність моменту, який потрібно цінувати та насолоджуватися ним.
              </p>
              <p className="text-lg">
                З моменту відкриття ми прагнемо дотримуватися традиційних японських кулінарних технік, 
                одночасно додаючи інноваційних елементів до наших страв, щоб створювати унікальний 
                гастрономічний досвід для наших гостей.
              </p>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src="/images/restaurant-story.jpg"
                  alt="История ресторана Сакура"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-950">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--accent)]">
            Наша команда
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 mb-6 japanese-border p-2 mx-auto max-w-xs">
                <Image
                  src="/images/chef-1.jpg"
                  alt="Шеф-повар Такеши Ямамото"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Такеші Ямамото</h3>
              <p className="text-neutral-300 mb-2">Шеф-кухар</p>
              <p className="text-sm text-neutral-400">
                Майстер сушист з 20-річним досвідом роботи в найкращих ресторанах Токіо та Кіото.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-80 mb-6 japanese-border p-2 mx-auto max-w-xs">
                <Image
                  src="/images/chef-2.jpg"
                  alt="Су-шеф Алекс Романенко"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Олексій Романенко</h3>
              <p className="text-neutral-300 mb-2">Су-шеф</p>
              <p className="text-sm text-neutral-400">
                Талановитий українській кухар, який навчався мистецтву японської кухні в Осаці.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-80 mb-6 japanese-border p-2 mx-auto max-w-xs">
                <Image
                  src="/images/manager.jpg"
                  alt="Управляющая Оксана Петренко"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Оксана Петренко</h3>
              <p className="text-neutral-300 mb-2">Керуюча</p>
              <p className="text-sm text-neutral-400">
                Спеціаліст з гостинності з великим досвідом роботи в ресторанному бізнесі.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--accent)]">
            Наш інтер'єр
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="japanese-border p-2">
                <div className="relative aspect-video">
                  <Image
                    src={`/images/interior-${num}.jpg`}
                    alt={`Интерьер ресторана Сакура ${num}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
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
    </>
  );
} 