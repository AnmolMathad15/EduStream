import React from 'react';
import './Stats.css';

export function Stats() {
  const stats = [
    { icon: '🎓', bg: 'blue', value: '50,000+', label: 'Active Learners' },
    { icon: '📚', bg: 'purple', value: '200+', label: 'Expert Courses' },
    { icon: '💼', bg: 'green', value: '94%', label: 'Placement Rate' }
  ];

  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
          <div className={`dot ${s.bg}`}>{s.icon}</div>
          <div className="stat-content">
            <div className="num">{s.value}</div>
            <div className="label">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}