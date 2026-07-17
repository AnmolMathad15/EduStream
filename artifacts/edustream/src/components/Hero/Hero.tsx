import React from 'react';
import './Hero.css';
import logoImg from '@assets/ChatGPT_Image_Jul_15,_2026,_08_08_30_PM_1784267185333.png';
import heroImg from '@assets/uihjvbn_1784267176327.png';

export function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero-content">
        <div className="brand-badge">
          <img src={logoImg} alt="EduStream Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">EduStream</span>
            <span className="brand-tag">AI-Powered Learning</span>
          </div>
        </div>
        
        <div className="pill">
          🚀 Trusted by 50,000+ learners worldwide
        </div>
        
        <h1>
          Unlock Your Future <br />
          <span className="highlight">
            With AI-Powered Learning
            <span className="underline"></span>
          </span>
        </h1>
        
        <p className="lede">
          Join thousands of students mastering tech skills with personalised AI-driven courses, mock interviews, and real-world projects.
        </p>
      </div>

      <div className="hero-visual">
        <div className="orbit o1"></div>
        <div className="orbit o2"></div>
        <div className="sparkle s1">✨</div>
        <div className="sparkle s2">🌟</div>
        <div className="sparkle s3">💡</div>
        <div className="sparkle s4">🎯</div>
        <img src={heroImg} alt="Student learning" className="floating-img" />
      </div>
    </div>
  );
}