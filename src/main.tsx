import './widget'
// Экспортируем объект в глобальную область видимости
import CryptoWidget from './widget'

// Делаем widget доступным глобально
declare global {
  interface Window {
    CryptoWidget: typeof CryptoWidget;
  }
}

window.CryptoWidget = CryptoWidget;
