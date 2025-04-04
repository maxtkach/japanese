# Сакура - сайт ресторана японской кухни

Современный адаптивный сайт для ресторана японской кухни "Сакура". Проект разработан с использованием Next.js и TailwindCSS, отражает элегантную японскую эстетику в минималистичном дизайне.

## Функциональность

- Адаптивный дизайн для всех устройств
- Четыре основные страницы: Главная, Меню, О нас, Контакты
- Форма бронирования столиков
- Меню ресторана с категориями блюд
- Информация о ресторане и команде

## Технологии

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Шрифты Google Fonts (Inter, Noto Serif JP)

## Запуск проекта

1. Клонируйте репозиторий
```bash
git clone https://github.com/your-username/sakura-restaurant.git
cd sakura-restaurant
```

2. Установите зависимости
```bash
npm install
# или
yarn install
```

3. Запустите проект в режиме разработки
```bash
npm run dev
# или
yarn dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере

## Структура проекта

```
sakura-restaurant/
├── public/           # Статические файлы (изображения, фавиконки)
├── src/              # Исходный код
│   ├── app/          # Страницы приложения
│   │   ├── about/    # Страница "О нас"
│   │   ├── contact/  # Страница контактов
│   │   ├── menu/     # Страница меню
│   │   ├── components/ # Общие компоненты 
│   │   ├── globals.css # Глобальные стили
│   │   ├── layout.tsx  # Основной layout
│   │   └── page.tsx    # Главная страница
├── tailwind.config.js # Конфигурация TailwindCSS
├── package.json      # Зависимости и скрипты
└── README.md         # Документация проекта
```

## Сборка для продакшен

```bash
npm run build
# или
yarn build
```

## Скриншоты

> Примечание: Изображения должны быть добавлены в директорию public/images для корректного отображения сайта.
