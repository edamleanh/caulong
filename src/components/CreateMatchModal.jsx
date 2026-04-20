import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Award } from 'lucide-react';

const CreateMatchModal = ({ onBack, onCreate, courts }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    courtId: null,
    level: 'Intermediate',
    time: '18:00 - 20:00',
    date: 'Hôm nay',
    organizer: 'Bạn',
    price: '50k/người',
    slots: '0/4'
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const removeAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  const handleLocationChange = (val) => {
    setFormData({ ...formData, location: val, courtId: null });
    if (val.length > 0) {
      const searchVal = removeAccents(val.toLowerCase());
      const filtered = courts.filter(c => {
        const nameNormalized = removeAccents(c.name.toLowerCase());
        const locNormalized = removeAccents(c.location.toLowerCase());
        return nameNormalized.includes(searchVal) || locNormalized.includes(searchVal);
      }).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (court) => {
    setFormData({ 
      ...formData, 
      location: court.name, 
      courtId: court.id,
      price: court.price.split('-')[0].trim() + '/người' // Auto-fill price
    });
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location) return;
    onCreate({ ...formData, id: Date.now(), slots: '1/4' });
  };

  return (
    <div className="booking-overlay active">
      {/* Header - Fixed */}
      <div className="booking-header" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <h2 style={{ margin: 0 }}>Tạo trận đấu mới</h2>
        <button onClick={onBack} className="icon-btn-transparent">
          <X size={24} color="white" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="screen-content" style={{ padding: '0 20px 20px', flex: 1, overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-20">
            <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Tên kèo đấu (VD: Giao lưu Quận 1)</label>
            <input 
              type="text" 
              className="search-input-wrapper" 
              style={{ width: '100%', background: 'var(--accent)', border: 'none', padding: '15px', color: 'white', borderRadius: '12px', fontSize: '1rem' }}
              placeholder="Nhập tiêu đề..."
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="mb-20" style={{ position: 'relative' }}>
            <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Địa điểm (VD: Sân Kỳ Hòa hoặc Quận 10)</label>
            <input 
              type="text" 
              className="search-input-wrapper" 
              style={{ width: '100%', background: 'var(--accent)', border: 'none', padding: '15px', color: 'white', borderRadius: '12px', fontSize: '1rem' }}
              placeholder="Nhập địa điểm..."
              value={formData.location}
              onChange={e => handleLocationChange(e.target.value)}
              onFocus={() => formData.location.length > 0 && setShowSuggestions(true)}
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="suggestion-dropdown glass-card">
                {suggestions.map(court => (
                  <div 
                    key={court.id} 
                    className="suggestion-item"
                    onClick={() => selectSuggestion(court)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <MapPin size={14} color="var(--primary)" />
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{court.name}</div>
                        <div className="muted" style={{ fontSize: '0.7rem' }}>{court.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-15" style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Ngày</label>
              <select 
                className="glass-card" 
                style={{ width: '100%', padding: '12px', background: 'var(--accent)', border: 'none', color: 'white' }}
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              >
                <option>Hôm nay</option>
                <option>Ngày mai</option>
                <option>Thứ 7</option>
                <option>Chủ nhật</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Giờ</label>
              <select 
                className="glass-card" 
                style={{ width: '100%', padding: '12px', background: 'var(--accent)', border: 'none', color: 'white' }}
                value={formData.time}
                onChange={e => setFormData({...formData, time: e.target.value})}
              >
                <option>17:00 - 19:00</option>
                <option>18:00 - 20:00</option>
                <option>19:00 - 21:00</option>
                <option>20:00 - 22:00</option>
              </select>
            </div>
          </div>

          <div className="mb-20">
            <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Trình độ mong muốn</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Beginner', 'Intermediate', 'Pro'].map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  className={`chip ${formData.level === lvl ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, level: lvl})}
                  style={{ flex: 1, padding: '10px' }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-20">
             <label className="muted" style={{ display: 'block', marginBottom: '8px' }}>Chi phí dự kiến</label>
             <input 
              type="text" 
              className="glass-card" 
              style={{ width: '100%', background: 'var(--accent)', border: 'none', padding: '15px', color: 'white' }}
              value={formData.price}
              onChange={e => setFormData({...formData, price: e.target.value})}
            />
          </div>

          <button type="submit" className="btn-primary mt-20" style={{ width: '100%', padding: '18px' }}>
            Đăng trận đấu
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMatchModal;
