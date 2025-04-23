// Функция для создания стилей для Shadow DOM
export function createWidgetStyles() {
  // Базовые стили для контейнера виджета
  const containerStyles = `
    #ai-crypto-widget-root {
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
      z-index: 5000;
    }
  `;

  // Стили из App.scss, перенесенные для использования внутри Shadow DOM
  const appStyles = `
    // @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@wght@400;500;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    
    .ai-crypto-w {
      font-family: "Poppins", sans-serif;
      color: #636465;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 50px;
      height: 50px;
      background-color: white;
      box-shadow: 0 0 10px #e1e1e1;
      border-radius: 5px;
      transition: all 0.3s ease;
    
      &__is-open {
        width: 500px;
        height: 500px;
      }
    }
  `;

  // Создаем элемент стиля и добавляем в него все стили
  const style = document.createElement('style');
  style.textContent = containerStyles + appStyles;
  
  return style;
} 