const fs = require('fs');
const path = require('path');

// Создадим директорию для изображений, если она не существует
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Список изображений, которые нужно создать
const images = [
  'hero-sushi.jpg',
  'restaurant-interior.jpg',
  'sashimi.jpg',
  'sushi-set.jpg',
  'wagyu.jpg',
  'menu-bg.jpg',
  'sushi-category.jpg',
  'main-category.jpg',
  'soup-category.jpg',
  'dessert-category.jpg',
  'drinks-category.jpg',
  'about-hero.jpg',
  'restaurant-story.jpg',
  'chef-1.jpg',
  'chef-2.jpg',
  'manager.jpg',
  'interior-1.jpg',
  'interior-2.jpg',
  'interior-3.jpg',
  'interior-4.jpg',
  'interior-5.jpg',
  'interior-6.jpg',
  'contact-hero.jpg',
  'map.jpg',
];

// Создаем минимальный SVG файл для каждого изображения
const svgContent = `
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#333"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Placeholder Image</text>
</svg>
`;

// Сохраняем каждое изображение
images.forEach(imageName => {
  const imagePath = path.join(imagesDir, imageName);
  
  // Вместо JPG создадим SVG файлы (потом их можно заменить на реальные)
  const svgImagePath = imagePath.replace('.jpg', '.svg');
  
  fs.writeFileSync(svgImagePath, svgContent);
  console.log(`Создано изображение: ${svgImagePath}`);
});

console.log('Все заполнительные изображения созданы!'); 