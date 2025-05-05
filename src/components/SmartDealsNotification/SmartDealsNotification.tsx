import './SmartDealsNotification.scss';
import { FC } from 'react';

interface SmartDealsNotificationProps {
  pareName: string;
  coinImage: string;
  operation: string;
  isOpen: string;
  roi: string;
  openedOn: string;
  closedOn: string;
  enterPrice: string;
  closePrice: string;
}

export const SmartDealsNotification: FC<SmartDealsNotificationProps> = ({
  pareName,
  coinImage,
  operation,
  isOpen,
  roi,
  openedOn,
  closedOn,
  enterPrice,
  closePrice
}) => {
  const isOrderOpen = isOpen.toLowerCase() === 'true';
  
  return (
    <div className={`ai-crypto-w_deals-transaction ${isOrderOpen ? 'ai-crypto-w_deals-transaction--open' : 'ai-crypto-w_deals-transaction--closed'}`}>
      <div className="ai-crypto-w_deals-transaction-header">
        <div className="ai-crypto-w_deals-transaction-pair">
          {coinImage && <img className="ai-crypto-w_deals-transaction-icon" src={coinImage} alt="icon" />}
          <span className="ai-crypto-w_deals-transaction-pair-text">{pareName}</span>
          <div className={`ai-crypto-w_deals-transaction-side ai-crypto-w_deals-transaction-side--${operation.toLowerCase()}`}>
            {operation}
          </div>
        </div>
        
        <div className="ai-crypto-w_deals-transaction-details">
          <div className="ai-crypto-w_deals-transaction-status">
            {isOrderOpen ? 'Open' : 'Closed'}
          </div>
          {!isOrderOpen && (
            <div className={`ai-crypto-w_deals-transaction-profit ${roi[0] === '+' ? 'ai-crypto-w_deals-transaction-profit--positive' : 'ai-crypto-w_deals-transaction-profit--negative'}`}>
              {roi}
            </div>
          )}
        </div>
      </div>
      
      <div className="ai-crypto-w_deals-transaction-body">
        <div className="ai-crypto-w_deals-transaction-col">
          <div className="ai-crypto-w_deals-transaction-label">Open</div>
          <div className="ai-crypto-w_deals-transaction-value">{openedOn}</div>
          
          {!isOrderOpen && closedOn && (
            <>
              <div className="ai-crypto-w_deals-transaction-label">Close</div>
              <div className="ai-crypto-w_deals-transaction-value">{closedOn}</div>
            </>
          )}
        </div>
        
        <div className="ai-crypto-w_deals-transaction-col">
          <div className="ai-crypto-w_deals-transaction-label">Open Price</div>
          <div className="ai-crypto-w_deals-transaction-value">{enterPrice} USDT</div>
          
          {!isOrderOpen && (
            <>
              <div className="ai-crypto-w_deals-transaction-label">Closed Middle Price</div>
              <div className="ai-crypto-w_deals-transaction-value">{closePrice} USDT</div>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default SmartDealsNotification; 