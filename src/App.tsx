import { useState } from 'react';
import './App.scss'
import WidgetOpenButton from './components/WidgetOpenButton/WidgetOpenButton';
import WidgetBody from './components/WidgetBody/WidgetBody';
// import Whale from './components/Whale/Whale';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`ai-crypto-w ${isOpen ? 'ai-crypto-w__is-open' : ''}`}>
      <WidgetOpenButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <WidgetBody isOpen={isOpen} />
    </div>
  )
}

export default App
