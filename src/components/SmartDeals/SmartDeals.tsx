import './SmartDeals.scss';
import TransactionNotification from '../SmartDealsNotification/SmartDealsNotification';

// Тестовые данные
const SAMPLE_TRANSACTIONS = [
  {
    id: 1,
    pair: 'STRK/USDT',
    side: 'LONG' as const,
    status: 'Opened' as const,
    openTime: '2025-02-25 16:52:34',
    openPrice: '0.1954897',
    coinIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27429.png'
  },
  {
    id: 2,
    pair: 'PYTH/USDT',
    side: 'SHORT' as const,
    status: 'Closed' as const,
    openTime: '2025-02-25 16:52:34',
    openPrice: '0.1954897',
    closeTime: '2025-02-26 02:04:07',
    closedPrice: '0.2102719',
    profitPercentage: 2.47,
    coinIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png'
  },
  {
    id: 3,
    pair: 'PYTH/USDT',
    side: 'SHORT' as const,
    status: 'Closed' as const,
    openTime: '2025-02-25 16:52:34',
    openPrice: '0.1954897',
    closeTime: '2025-02-26 02:04:07',
    closedPrice: '0.2102719',
    profitPercentage: 2.47,
    coinIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png'
  }
];

export default function SmartDeals() {
  return (
    <div className="ai-crypto-w_smart-deals">
      <h2>Smart Deals</h2>
      <h3>We track wallets and traders with a high success rate and publish their trades in real time. Discover proven strategies and follow the smartest moves on the market.</h3>
      
      <div className="ai-crypto-w_smart-deals-container">
        {SAMPLE_TRANSACTIONS.map(transaction => (
          <TransactionNotification 
            key={transaction.id}
            pair={transaction.pair}
            side={transaction.side}
            status={transaction.status}
            openTime={transaction.openTime}
            openPrice={transaction.openPrice}
            closeTime={transaction.closeTime}
            closedPrice={transaction.closedPrice}
            profitPercentage={transaction.profitPercentage}
            coinIcon={transaction.coinIcon}
          />
        ))}
      </div>
    </div>
  );
} 