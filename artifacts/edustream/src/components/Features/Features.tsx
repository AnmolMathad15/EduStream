import React from 'react';
import './Features.css';

export function Features() {
  const features = [
    {
      id: 1,
      colorClass: 'blue',
      icon: '🎓',
      title: 'AI-Powered Personalization',
      desc: 'Adaptive learning paths tailored to your pace, goals, and skill gaps using advanced AI.'
    },
    {
      id: 2,
      colorClass: 'green',
      icon: '✅',
      title: 'Mock Interviews & Projects',
      desc: 'Practice with real interview questions and build portfolio-worthy projects.'
    },
    {
      id: 3,
      colorClass: 'purple',
      icon: '⚡',
      title: 'Live Mentorship Sessions',
      desc: 'Weekly live sessions with industry experts and dedicated 1:1 mentoring.'
    },
    {
      id: 4,
      colorClass: 'amber',
      icon: '🏆',
      title: 'Placement Guarantee',
      desc: 'Land your dream job with our dedicated career support and placement assistance.'
    }
  ];

  return (
    <div className="features">
      {features.map((f, i) => (
        <div className="feature" key={f.id} style={{ animationDelay: `${0.1 * i}s` }}>
          <div className={`icon ${f.colorClass}`}>
            {f.icon}
          </div>
          <div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}