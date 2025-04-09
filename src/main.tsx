import './widget'
// Экспортируем объект в глобальную область видимости
import CryptoWidget from './widget'
// Ensure we inject styles early
import { injectComponentStyles } from './style-injector'

// Inject styles before anything else
injectComponentStyles();

// Делаем widget доступным глобально
declare global {
  interface Window {
    CryptoWidget: typeof CryptoWidget;
  }
}

window.CryptoWidget = CryptoWidget;
