import React from 'react';
import './HeroImage.css';
import heroImg from '@assets/uihjvbn_1784267176327.png';

export function HeroImage() {
  return (
    <div className="hero-wrap">
      <div className="orbit o1"></div>
      <div className="orbit o2"></div>
      <span className="sparkle s1">✨</span>
      <span className="sparkle s2">🌟</span>
      <span className="sparkle s3">💡</span>
      <span className="sparkle s4">🎯</span>
      <img src={heroImg} alt="Student learning with EduStream" />
    </div>
  );
}
