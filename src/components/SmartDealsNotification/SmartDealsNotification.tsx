import './SmartDealsNotification.scss';
import { FC } from 'react';

interface SmartDealsNotificationProps {
  pair: string;
  side: 'LONG' | 'SHORT';
  status: 'Opened' | 'Closed';
  openTime: string;
  openPrice: string;
  closeTime?: string;
  closedPrice?: string;
  profitPercentage?: number;
  coinIcon?: string;
}

export const SmartDealsNotification: FC<SmartDealsNotificationProps> = ({
  pair,
  side,
  status,
  openTime,
  openPrice,
  closeTime,
  closedPrice,
  profitPercentage,
  coinIcon
}) => {
  const isOpen = status === 'Opened';
  
  return (
    <div className={`ai-crypto-w_deals-transaction ${isOpen ? 'ai-crypto-w_deals-transaction--open' : 'ai-crypto-w_deals-transaction--closed'}`}>
      <div className="ai-crypto-w_deals-transaction-header">
        <div className="ai-crypto-w_deals-transaction-pair">
          {coinIcon && <img className="ai-crypto-w_deals-transaction-icon" src={coinIcon} alt={pair.split('/')[0]} />}
          <span className="ai-crypto-w_deals-transaction-pair-text">{pair}</span>
          <div className={`ai-crypto-w_deals-transaction-side ai-crypto-w_deals-transaction-side--${side.toLowerCase()}`}>
            {side}
          </div>
        </div>
        
        <div className="ai-crypto-w_deals-transaction-details">
          <div className="ai-crypto-w_deals-transaction-status">
            {status}
          </div>
          {!isOpen && profitPercentage !== undefined && (
            <div className={`ai-crypto-w_deals-transaction-profit ${profitPercentage >= 0 ? 'ai-crypto-w_deals-transaction-profit--positive' : 'ai-crypto-w_deals-transaction-profit--negative'}`}>
              {profitPercentage >= 0 ? '+' : '-'}{profitPercentage}%
            </div>
          )}
        </div>
      </div>
      
      <div className="ai-crypto-w_deals-transaction-body">
        <div className="ai-crypto-w_deals-transaction-col">
          <div className="ai-crypto-w_deals-transaction-label">Open</div>
          <div className="ai-crypto-w_deals-transaction-value">{openTime}</div>
          
          {!isOpen && closeTime && (
            <>
              <div className="ai-crypto-w_deals-transaction-label">Close</div>
              <div className="ai-crypto-w_deals-transaction-value">{closeTime}</div>
            </>
          )}
        </div>
        
        <div className="ai-crypto-w_deals-transaction-col">
          <div className="ai-crypto-w_deals-transaction-label">Open Price</div>
          <div className="ai-crypto-w_deals-transaction-value">{openPrice} USDT</div>
          
          {!isOpen && closedPrice && (
            <>
              <div className="ai-crypto-w_deals-transaction-label">Closed Middle Price</div>
              <div className="ai-crypto-w_deals-transaction-value">{closedPrice} USDT</div>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default SmartDealsNotification; 