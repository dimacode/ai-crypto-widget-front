/**
 * Скрипт для экстракции стилей из SCSS в JS файл
 * (CommonJS версия для запуска через Node.js)
 */
const fs = require('fs');
const path = require('path');

// Путь к исходному SCSS файлу
const sourceScssPath = path.resolve(__dirname, 'App.scss');
// Путь к файлу widget-styles.ts
const targetStylesPath = path.resolve(__dirname, 'widget-styles.ts');

// Читаем содержимое SCSS файла
fs.readFile(sourceScssPath, 'utf8', (err, scssContent) => {
  if (err) {
    console.error('Ошибка при чтении SCSS файла:', err);
    return;
  }
  
  // Читаем файл widget-styles.ts
  fs.readFile(targetStylesPath, 'utf8', (err, tsContent) => {
    if (err) {
      console.error('Ошибка при чтении TS файла:', err);
      return;
    }
    
    // Находим начало и конец секции с appStyles
    const appStylesStartRegex = /const appStyles = `\s*\n/;
    const appStylesEndRegex = /`;\s*\n\s*\/\/ Создаем элемент стиля/;
    
    const startMatch = appStylesStartRegex.exec(tsContent);
    const endMatch = appStylesEndRegex.exec(tsContent);
    
    if (!startMatch || !endMatch) {
      console.error('Не удалось найти секцию appStyles в файле widget-styles.ts');
      return;
    }
    
    // Извлекаем очищенное содержимое SCSS для вставки в JS
    // Заменяем `@use './variables' as v;` на хардкодные значения для демонстрации
    let cleanedScss = scssContent
      .replace(/@use ['"]\.\/variables['"] as v;/, '')
      .replace(/v\.\$/g, '#333')
      .trim();
    
    // Форматируем SCSS для вставки в JS-строку
    const formattedScss = cleanedScss
      .split('\n')
      .map(line => `    ${line}`)
      .join('\n');
    
    // Собираем новое содержимое файла
    const newContent = 
      tsContent.substring(0, startMatch.index + startMatch[0].length) + 
      formattedScss + 
      '\n  ' +
      tsContent.substring(endMatch.index);
    
    // Записываем обновленное содержимое в файл
    fs.writeFile(targetStylesPath, newContent, 'utf8', (err) => {
      if (err) {
        console.error('Ошибка при записи в файл widget-styles.ts:', err);
        return;
      }
      console.log('Стили успешно обновлены в widget-styles.ts');
    });
  });
}); 