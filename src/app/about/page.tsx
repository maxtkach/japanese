import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // Получаем базовый путь для изображений
  const basePath = process.env.NODE_ENV === 'production' ? '/japanese' : '';

  // Информация о команде
  const teamMembers = [
    {
      name: 'Такаши Ямада',
      role: 'Главный шеф-повар',
      image: `${basePath}/images/team/chef1.jpg`,
      bio: 'Опыт работы более 15 лет в лучших ресторанах Токио. Специализируется на традиционной японской кухне.'
    },
    {
      name: 'Юко Танака',
      role: 'Су-шеф',
      image: `${basePath}/images/team/chef2.jpg`,
      bio: 'Эксперт по суши и сашими. Участник международных кулинарных конкурсов и призер чемпионата по приготовлению суши.'
    },
    {
      name: 'Иван Петренко',
      role: 'Шеф-повар горячей кухни',
      image: `${basePath}/images/team/chef3.jpg`,
      bio: 'Обучался в Японии, совмещает традиционные техники и локальные ингредиенты для создания уникальных блюд.'
    },
    {
      name: 'Мария Коваль',
      role: 'Менеджер ресторана',
      image: `${basePath}/images/team/manager.jpg`,
      bio: 'Профессионал в области ресторанного бизнеса с 10-летним опытом работы в премиальных заведениях.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Заголовок страницы */}
      <div className="relative h-[40vh]">
        <div className="absolute inset-0 bg-neutral-950/60 z-10"></div>
        <Image
          src={`${basePath}/images/about-header.jpg`}
          alt="О ресторане Сакура"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            О ресторане
          </h1>
        </div>
      </div>
      
      {/* История ресторана */}
      <section className="py-16 bg-neutral-950">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">
                Наша история
              </h2>
              <p className="text-lg mb-6">
                Ресторан "Сакура" был основан в 2012 году командой энтузиастов и любителей японской культуры. 
                Наша цель - познакомить украинцев с аутентичной японской кухней и подарить незабываемый кулинарный опыт.
              </p>
              <p className="text-lg mb-6">
                Мы начинали как небольшое кафе с ограниченным меню, но благодаря качеству блюд и уникальной атмосфере 
                быстро завоевали любовь посетителей. Сегодня "Сакура" - это один из ведущих японских ресторанов Киева.
              </p>
              <p className="text-lg">
                Главной особенностью ресторана является использование только свежих и качественных ингредиентов, 
                многие из которых импортируются напрямую из Японии.
              </p>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src={`${basePath}/images/about/restaurant-history.jpg`}
                  alt="История ресторана Сакура"
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
                Наша философия
              </h2>
              <p className="text-lg mb-6">
                Философия ресторана "Сакура" основана на трех японских принципах: "Wabi" (простота), 
                "Sabi" (красота в несовершенстве) и "Umami" (глубокий вкус).
              </p>
              <p className="text-lg mb-6">
                Мы стремимся не только предложить вкусные блюда, но и создать особую атмосферу, 
                в которой гости могут погрузиться в японскую культуру и традиции.
              </p>
              <p className="text-lg">
                Каждое блюдо в нашем меню - это результат тщательного подбора ингредиентов, 
                соблюдения традиционных техник приготовления и внимания к эстетике.
              </p>
            </div>
            
            <div className="md:w-1/2 relative japanese-border p-3">
              <div className="relative aspect-video">
                <Image
                  src={`${basePath}/images/about/philosophy.jpg`}
                  alt="Философия ресторана Сакура"
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
            Интерьер ресторана
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior1.jpg`}
                alt="Интерьер ресторана Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior2.jpg`}
                alt="Интерьер ресторана Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative h-64 japanese-border p-2">
              <Image
                src={`${basePath}/images/about/interior3.jpg`}
                alt="Интерьер ресторана Сакура"
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