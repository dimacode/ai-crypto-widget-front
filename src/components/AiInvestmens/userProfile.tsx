import { useState } from 'react';
import './userProfile.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, TooltipProps } from 'recharts';

// Icons
const DepositIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M12 5L19 12M12 5L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WithdrawIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19V5M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Type for chart data
type ChartDataPoint = {
  day: string;
  date: string;
  value: number;
  profit: string;
};

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as ChartDataPoint;
    return (
      <div className="ai-crypto-w__user-profile-chart-tooltip">
        <p className="ai-crypto-w__user-profile-chart-tooltip-value">{data.profit}</p>
        <p className="ai-crypto-w__user-profile-chart-tooltip-date">{data.date}</p>
      </div>
    );
  }

  return null;
};

// Icons for statistics cards
const TotalTradesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17L11 13L15 17L21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WinRateIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ROIIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DrawdownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProfitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function UserProfile() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  // Mock data
  const accountStats = {
    balance: '2,458.32 USDT',
    profit: '+325.12 USDT',
    invested: '2,133.20 USDT',
    totalTrades: '42',
    successfulTrades: '33',
    unsuccessfulTrades: '9',
    winRate: '78.6%',
    roi: '+15.2%',
    maxDrawdown: '-3.8%',
    maxProfit: '+5.7%'
  };

  // Daily performance data for the chart
  const chartData = [
    { day: '01', date: 'Oct 01', value: 2.1, profit: '+2.1%' },
    { day: '02', date: 'Oct 02', value: 1.8, profit: '+1.8%' },
    { day: '03', date: 'Oct 03', value: 2.4, profit: '+2.4%' },
    { day: '04', date: 'Oct 04', value: 2.0, profit: '+2.0%' },
    { day: '05', date: 'Oct 05', value: 2.6, profit: '+2.6%' },
    { day: '06', date: 'Oct 06', value: 3.2, profit: '+3.2%' },
    { day: '07', date: 'Oct 07', value: 2.8, profit: '+2.8%' },
    { day: '08', date: 'Oct 08', value: 1.5, profit: '+1.5%' },
    { day: '09', date: 'Oct 09', value: 2.2, profit: '+2.2%' },
    { day: '10', date: 'Oct 10', value: 2.5, profit: '+2.5%' },
    { day: '11', date: 'Oct 11', value: 3.5, profit: '+3.5%' },
    { day: '12', date: 'Oct 12', value: 3.8, profit: '+3.8%' },
    { day: '13', date: 'Oct 13', value: 4.1, profit: '+4.1%' },
    { day: '14', date: 'Oct 14', value: 4.5, profit: '+4.5%' },
  ];

  // Calculate average value for reference line
  const averageValue = chartData.reduce((sum, item) => sum + item.value, 0) / chartData.length;

  const handleDeposit = () => {
    // Handle deposit logic here
    setIsDepositModalOpen(false);
    setDepositAmount('');
  };

  const handleWithdraw = () => {
    // Handle withdraw logic here
    setIsWithdrawModalOpen(false);
    setWithdrawAmount('');
  };

  return (
    <div className="ai-crypto-w__user-profile">
      <div className="ai-crypto-w__user-profile-header">
        <h2>User Dashboard</h2>
      </div>

      {/* Balance section */}
      <div className="ai-crypto-w__user-profile-balance">
        <div className="ai-crypto-w__user-profile-balance-header">
          <h3>Current Balance</h3>
          <span className="ai-crypto-w__user-profile-balance-amount">{accountStats.balance}</span>
          <span className="ai-crypto-w__user-profile-balance-profit positive">
            {accountStats.profit} ({accountStats.roi})
          </span>
        </div>
        <div className="ai-crypto-w__user-profile-balance-info">
          <div className="ai-crypto-w__user-profile-balance-info-item">
            <span className="ai-crypto-w__user-profile-balance-info-label">Initial Investment</span>
            <span className="ai-crypto-w__user-profile-balance-info-value">{accountStats.invested}</span>
          </div>
          <div className="ai-crypto-w__user-profile-balance-info-item">
            <span className="ai-crypto-w__user-profile-balance-info-label">AI Status</span>
            <span className="ai-crypto-w__user-profile-balance-info-value active">Active Trading</span>
          </div>
        </div>
        <div className="ai-crypto-w__user-profile-balance-actions">
          <button onClick={() => setIsDepositModalOpen(true)} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-deposit">
            <DepositIcon /> Deposit
          </button>
          <button onClick={() => setIsWithdrawModalOpen(true)} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-withdraw">
            <WithdrawIcon /> Withdraw
          </button>
        </div>
      </div>

      {/* Content without tabs */}
      <div className="ai-crypto-w__user-profile-content">
        <div className="ai-crypto-w__user-profile-overview">
          <div className="ai-crypto-w__user-profile-statistics">
            <h3>Trading Statistics</h3>
            <div className="ai-crypto-w__user-profile-stats-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Metric</th>
                    <th>Value</th>
                    <th>7D Changes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-purple">
                        <TotalTradesIcon />
                      </div>
                    </td>
                    <td>Total Trades</td>
                    <td className="value-cell">{accountStats.totalTrades}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-green">
                        <SuccessIcon />
                      </div>
                    </td>
                    <td>Successful</td>
                    <td className="value-cell">{accountStats.successfulTrades}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-red">
                        <FailIcon />
                      </div>
                    </td>
                    <td>Unsuccessful</td>
                    <td className="value-cell">{accountStats.unsuccessfulTrades}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-yellow">
                        <WinRateIcon />
                      </div>
                    </td>
                    <td>Win Rate</td>
                    <td className="value-cell">{accountStats.winRate}</td>
                    <td className="change-cell">
                      <span className="change-badge positive">+2.3%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-blue">
                        <ROIIcon />
                      </div>
                    </td>
                    <td>ROI</td>
                    <td className="value-cell">{accountStats.roi}</td>
                    <td className="change-cell">
                      <span className="change-badge positive">+1.5%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-gray">
                        <DrawdownIcon />
                      </div>
                    </td>
                    <td>Max Drawdown</td>
                    <td className="value-cell">{accountStats.maxDrawdown}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="icon-cell">
                      <div className="stats-icon stats-icon-light-blue">
                        <ProfitIcon />
                      </div>
                    </td>
                    <td>Max Profit</td>
                    <td className="value-cell">{accountStats.maxProfit}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="ai-crypto-w__user-profile-performance">
            <h3>Daily Performance</h3>
            <div className="ai-crypto-w__user-profile-chart">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 'dataMax + 1']}
                  />
                  <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ stroke: '#9271f2', strokeWidth: 1, strokeDasharray: '5 5' }}
                  />
                  <ReferenceLine y={averageValue} stroke="#888" strokeDasharray="3 3" />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#9271f2" 
                    strokeWidth={2} 
                    dot={{ fill: '#9271f2', r: 4, strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 6, fill: '#9271f2', stroke: '#fff', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="ai-crypto-w__user-profile-chart-legend">
                <div className="ai-crypto-w__user-profile-chart-legend-item">
                  <div className="ai-crypto-w__user-profile-chart-legend-color"></div>
                  <span>Daily profit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="ai-crypto-w__user-profile-modal">
          <div className="ai-crypto-w__user-profile-modal-content">
            <div className="ai-crypto-w__user-profile-modal-header">
              <h3>Deposit Funds</h3>
              <button 
                className="ai-crypto-w__user-profile-modal-close" 
                onClick={() => setIsDepositModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <p>Enter the amount you want to deposit into your AI trading account.</p>
            <div className="ai-crypto-w__user-profile-modal-form">
              <label>
                Amount (USDT)
                <input 
                  type="number" 
                  value={depositAmount} 
                  onChange={(e) => setDepositAmount(e.target.value)} 
                  placeholder="Min. 100 USDT"
                  min="100"
                />
              </label>
              <div className="ai-crypto-w__user-profile-deposit-address">
                <p>Send USDT (TRC20) to this address:</p>
                <div className="ai-crypto-w__user-profile-address">TKMrL9hCCN1woQugDM2HX7Vhm2eVfcmgQC</div>
                <button className="ai-crypto-w__user-profile-copy-btn">Copy</button>
              </div>
            </div>
            <div className="ai-crypto-w__user-profile-modal-actions">
              <button onClick={handleDeposit} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-confirm">
                Confirm
              </button>
              <button onClick={() => setIsDepositModalOpen(false)} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="ai-crypto-w__user-profile-modal">
          <div className="ai-crypto-w__user-profile-modal-content">
            <div className="ai-crypto-w__user-profile-modal-header">
              <h3>Withdraw Funds</h3>
              <button 
                className="ai-crypto-w__user-profile-modal-close" 
                onClick={() => setIsWithdrawModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <p>Enter the amount you want to withdraw from your AI trading account.</p>
            <div className="ai-crypto-w__user-profile-modal-form">
              <label>
                Amount (USDT)
                <input 
                  type="number" 
                  value={withdrawAmount} 
                  onChange={(e) => setWithdrawAmount(e.target.value)} 
                  placeholder="Max. 2,458.32 USDT"
                  max="2458.32"
                />
              </label>
              <label>
                Wallet Address (USDT TRC20)
                <input type="text" placeholder="Enter your wallet address" />
              </label>
            </div>
            <div className="ai-crypto-w__user-profile-modal-actions">
              <button onClick={handleWithdraw} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-confirm">
                Withdraw
              </button>
              <button onClick={() => setIsWithdrawModalOpen(false)} className="ai-crypto-w__user-profile-btn ai-crypto-w__user-profile-btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
