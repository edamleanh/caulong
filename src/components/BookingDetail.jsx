import React, { useState } from 'react';
import { X, Clock, ChevronLeft, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';

const BookingDetail = ({ court, relatedMatches, onBack, onConfirm, onJoinMatch, joinedIds }) => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookingScale, setBookingScale] = useState(1); // To simulate "Loading"

  const slots = [
    { id: 1, time: '06:00', price: 80 },
    { id: 2, time: '07:00', price: 80 },
    { id: 3, time: '08:00', price: 80 },
    { id: 4, time: '17:00', price: 120, peak: true },
    { id: 5, time: '18:00', price: 120, peak: true },
    { id: 6, time: '19:00', price: 120, peak: true },
    { id: 7, time: '20:00', price: 120, peak: true },
    { id: 8, time: '21:00', price: 100 },
  ];

  const toggleSlot = (slot) => {
    if (selectedSlots.find(s => s.id === slot.id)) {
      setSelectedSlots(selectedSlots.filter(s => s.id !== slot.id));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const totalPrice = selectedSlots.reduce((sum, s) => sum + s.price, 0);

  const handleConfirm = () => {
    if (selectedSlots.length === 0) return;
    onConfirm(totalPrice, selectedSlots);
  };

  return (
    <div className="screen-content booking-overlay active" style={{ padding: 0 }}>
      {/* Header */}
      <div className="booking-header" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={onBack} className="icon-btn-transparent">
          <ChevronLeft size={24} color="white" />
        </button>
        <h2 style={{ margin: 0 }}>Đặt sân</h2>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        <div className="glass-card" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <img src={court.image} style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover' }} alt="court" />
          <div>
            <h3 style={{ margin: 0 }}>{court.name}</h3>
            <p className="muted" style={{ fontSize: '0.8rem' }}>{court.location}</p>
          </div>
        </div>

        <div className="section-title mt-20">
          <h3>Chọn ngày</h3>
        </div>
        <div className="calendar-strip">
          <div className="cal-day active"><span>CN</span><strong>19</strong></div>
          <div className="cal-day"><span>T2</span><strong>20</strong></div>
          <div className="cal-day"><span>T3</span><strong>21</strong></div>
          <div className="cal-day"><span>T4</span><strong>22</strong></div>
          <div className="cal-day"><span>T5</span><strong>23</strong></div>
        </div>

        <div className="section-title mt-20">
          <h3>Khung giờ trống</h3>
          <span className="muted">Peak hour = 120k</span>
        </div>

        <div className="time-grid">
          {slots.map(slot => (
            <div 
              key={slot.id} 
              className={`time-slot ${selectedSlots.find(s => s.id === slot.id) ? 'active' : ''} ${slot.peak ? 'peak' : ''}`}
              onClick={() => toggleSlot(slot)}
            >
              <strong>{slot.time}</strong>
              <span>{slot.price}k</span>
            </div>
          ))}
        </div>

        {relatedMatches && relatedMatches.length > 0 && (
          <>
            <div className="section-title mt-20">
              <h3>Kèo đấu tại sân này</h3>
            </div>
            <div className="related-matches-list" style={{ marginBottom: '80px' }}>
              {relatedMatches.map(match => (
                <div key={match.id} className="glass-card" style={{ marginBottom: '12px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ margin: 0 }}>{match.title}</h4>
                      <p className="muted" style={{ fontSize: '0.7rem', marginTop: '2px' }}>{match.time} • {match.level}</p>
                    </div>
                    <button 
                      className={`btn-primary ${joinedIds.includes(match.id) ? 'negative' : ''}`}
                      style={{ padding: '8px 15px', fontSize: '0.7rem', background: joinedIds.includes(match.id) ? '#ff4444' : 'var(--primary)', color: joinedIds.includes(match.id) ? 'white' : 'black' }}
                      onClick={() => onJoinMatch(match)}
                    >
                      {joinedIds.includes(match.id) ? 'Rút lui' : 'Tham gia'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer Checkout */}
      <div className="booking-footer">
        <div className="checkout-info">
          <div>
            <span className="muted">{selectedSlots.length} slot đã chọn</span>
            <div className="total-val">{totalPrice}k VND</div>
          </div>
          <button 
            className={`btn-primary ${selectedSlots.length === 0 ? 'disabled' : ''}`}
            onClick={handleConfirm}
            style={{ padding: '15px 30px' }}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
