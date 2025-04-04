import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Хироши Танака',
      role: 'Шеф-повар',
      image: '/images/chef-1.jpg',
      description: 'Мастер японской кухни с 20-летним опытом работы в элитных ресторанах Токио и Киото.'
    },
    {
      name: 'Юки Ватанабе',
      role: 'Су-шеф',
      image: '/images/chef-2.jpg',
      description: 'Специалист по приготовлению суши и роллов, обучавшийся в лучших кулинарных школах Японии.'
    },
    {
      name: 'Мария Иванова',
      role: 'Управляющий',
      image: '/images/manager.jpg',
      description: 'Создает неповторимую атмосферу ресторана и заботится о комфорте каждого гостя.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Ресторан Сакура"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            О ресторане <span className="text-[var(--accent)]">Сакура</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto">
            Мы создаем аутентичные японские вкусы с современным подходом
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Наша История</h2>
              <p className="text-neutral-300 mb-6 text-lg">
                Ресторан "Сакура" начал свой путь в 2010 году с небольшого суши-бара, 
                основанного настоящим японским шеф-поваром Хироши Танака. Его мечтой было 
                создать место, где люди могли бы почувствовать истинный вкус Японии, 
                не покидая Россию.
              </p>
              <p className="text-neutral-300 mb-6 text-lg">
                За 14 лет мы выросли из маленького суши-бара в полноценный ресторан 
                аутентичной японской кухни, сохранив при этом душу и философию, 
                заложенные основателем.
              </p>
              <p className="text-neutral-300 text-lg">
                Сегодня "Сакура" — это место, где традиционные японские рецепты 
                встречаются с современными кулинарными техниками, создавая неповторимый 
                гастрономический опыт для наших гостей.
              </p>
            </div>
            <div className="relative h-[500px] japanese-border p-2">
              <Image
                src="/images/restaurant-story.jpg"
                alt="История ресторана Сакура"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container-custom text-center">
          <h2 className="section-title mb-12">Наша Философия</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-neutral-950 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Качество</h3>
              <p className="text-neutral-400">
                Мы используем только лучшие, свежайшие ингредиенты. Многие из них 
                импортируются напрямую из Японии для создания аутентичных вкусов.
              </p>
            </div>
            
            <div className="bg-neutral-950 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Аутентичность</h3>
              <p className="text-neutral-400">
                Мы чтим японские кулинарные традиции и техники, при этом добавляя
                современные нотки для создания уникальных вкусовых впечатлений.
              </p>
            </div>
            
            <div className="bg-neutral-950 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Гостеприимство</h3>
              <p className="text-neutral-400">
                Мы следуем японской концепции "омотенаши" — искусству гостеприимства, 
                где каждая деталь обслуживания продумана для вашего комфорта.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Наша Команда</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-neutral-900 rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1 text-white">{member.name}</h3>
                  <p className="text-[var(--accent)] mb-4">{member.role}</p>
                  <p className="text-neutral-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Наш Интерьер</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-60 japanese-border p-2">
                <Image
                  src={`/images/interior-${num}.jpg`}
                  alt={`Интерьер ресторана ${num}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 