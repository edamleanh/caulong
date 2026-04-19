import React, { useState, useEffect } from 'react';
import './index.css';
import { Search, Trophy, Wallet, User as UserIcon, MapPin, Star, Calendar, Clock, CreditCard, ChevronRight, Plus, Menu, Crosshair, SlidersHorizontal, Map as MapIcon, CheckCircle } from 'lucide-react';
import { COURTS, MATCHES, USER_STATS, TRANSACTIONS } from './data/mockData';
import BookingDetail from './components/BookingDetail';
import { MatchHistory, Achievements, SettingsPage } from './components/ProfileSubScreens';

// Notification/Toast Component
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <CheckCircle color="#c3ff00" size={24} />
      <span>{message}</span>
    </div>
  );
};

const BottomNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'courts', icon: MapIcon, label: 'Khám phá' },
    { id: 'community', icon: UserIcon, label: 'Đối đầu' },
    { id: 'bookings', icon: Wallet, label: 'Ví nhóm' },
    { id: 'profile', icon: UserIcon, label: 'Hồ sơ' },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <tab.icon size={24} color={activeTab === tab.id ? '#c3ff00' : '#888888'} />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

const Courts = ({ onBookCourt }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDistrict, setFilterDistrict] = useState('ALL');
  const [selectedCourt, setSelectedCourt] = useState(COURTS[0]);

  const districts = ['ALL', 'QUẬN 1', 'BÌNH THẠNH', 'QUẬN 7', 'THỦ ĐỨC'];

  const normalize = (str) => {
    if (!str) return "";
    return str.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d");
  };

  const filteredCourts = COURTS.filter(court => {
    const matchesSearch = normalize(court.name).includes(normalize(searchQuery));
    const matchesDistrict = filterDistrict === 'ALL' || court.location.toUpperCase().includes(filterDistrict);
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="courts-screen">
      <div className="map-container">
        <div className="map-lines"></div>
        {filteredCourts.map(court => (
          <div 
            key={court.id} 
            className={`marker ${selectedCourt?.id === court.id ? 'active' : ''}`}
            style={{ left: `${court.x}%`, top: `${court.y}%` }}
            onClick={() => setSelectedCourt(court)}
          >
             <MapPin size={selectedCourt?.id === court.id ? 24 : 18} color="white" fill={selectedCourt?.id === court.id ? "black" : "transparent"} />
          </div>
        ))}
      </div>

      <div className="map-overlay">
        <div className="main-header">
          <Menu size={24} color="white" />
          <h1 className="neon-text">KINETIC COURT</h1>
          <div className="avatar-small">
             <img src="https://ui-avatars.com/api/?name=NV+A&background=random" alt="user" style={{ width: 32, borderRadius: '50%' }} />
          </div>
        </div>

        <div className="search-section">
          <div className="search-input-wrapper">
            <Search size={20} color="#888" />
            <input 
              type="text" 
              placeholder="Tìm sân quanh đây" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Crosshair size={20} color="#c3ff00" />
          </div>
          <button className="icon-btn-neon">
            <SlidersHorizontal size={24} />
          </button>
        </div>

        <div className="filter-chips-row">
          {districts.map(d => (
            <span 
              key={d} 
              className={`chip-filter ${filterDistrict === d ? 'active' : ''}`}
              onClick={() => setFilterDistrict(d)}
            >
              {d}
            </span>
          ))}
        </div>

        {selectedCourt && filteredCourts.includes(selectedCourt) && (
          <div className="floating-card-container">
            <div className="floating-court-card">
              <div className="img-container">
                <img src={selectedCourt.image} className="floating-img" alt="court" />
                <div className="badge-pop">PHỔ BIỂN</div>
                <div className="rating-overlay">
                   <Star size={12} fill="#c3ff00" color="#c3ff00" />
                   <span>{selectedCourt.rating} (120+)</span>
                </div>
              </div>
              <div className="court-details-row">
                <div className="court-title-row">
                  <div>
                    <h3 style={{ margin: 0 }}>{selectedCourt.name}</h3>
                    <p className="muted" style={{ fontSize: '0.7rem', margin: '4px 0 0' }}>{selectedCourt.location.toUpperCase()} • {selectedCourt.distance}</p>
                  </div>
                  <div className="court-price-col">
                    <div className="court-price-val">150k</div>
                    <div className="court-price-label">MỖI GIỜ</div>
                  </div>
                </div>
                <button className="btn-full-neon" onClick={() => onBookCourt(selectedCourt)}>ĐẶT SÂN NGAY</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="fab">
        <Plus size={32} />
      </button>
    </div>
  );
};

const Matchmaking = ({ onJoin }) => (
  <div className="screen-content">
    <h1 className="neon-text">Tìm đối thủ</h1>
    <div className="filter-chips">
      <span className="chip active">Hôm nay</span>
      <span className="chip">Ngày mai</span>
      <span className="chip">Tuần này</span>
    </div>

    {MATCHES.map(match => (
      <div key={match.id} className="glass-card match-card">
        <div className="match-header">
          <div>
            <h3>{match.title}</h3>
            <p className="muted">{match.organizer}</p>
          </div>
          <div className="level-badge">{match.level}</div>
        </div>
        <div className="match-details">
          <div className="detail-item">
            <Calendar size={16} color="#c3ff00" />
            <span>{match.date}</span>
          </div>
          <div className="detail-item">
            <Clock size={16} color="#c3ff00" />
            <span>{match.time}</span>
          </div>
          <div className="detail-item">
            <UserIcon size={16} color="#c3ff00" />
            <span>{match.slots} chỗtrống</span>
          </div>
        </div>
        <div className="match-footer">
          <span className="price">{match.price}</span>
          <button className="btn-primary" onClick={() => onJoin(match.title)}>Tham gia</button>
        </div>
      </div>
    ))}
  </div>
);

const GroupWallet = ({ balance, transactions, onDeposit }) => (
  <div className="screen-content">
    <h1 className="neon-text">Ví Nhóm</h1>
    
    <div className="glass-card balance-card neon-border">
      <p className="muted">Số dư hiện tại</p>
      <div className="balance-amount">{balance.toLocaleString()}đ</div>
      <div className="balance-actions">
        <button className="balance-btn" onClick={() => onDeposit(100000)}><Plus size={20} /> +100k</button>
        <button className="balance-btn" onClick={() => onDeposit(200000)}><Plus size={20} /> +200k</button>
      </div>
    </div>

    <div className="section-title">
      <h2>Lịch sử giao dịch</h2>
    </div>

    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {transactions.map(tx => (
        <div key={tx.id} className="tx-item">
          <div className="tx-icon">
            {tx.type === 'deposit' ? <Plus color="#c3ff00" /> : <CreditCard color="#ff4444" />}
          </div>
          <div className="tx-info">
            <h4>{tx.title}</h4>
            <p className="muted">{tx.date}</p>
          </div>
          <div className={`tx-amount ${tx.type === 'deposit' ? 'positive' : 'negative'}`}>
            {tx.amount}
          </div>
        </div>
      ))}
    </div>

    <div className="glass-card qr-card mt-20">
      <p className="textAlign-center">Mã QR nạp tiền nhanh</p>
      <div className="qr-placeholder">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=KineticCourtWallet" alt="QR Code" />
      </div>
      <p className="muted textAlign-center">Quét để nạp tiền vào quỹ nhóm</p>
    </div>
  </div>
);

const Profile = ({ onMenuClick }) => {
  const progressPercent = (USER_STATS.xp / USER_STATS.maxXp) * 100;

  return (
    <div className="screen-content">
      <div className="profile-header">
        <div className="avatar">
           <UserIcon size={40} color="#c3ff00" />
        </div>
        <h2>{USER_STATS.name}</h2>
        <p className="muted">{USER_STATS.level}</p>
      </div>

      <div className="glass-card xp-card">
        <div className="xp-header">
          <span>Level 12</span>
          <span className="muted">{USER_STATS.xp}/{USER_STATS.maxXp} XP</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className="muted mt-10">Còn 250 XP nữa để lên Level 13</p>
      </div>

      <div className="stats-grid">
        <div className="glass-card stat-box">
          <p className="muted">Hạng</p>
          <div className="stat-value neon-text">#{USER_STATS.rank}</div>
        </div>
        <div className="glass-card stat-box">
          <p className="muted">Tỉ lệ thắng</p>
          <div className="stat-value">67%</div>
        </div>
        <div className="glass-card stat-box">
          <p className="muted">Số trận</p>
          <div className="stat-value">{USER_STATS.matches}</div>
        </div>
      </div>

      <div className="menu-list">
        <div className="menu-item" onClick={() => onMenuClick('Lịch sử thi đấu')}>
          <span>Lịch sử đấu</span>
          <ChevronRight size={20} color="#888" />
        </div>
        <div className="menu-item" onClick={() => onMenuClick('Thành tích')}>
          <span>Thành tích</span>
          <ChevronRight size={20} color="#888" />
        </div>
        <div className="menu-item" onClick={() => onMenuClick('Cài đặt')}>
          <span>Cài đặt hồ sơ</span>
          <ChevronRight size={20} color="#888" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('courts');
  const [bookingCourt, setBookingCourt] = useState(null);
  const [profileSubScreen, setProfileSubScreen] = useState(null);
  const [balance, setBalance] = useState(450000);
  const [transactions, setTransactions] = useState(TRANSACTIONS);
  const [toast, setToast] = useState(null);

  const handleDeposit = (amount) => {
    setBalance(prev => prev + amount);
    const newTx = {
      id: Date.now(),
      title: 'Nạp tiền ví',
      amount: `+${amount.toLocaleString()}đ`,
      date: 'Vừa xong',
      type: 'deposit'
    };
    setTransactions([newTx, ...transactions]);
    setToast(`Đã nạp ${amount.toLocaleString()}đ vào ví!`);
  };

  const handleConfirmBooking = (totalPrice) => {
    const cost = totalPrice * 1000;
    if (balance < cost) {
      alert("Số dư không đủ! Vui lòng nạp thêm tiền.");
      return;
    }

    setBalance(prev => prev - cost);
    const newTx = {
      id: Date.now(),
      title: `Đặt sân tại ${bookingCourt.name}`,
      amount: `-${cost.toLocaleString()}đ`,
      date: 'Vừa xong',
      type: 'payment'
    };
    setTransactions([newTx, ...transactions]);
    setBookingCourt(null);
    setToast("Đặt sân thành công!");
  };

  const renderScreen = () => {
    if (bookingCourt) {
      return (
        <BookingDetail 
          court={bookingCourt} 
          onBack={() => setBookingCourt(null)} 
          onConfirm={handleConfirmBooking}
        />
      );
    }

    if (profileSubScreen === 'Lịch sử thi đấu') return <MatchHistory onBack={() => setProfileSubScreen(null)} />;
    if (profileSubScreen === 'Thành tích') return <Achievements onBack={() => setProfileSubScreen(null)} />;
    if (profileSubScreen === 'Cài đặt') return <SettingsPage onBack={() => setProfileSubScreen(null)} />;

    switch(activeTab) {
      case 'courts': return <Courts onBookCourt={setBookingCourt} />;
      case 'community': return <Matchmaking onJoin={(title) => setToast(`Đã tham gia: ${title}`)} />;
      case 'bookings': return <GroupWallet balance={balance} transactions={transactions} onDeposit={handleDeposit} />;
      case 'profile': return <Profile onMenuClick={setProfileSubScreen} />;
      default: return <Courts onBookCourt={setBookingCourt} />;
    }
  };

  return (
    <div className="app-container">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      {renderScreen()}
      {!bookingCourt && !profileSubScreen && <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}

export default App;
