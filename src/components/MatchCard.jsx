import React from 'react';
import { Calendar, Clock, User as UserIcon } from 'lucide-react';

const MatchCard = ({ match, onJoin, onSelect, isJoined }) => {
  return (
    <div className="glass-card match-card" onClick={() => onSelect && onSelect(match)}>
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
          <span>{isJoined ? 4 : match.slots.split('/')[0]} / {match.slots.split('/')[1]} chỗ</span>
        </div>
      </div>
      <div className="match-footer">
        <span className="price">{match.price}</span>
        <button 
          className={`btn-primary ${isJoined ? 'negative' : ''}`}
          onClick={(e) => { e.stopPropagation(); onJoin(match); }}
          style={{ background: isJoined ? '#ff4444' : 'var(--primary)', color: isJoined ? 'white' : 'black' }}
        >
          {isJoined ? 'Rút lui' : 'Tham gia'}
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
