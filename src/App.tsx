import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss'
import MainOpenButton from './components/MainOpenButton/MainOpenButton';
import WidgetBody from './common/WidgetBody/WidgetBody';

// Создаем экземпляр QueryClient
const queryClient = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`ai-crypto-w ${isOpen ? 'ai-crypto-w__is-open' : ''}`}>
        <MainOpenButton  isOpen={isOpen} setIsOpen={setIsOpen} />
        <WidgetBody isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </QueryClientProvider>
  )
}

export default App
