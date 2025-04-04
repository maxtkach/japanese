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

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages при пуше в ветку main.

### Настройка GitHub Pages вручную

1. Соберите проект
```bash
npm run build
```

2. Деплой на GitHub Pages
```bash
# Установите gh-pages, если еще не установлен
npm install --save-dev gh-pages

# Выполните деплой
npx gh-pages -d out
```

3. После деплоя сайт будет доступен по адресу: `https://your-username.github.io/japanese/`

### Примечания по GitHub Pages

- В файле `next.config.js` уже настроены параметры `basePath` и `assetPrefix` для GitHub Pages
- Убедитесь, что вы заменили `yourusername` на ваше имя пользователя GitHub в файле `src/app/layout.tsx`
- В репозитории настроен автоматический деплой через GitHub Actions при пуше в ветку main

## Скриншоты

> Примечание: Изображения должны быть добавлены в директорию public/images для корректного отображения сайта.
