import './WidgetBody.scss';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import { useState } from 'react';
import MainCloseButton from '../../components/MainCloseButton/MainCloseButton';
import Whale from '../../components/Whale/Whale';
import SmartDeals from '../../components/SmartDeals/SmartDeals';
import AiInvestmens from '../../components/AiInvestmens/AiInvestmens';

export default function WidgetBody({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
  const [activeTab, setActiveTab] = useState('whale');
  return (
    <div className={`ai-crypto-w__widget-body ${isOpen ? 'ai-crypto-w__widget-body_is-open' : ''}`}>
      <Header />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'whale' && <Whale />}
      {activeTab === 'smart' && <SmartDeals />}
      {activeTab === 'investments' && <AiInvestmens />}

      <MainCloseButton setIsOpen={setIsOpen} />
    </div>
  );
}
