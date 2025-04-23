import './Whale.scss';

export default function Whale() {
  return (
    <div className="ai-crypto-w_whale">
      <h2>Whale Moves</h2>
      <h3>Real-time feed of high-volume trades and unusual market activity. These points often coincide with spikes in trading activity and market reversals.</h3>
      <div className="ai-crypto-w_whale-alert-container"> 
        {/* <p className="">Exchange: {alert.exchange} / {alert?.quote} Market</p> */}
        <div className="ai-crypto-w_whale-alert ai-crypto-w_whale-alert--buy ai-crypto-w_whale-alert--new">
          <p className="ai-crypto-w_whale-alert-token">Token: <b>BTC</b> - Unusual <b className="ai-crypto-w_whale-alert-token--buy">Buy</b> activity</p>
          <p className="ai-crypto-w_whale-alert-amount ai-crypto-w_whale-alert-amount--buy">Amount: <b>5,000,000</b> USDT</p>
          <p className="ai-crypto-w_whale-alert-deal-price">Deal Price: <b>49,999</b></p>
          {/* <p className="ai-crypto-w_whale-alert-last-alert">Last alert: 6 days ago (2/7D)</p> */}
        </div>
        
        <div className="ai-crypto-w_whale-alert ai-crypto-w_whale-alert--sell">
          <p className="ai-crypto-w_whale-alert-token">Token: <b>ETH</b> - Unusual <b className="ai-crypto-w_whale-alert-token--sell">Sell</b> activity</p>
          <p className="ai-crypto-w_whale-alert-amount ai-crypto-w_whale-alert-amount--sell">Amount: <b>175,000</b> USDT</p>
          <p className="ai-crypto-w_whale-alert-deal-price">Deal Price: <b>2,875</b></p>
          {/* <p className="ai-crypto-w_whale-alert-last-alert">Last alert: 2 days ago (1/7D)</p> */}
        </div>

        <div className="ai-crypto-w_whale-alert ai-crypto-w_whale-alert--buy ai-crypto-w_whale-alert--new">
          <p className="ai-crypto-w_whale-alert-token">Token: <b>BTC</b> - Unusual <b className="ai-crypto-w_whale-alert-token--buy">Buy</b> activity</p>
          <p className="ai-crypto-w_whale-alert-amount ai-crypto-w_whale-alert-amount--buy">Amount: <b>5,000,000</b> USDT</p>
          <p className="ai-crypto-w_whale-alert-deal-price">Deal Price: <b>49,999</b></p>
          {/* <p className="ai-crypto-w_whale-alert-last-alert">Last alert: 6 days ago (2/7D)</p> */}
        </div>
        
        <div className="ai-crypto-w_whale-alert ai-crypto-w_whale-alert--sell">
          <p className="ai-crypto-w_whale-alert-token">Token: <b>ETH</b> - Unusual <b className="ai-crypto-w_whale-alert-token--sell">Sell</b> activity</p>
          <p className="ai-crypto-w_whale-alert-amount ai-crypto-w_whale-alert-amount--sell">Amount: <b>175,000</b> USDT</p>
          <p className="ai-crypto-w_whale-alert-deal-price">Deal Price: <b>2,875</b></p>
          {/* <p className="ai-crypto-w_whale-alert-last-alert">Last alert: 2 days ago (1/7D)</p> */}
        </div>
      </div>
    </div>
  );
}
