import React from 'react';
import './Stats.css';

export function Stats() {
  return (
    <div className="stats">
      <div className="stat">
        <div className="dot" style={{ background: '#dbeafe' }}>🎓</div>
        <div><div className="num">250+</div><div className="lbl">Learners</div></div>
      </div>
      <div className="stat">
        <div className="dot" style={{ background: '#d1fae5' }}>🏛️</div>
        <div><div className="num">15+</div><div className="lbl">Institutions</div></div>
      </div>
      <div className="stat">
        <div className="dot" style={{ background: '#ede9fe' }}>▶️</div>
        <div><div className="num">120+</div><div className="lbl">Courses</div></div>
      </div>
      <div className="stat">
        <div className="dot" style={{ background: '#fef3c7' }}>⭐</div>
        <div><div className="num">95%</div><div className="lbl">Satisfaction</div></div>
      </div>
    </div>
  );
}
