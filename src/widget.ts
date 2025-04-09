/**
 * Crypto Widget - самодостаточный виджет для встраивания на любой сайт
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class CryptoWidget extends HTMLElement {
  constructor() {
    super();
    // Создаем Shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Создаем контейнер для React приложения
    const mountPoint = document.createElement('div');
    mountPoint.id = 'crypto-widget-root';
    
    // Стили изолированы внутри Shadow DOM
    const styles = document.createElement('style');
    styles.textContent = `
      #crypto-widget-root {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        height: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }
    `;
    
    // Добавляем элементы в Shadow DOM
    this.shadowRoot?.appendChild(styles);
    this.shadowRoot?.appendChild(mountPoint);
    
    // Рендерим React приложение в Shadow DOM
    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      React.createElement(React.StrictMode, null, 
        React.createElement(App)
      )
    );
  }
}

// Регистрируем веб-компонент
customElements.define('crypto-widget', CryptoWidget);

// Автоматически вставляем виджет на страницу
document.addEventListener('DOMContentLoaded', () => {
  // Если виджет не был добавлен вручную
  if (!document.querySelector('crypto-widget')) {
    const widgetElement = document.createElement('crypto-widget');
    document.body.appendChild(widgetElement);
  }
});

// Экспортируем класс для явного использования
export default CryptoWidget; 