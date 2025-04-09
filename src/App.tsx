import { useState, useEffect } from 'react'
import './App.css'

interface CryptoCoin {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
}

function App() {
  const [coins, setCoins] = useState<CryptoCoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки данных о криптовалютах
    // В реальном приложении здесь будет запрос к API
    const mockData: CryptoCoin[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 63245.12, change24h: 2.34 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3076.71, change24h: -1.27 },
      { id: 'solana', name: 'Solana', symbol: 'SOL', price: 143.68, change24h: 5.82 },
      { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: -0.53 },
    ]
    
    setTimeout(() => {
      setCoins(mockData)
      setLoading(false)
    }, 800)
  }, [])

  return (
    <div className="crypto-widget 123">
      <h2>Crypto Market !!!!!!!</h2>
      
      {loading ? (
        <div className="loading">Loading crypto data...</div>
      ) : (
        <div className="coin-list">
          {coins.map(coin => (
            <div key={coin.id} className="coin-item">
              <div className="coin-info">
                <span className="coin-name">{coin.name}</span>
                <span className="coin-symbol">{coin.symbol}</span>
              </div>
              <div className="coin-price">
                <span>${coin.price.toLocaleString()}</span>
                <span className={`coin-change ${coin.change24h >= 0 ? 'positive' : 'negative'}`}>
                  {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="widget-footer">
        <p>Powered by Crypto Widget</p>
      </div>
    </div>
  )
}

export default App
