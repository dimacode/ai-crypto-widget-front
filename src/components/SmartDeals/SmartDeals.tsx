import './SmartDeals.scss';
import TransactionNotification from '../SmartDealsNotification/SmartDealsNotification';
import { useEffect, useState } from 'react';
import { ordersFormat } from '../../helpers/ordersFormat';

export interface SmartDeal {
  id:                   number;
  traderName:         string;
  pareName:           string;
  coinImage:          string;
  operation:          string;
  marginAmount:       string;
  // avgEnterPrice    String
  enterPrice:         string;
  closePrice:         string;
  // orderQuantity        String
  // orderQuantityBrowser String
  roi:              string;
  unrealizedProfit: string;
  trueOpenTime:     string;
  openedOn:         string;
  trueClosedTime:   string;
  closedOn:         string;
  isOpen:           boolean;
  // isPartiallyClosed Boolean
  isNewOrder:       boolean;
  timeOutForCheck:  number;
  isLost:           boolean;

  createdAt:            string;
  updatedAt:            string;
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

export default function SmartDeals() {
  const [ordersHistory, setOrdersHistory] = useState<SmartDeal[]>([]);
  const [ordersActive, setOrdersActive] = useState<SmartDeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const historyResponse = await fetch('http://localhost:3000/api/smart-deals/history-smart-deals');
      const historyData = await historyResponse.json();
      const historyDataFormatted = ordersFormat(historyData);
      setOrdersHistory(historyDataFormatted);
    };
    fetchData();

    const activeResponse = setInterval(async () => {
      const activeResponse = await fetch('http://localhost:3000/api/smart-deals/active-smart-deals');
      const activeData = await activeResponse.json();
      const activeDataFormatted = ordersFormat(activeData);

      setIsLoading(false);
      setOrdersActive(activeDataFormatted);
    }, 5000);

    return () => clearInterval(activeResponse);
  }, []);
  
  console.log('ordersHistory', ordersHistory);
  console.log('ordersActive', ordersActive);

  return (
    <div className="ai-crypto-w_smart-deals">
      <h2>Smart Deals</h2>
      <h3>We track wallets and traders with a high success rate and publish their trades in real time. Discover proven strategies and follow the smartest moves on the market.</h3>

      <div className="ai-crypto-w_smart-deals-stats">
        <div className="ai-crypto-w_smart-deals-stats-summary">
          <div className="ai-crypto-w_smart-deals-stats-total">
            <span className="ai-crypto-w_smart-deals-stats-number">200</span>
            <span className="ai-crypto-w_smart-deals-stats-text">Total Deals</span>
          </div>
          <div className="ai-crypto-w_smart-deals-stats-ratio">
            <div className="ai-crypto-w_smart-deals-stats-win">
              <span className="ai-crypto-w_smart-deals-stats-number">128</span>
              <span className="ai-crypto-w_smart-deals-stats-percent">64%</span>
            </div>
            <div className="ai-crypto-w_smart-deals-stats-loss">
              <span className="ai-crypto-w_smart-deals-stats-number">72</span>
              <span className="ai-crypto-w_smart-deals-stats-percent">36%</span>
            </div>
          </div>
        </div>
        <div className="ai-crypto-w_smart-deals-stats-bar">
          <div className="ai-crypto-w_smart-deals-stats-win-bar" style={{width: '64%'}}></div>
          <div className="ai-crypto-w_smart-deals-stats-loss-bar" style={{width: '36%'}}></div>
        </div>
        <div className="ai-crypto-w_smart-deals-stats-legend">
          <div className="ai-crypto-w_smart-deals-stats-win-legend">Winning Deals</div>
          <div className="ai-crypto-w_smart-deals-stats-loss-legend">Losing Deals</div>
        </div>
      </div>

      <div className="ai-crypto-w_smart-deals-container">
        {isLoading ? (
          <div className="ai-crypto-w_smart-deals-loader-container">
            <Loader />
          </div>
        ) : <>
            {ordersActive.map(order => (
              <TransactionNotification 
                key={order.id}
                pareName={order.pareName}
                coinImage={order.coinImage}
                operation={order.operation}
                isOpen={order.isOpen.toString()}
                roi={order.roi}
                openedOn={order.openedOn}
                closedOn={order.closedOn}
                enterPrice={order.enterPrice}
                closePrice={order.closePrice}
              />
            ))}
            {ordersHistory.map(order => (
              <TransactionNotification 
                key={order.id}
                pareName={order.pareName}
                coinImage={order.coinImage}
                operation={order.operation}
                isOpen={order.isOpen.toString()}
                roi={order.roi}
                openedOn={order.openedOn}
                closedOn={order.closedOn}
                enterPrice={order.enterPrice}
                closePrice={order.closePrice}
              />
            ))}
          </>
        }
        
      </div>
    </div>
  );
} 