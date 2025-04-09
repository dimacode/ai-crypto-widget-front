# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Crypto Widget

Виджет для отображения информации о криптовалютах, который может быть встроен на любой сайт.

## Особенности

- Сборка в один JavaScript файл
- Использование Shadow DOM для изоляции стилей
- Простая интеграция на любой сайт
- Отображение курсов криптовалют
- Автоматическое добавление на страницу

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшн
npm run build
```

## Использование

После сборки проекта, в директории `dist` будет создан файл `widget.js`. Существует три способа интеграции виджета на веб-сайт:

### Способ 1: Автоматическое встраивание

Просто добавьте скрипт в секцию `<head>` вашего сайта:

```html
<script src="path/to/widget.js"></script>
```

Виджет будет автоматически добавлен в конец `<body>` вашей страницы.

### Способ 2: Размещение в конкретном месте

Добавьте скрипт в `<head>` и разместите тег виджета в нужном месте:

```html
<!-- В секции head -->
<script src="path/to/widget.js"></script>

<!-- В нужном месте страницы -->
<crypto-widget></crypto-widget>
```

### Способ 3: Программное добавление

Вы также можете программно создать и добавить виджет в любом месте страницы:

```html
<!-- В секции head -->
<script src="path/to/widget.js"></script>

<!-- Ваш JavaScript код -->
<script>
  // Дождитесь загрузки DOM
  document.addEventListener('DOMContentLoaded', function() {
    // Создаем контейнер для виджета
    const container = document.getElementById('crypto-widget-container');
    
    // Создаем элемент виджета
    const widget = document.createElement('crypto-widget');
    
    // Добавляем виджет в контейнер
    container.appendChild(widget);
  });
</script>

<!-- В нужном месте страницы -->
<div id="crypto-widget-container"></div>
```

## Настройка

В текущей версии виджет использует мок-данные. Для получения реальных данных о криптовалютах необходимо реализовать запросы к API в файле `src/App.tsx`.

## Лицензия

MIT
