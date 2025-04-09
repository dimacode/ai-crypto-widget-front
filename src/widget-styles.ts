// Функция для создания стилей для Shadow DOM
export function createWidgetStyles() {
  // Базовые стили для контейнера виджета
  const containerStyles = `
    #crypto-widget-root {
      font-family: system-ui, -apple-system, sans-serif;
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      z-index: 1000;
    }
  `;

  // Стили из App.scss, перенесенные для использования внутри Shadow DOM
  const appStyles = `
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    
    .crypto-widget {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 400px;
      margin: 0 auto;
      text-align: left;
      color: #333text-color;
    }
    
    .test {
      color: red;
      background-color: black;
      font-size: 20px;
    }
    
    .test_2 {
      color: blue;
      background-color: green;
      font-size: 20px;
    }
  `;

  // Создаем элемент стиля и добавляем в него все стили
  const style = document.createElement('style');
  style.textContent = containerStyles + appStyles;
  
  return style;
} 