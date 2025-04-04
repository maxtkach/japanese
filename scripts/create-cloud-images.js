const fs = require('fs');
const path = require('path');

// Создаем директорию для изображений, если она не существует
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Определяем три разных формы облаков
const cloudPaths = [
  "M30,80 Q50,100 80,90 Q100,100 120,90 Q140,100 160,85 Q180,95 190,80 Q190,60 170,50 Q175,35 160,35 Q150,20 130,25 Q110,5 90,15 Q70,5 50,20 Q35,15 25,30 Q10,35 15,50 Q5,60 10,75 Q20,85 30,80 Z",
  "M20,70 Q40,85 60,75 Q80,90 100,80 Q115,90 130,80 Q150,90 170,75 Q180,60 170,45 Q180,30 165,25 Q160,10 140,15 Q130,5 115,10 Q95,0 80,10 Q65,0 50,10 Q35,5 25,15 Q10,20 15,35 Q5,45 10,60 Q15,70 20,70 Z",
  "M25,65 Q40,80 60,70 Q75,80 90,70 Q105,80 120,70 Q140,80 155,70 Q170,80 180,65 Q185,50 175,40 Q180,25 165,20 Q155,10 140,15 Q120,5 100,15 Q80,5 60,15 Q45,10 35,20 Q20,25 25,40 Q15,50 25,65 Z"
];

// Создаем SVG файлы для каждой формы облака
cloudPaths.forEach((pathData, index) => {
  const cloudSvg = `
<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="white" />
</svg>
`;

  const cloudPath = path.join(imagesDir, `cloud${index + 1}.svg`);
  fs.writeFileSync(cloudPath, cloudSvg);
  console.log(`Изображение облака ${index + 1} создано: ${cloudPath}`);
});

console.log('Все изображения облаков созданы успешно!'); 