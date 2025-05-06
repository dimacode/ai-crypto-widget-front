import { formatDate } from '../../helpers/dateFormat';
import './Whale.scss';
import { useEffect, useState } from 'react';

interface WhaleData {
  id: number;
  marketName: string;
  exchange: string;
  mainMarket: string;
  coinName: string;
  coinImage: string;
  newVol: number;
  oldVol: number;
  volDiff: number;
  amount: number;
  newBid: number;
  newAsk: number;
  oldUnix: number;
  newUnix: number;
  oldBid: number;
  oldAsk: number;
  trend: 'bear' | 'bull' | 'neut';
  createdAt: string;
  updatedAt: string;
}

const trend = {
  'bear': 'sell',
  'bull': 'buy',
  'neut': 'neut'
}

const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="64px" height="64px" viewBox="0 0 128 128">
      <g>
        <path d="M10.96 28.9C12.46 26.14 28.4.5 63.76.24c37.1-.26 53.48 29.12 54.03 30.38 2.44 5.63 1.4 12.86-3.77 15.44-5.93 2.96-12.13 1.18-15.44-3.5-6.83-9.6-7.58-21.7-25.15-28.87-38.08-15.57-64.03 18-62.5 15.2zM117 99.06c-1.48 2.74-17.42 28.4-52.78 28.63-37.1.25-53.5-29.1-54.04-30.4-2.48-5.6-1.43-12.82 3.72-15.4 5.94-2.96 12.15-1.17 15.45 3.5 6.84 9.62 7.58 21.7 25.16 28.88 38.1 15.54 64.06-18 62.5-15.2z" fill="#ff9800"/>
        <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="180 64 64" dur="900ms" repeatCount="indefinite"/>
      </g>
    </svg>
  )
}

export default function Whale({searchCoin = ''}: {searchCoin: string}) {
  const [localData, setLocalData] = useState<WhaleData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWhaleHistory = async () => {
    const response = await fetch('http://localhost:3000/api/whale-moves/history-whale-moves');
    const responseData = await response.json();
    setIsLoading(false);
    setLocalData(responseData);
    // fetchData();
  }

  useEffect(() => {
    const interval = setInterval(() => {  
      getWhaleHistory();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const reversedData = localData.reverse().filter(item => {
    if (searchCoin) {
      return item.coinName.toLowerCase().includes(searchCoin.toLowerCase());
    }

    return item;
  });

  return (
    <div className="ai-crypto-w_whale">
      <h2>Whale Moves</h2>
      <h3>Real-time feed of high-volume trades and unusual market activity. These points often coincide with spikes in trading activity and market reversals.</h3>
      <div className="ai-crypto-w_whale-alert-container">
        {isLoading && (
          <div className="ai-crypto-w_whale-loader-container">
            <Loader />
          </div>
        )}
        {reversedData.map((alert) => (
          <div key={alert.id} className={`ai-crypto-w_whale-alert`}>
            <p className="ai-crypto-w_whale-alert-token"><img src={alert.coinImage} alt={alert.coinName} width={20} height={20} className="ai-crypto-w_whale-alert-token-image" /> <b>{alert.coinName}</b> - Unusual <b className={`ai-crypto-w_whale-alert-token--${trend[alert.trend]}`}>{trend[alert.trend]}</b> Activity</p>
            <p className="ai-crypto-w_whale-alert-amount">Amount: <b>{alert.amount}</b> USDT</p>
            <p className="ai-crypto-w_whale-alert-deal-price">Deal Price: <b>{alert.newBid}</b> <span>at <b>{formatDate(alert.newUnix)}</b></span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
