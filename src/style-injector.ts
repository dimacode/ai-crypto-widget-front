/**
 * Utility for injecting component styles directly into the document
 */

// All component styles collected in one place - compiled from SCSS
const componentStyles = `
/* App general styles */
.crypto-widget {
  font-family: system-ui, -apple-system, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  color: #333;
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

/* Tabs component styles - compiled from Tabs.scss */
.tabs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.tabs h1 {
  color: aqua;
  font-size: 20px;
}
`;

/**
 * Injects all component styles directly into the document head
 */
export function injectComponentStyles(): void {
  const styleId = 'crypto-widget-component-styles';
  
  // Only inject if not already present
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = componentStyles;
    document.head.appendChild(styleElement);
  }
} 