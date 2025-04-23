import { useState } from 'react';
import './App.scss'
import MainOpenButton from './components/MainOpenButton/MainOpenButton';
import WidgetBody from './common/WidgetBody/WidgetBody';
// import Whale from './components/Whale/Whale';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`ai-crypto-w ${isOpen ? 'ai-crypto-w__is-open' : ''}`}>
      <MainOpenButton  isOpen={isOpen} setIsOpen={setIsOpen} />
      <WidgetBody isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
