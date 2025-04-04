const fs = require('fs');
const path = require('path');

// Создаем директорию для изображений, если она не существует
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// SVG лепестка сакуры
const petalSvg = `
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="petalGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#ffcce6" />
      <stop offset="70%" stop-color="#ff99cc" />
      <stop offset="100%" stop-color="#ff66b3" />
    </radialGradient>
  </defs>
  <g transform="translate(100,100)">
    <path d="M0,-60 C40,-45 70,-5 40,40 C20,70 -20,70 -40,40 C-70,-5 -40,-45 0,-60 Z" 
          fill="url(#petalGradient)" 
          stroke="#ff80bf" 
          stroke-width="1" 
          opacity="0.9" />
    <path d="M0,-10 C10,-15 15,-5 10,10 C0,20 -10,15 -10,5 C-15,-5 -10,-15 0,-10 Z" 
          fill="#ffffff" 
          opacity="0.4" />
  </g>
</svg>
`;

// Путь для сохранения
const petalPath = path.join(imagesDir, 'sakura-petal.svg');

// Сохраняем SVG
fs.writeFileSync(petalPath, petalSvg);
console.log(`Изображение лепестка сакуры создано: ${petalPath}`);

// Для использования с Three.js также создадим PNG-версию
// Здесь мы просто дублируем путь, в реальном проекте следует использовать
// инструмент для преобразования SVG в PNG
const pngPetalPath = path.join(imagesDir, 'sakura-petal.png');
fs.writeFileSync(pngPetalPath.replace('.png', '.svg'), petalSvg);
console.log(`Изображение лепестка сакуры (SVG) создано: ${pngPetalPath.replace('.png', '.svg')}`);
console.log('Для Three.js используйте этот файл или конвертируйте его в PNG'); 