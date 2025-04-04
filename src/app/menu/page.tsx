import Image from 'next/image';

export default function MenuPage() {
  const menuCategories = [
    {
      id: 'sushi',
      title: 'Суши и Роллы',
      description: 'Традиционные и фирменные роллы, приготовленные нашими мастерами',
      image: '/images/sushi-category.jpg',
      items: [
        { name: 'Сашими лосось', price: '235 ₴', description: '5 ломтиков свежего лосося' },
        { name: 'Суши-сет "Сакура"', price: '850 ₴', description: '16 кусочков фирменных суши' },
        { name: 'Ролл "Филадельфия"', price: '275 ₴', description: 'Лосось, сливочный сыр, огурец' },
        { name: 'Ролл "Калифорния"', price: '260 ₴', description: 'Краб, авокадо, огурец, тобико' },
        { name: 'Ролл "Дракон"', price: '320 ₴', description: 'Угорь, авокадо, огурец, соус унаги' },
      ]
    },
    {
      id: 'main',
      title: 'Горячие блюда',
      description: 'Традиционные японские горячие блюда',
      image: '/images/main-category.jpg',
      items: [
        { name: 'Мисо рамен', price: '320 ₴', description: 'Традиционный рамен на мисо бульоне с говядиной' },
        { name: 'Вагю стейк', price: '1350 ₴', description: 'Стейк из мраморной говядины вагю' },
        { name: 'Тэмпура', price: '280 ₴', description: 'Креветки и овощи в хрустящем тесте' },
        { name: 'Якитори', price: '210 ₴', description: 'Шашлычки из курицы с соусом тэрияки' },
        { name: 'Унаги дон', price: '370 ₴', description: 'Рис с угрем под соусом унаги' },
      ]
    },
    {
      id: 'soups',
      title: 'Супы',
      description: 'Традиционные японские супы',
      image: '/images/soup-category.jpg',
      items: [
        { name: 'Мисо суп', price: '140 ₴', description: 'Традиционный суп с водорослями, тофу и зеленым луком' },
        { name: 'Суимоно', price: '170 ₴', description: 'Прозрачный рыбный бульон с морепродуктами' },
        { name: 'Том ям', price: '280 ₴', description: 'Острый тайский суп с креветками и грибами' },
      ]
    },
    {
      id: 'desserts',
      title: 'Десерты',
      description: 'Традиционные японские сладости',
      image: '/images/dessert-category.jpg',
      items: [
        { name: 'Моти', price: '185 ₴', description: 'Традиционные рисовые лепешки с начинкой' },
        { name: 'Дорайяки', price: '165 ₴', description: 'Блинчики с пастой из красных бобов' },
        { name: 'Японское мороженое', price: '140 ₴', description: 'Мороженое с зеленым чаем матча' },
      ]
    },
    {
      id: 'drinks',
      title: 'Напитки',
      description: 'Традиционные японские и другие напитки',
      image: '/images/drinks-category.jpg',
      items: [
        { name: 'Японский чай', price: '140 ₴', description: 'Традиционный японский зеленый чай' },
        { name: 'Саке', price: '280 ₴', description: 'Традиционный рисовый алкогольный напиток (100 мл)' },
        { name: 'Японское пиво', price: '210 ₴', description: 'Пиво "Асахи" или "Саппоро" (0,5 л)' },
        { name: 'Матча', price: '185 ₴', description: 'Церемониальный японский зеленый чай' },
      ]
    }
  ];

  return (
    <>
      <section className="bg-neutral-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 z-0">
          <Image
            src="/images/menu-bg.jpg"
            alt="Японская кухня"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white">
            Наше <span className="text-[var(--accent-light)]">Меню</span>
          </h1>
          <p className="text-xl text-neutral-300 text-center max-w-2xl mx-auto mb-8">
            Изысканные блюда японской кухни, приготовленные нашими опытными шеф-поварами
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`} 
                className="btn-primary bg-transparent border-2 border-[var(--accent-dark)] hover:bg-[var(--accent)] hover:text-neutral-900"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {menuCategories.map((category, index) => (
        <section 
          key={category.id} 
          id={category.id} 
          className={`py-16 ${index % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900'}`}
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <div className="md:w-1/3 relative h-80 w-full japanese-border p-2">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="section-title">{category.title}</h2>
                <p className="text-neutral-300 text-lg mb-6">
                  {category.description}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 bg-neutral-900 rounded-lg flex justify-between items-start hover:shadow-md hover:shadow-black/20 transition-shadow duration-300"
                >
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[var(--accent-light)]">{item.name}</h3>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                  <span className="text-[var(--accent)] font-bold text-xl">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[var(--primary-dark)]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Хотите заказать столик?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Позвоните нам или оставьте заявку на сайте
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+380123456789" 
              className="bg-white text-[var(--primary-dark)] hover:bg-[var(--accent-light)] hover:text-neutral-900 px-8 py-3 rounded transition-colors text-lg font-medium pulse-on-hover"
            >
              Позвонить
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white hover:border-[var(--accent-light)] text-white hover:text-[var(--accent-light)] px-8 py-3 rounded transition-colors text-lg"
            >
              Заполнить форму
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 