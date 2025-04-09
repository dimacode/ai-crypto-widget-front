/**
 * Утилита для загрузки стилей в Shadow DOM
 */

// Загружает стиль из указанного URL
export async function loadStylesheet(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load stylesheet: ${response.status} ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading stylesheet:', error);
    return '';
  }
}

// Создает элемент стиля с указанным содержимым
export function createStyleElement(cssContent: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.textContent = cssContent;
  return style;
}

// Загружает стили из build-файлов для Shadow DOM
export async function loadBuiltStyles(): Promise<HTMLStyleElement | null> {
  try {
    // Находим тег link с CSS в документе
    const cssLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    
    if (cssLinks.length > 0) {
      let cssContent = '';
      
      // Загружаем содержимое каждого файла CSS
      for (const link of cssLinks) {
        const href = link.getAttribute('href');
        if (href) {
          const style = await loadStylesheet(href);
          cssContent += style;
        }
      }
      
      return createStyleElement(cssContent);
    }
    
    return null;
  } catch (error) {
    console.error('Error loading built styles:', error);
    return null;
  }
} 