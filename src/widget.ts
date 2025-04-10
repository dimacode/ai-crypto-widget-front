/**
 * Crypto Widget - самодостаточный виджет для встраивания на любой сайт
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Basic styles still needed
import './App.scss';
import './index.css';
// Import our new style injector
import { injectComponentStyles } from './style-injector';

class CryptoWidget extends HTMLElement {
  constructor() {
    super();
    // No longer using Shadow DOM
  }

  connectedCallback() {
    // Inject component styles directly
    injectComponentStyles();
    
    // Add stylesheet link if it doesn't exist yet
    const styleId = 'ai-crypto-widget-styles';
    if (!document.getElementById(styleId)) {
      // Get all stylesheet links from the build
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(link => link.getAttribute('href'))
        .filter((href): href is string => href !== null && href.includes('style-'));

      if (stylesheets.length > 0) {
        const styleLink = document.createElement('link');
        styleLink.id = styleId;
        styleLink.rel = 'stylesheet';
        styleLink.href = stylesheets[0];
        document.head.appendChild(styleLink);
      }
    }

    // Создаем контейнер для React приложения
    const mountPoint = document.createElement('div');
    mountPoint.id = 'ai-crypto-widget-root';
    mountPoint.style.cssText = `
      font-family: system-ui, -apple-system, sans-serif;
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      z-index: 1000;
    `;
    
    // Добавляем элементы напрямую в DOM
    this.appendChild(mountPoint);
    
    // Рендерим React приложение
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