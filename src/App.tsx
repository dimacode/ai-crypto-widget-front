import { useState } from 'react';
import './App.scss'
import Tabs from './components/Tabs/Tabs';
import Whale from './components/Whale/Whale';

// Изображение доступно по относительному пути от корня проекта
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`crypto-widget ${isOpen ? 'is-open' : 'is-closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img 
          src="./assets/money.png"
          alt="open" 
          className='icon-money' 
          width={20} 
          height={20}
        />
      </button>
      <Tabs />
      <Whale />
    </div>
  )
}

export default App
