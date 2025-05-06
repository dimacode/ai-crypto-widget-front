import './Header.scss';

export default function Header({searchCoin, setSearchCoin}: {searchCoin: string, setSearchCoin: (searchCoin: string) => void}) {
  return (
    <div className="ai-crypto-w__header">
      <div className="ai-crypto-w__header-wrapper">
        <img src="https://cdn-icons-png.flaticon.com/512/5128/5128439.png" width={35} height={35} alt="coin" className="ai-crypto-w__header-img" />
        <input type="text" placeholder="Search coin" className="ai-crypto-w__header-input" value={searchCoin} onChange={(e) => setSearchCoin(e.target.value)} />
      </div>
    </div>
  );
}
