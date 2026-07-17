import React from 'react';
import './Hero.css';
import logoImg from '@assets/ChatGPT_Image_Jul_15,_2026,_08_08_30_PM_1784267185333.png';

export function Hero() {
  return (
    <div className="left">
      <div className="brand">
        <div className="brand-mark">
          <img src={logoImg} alt="EduStream Logo" />
        </div>
        <div>
          <div className="brand-name">EduStream</div>
          <div className="brand-tag">Learn • Practice • Get Hired</div>
        </div>
      </div>

      <span className="pill">🎓 Learn • Practice • Get Hired</span>

      <h1 className="headline">
        <span className="grad">Learn,</span><br />
        <span className="grad">Practice,</span><br />
        Get Hired.
        <span className="underline"></span>
      </h1>

      <p className="lede">From classrooms to careers, EduStream empowers students with courses, coding practice, assessments, and placement opportunities while enabling institutions and recruiters to collaborate on one modern platform.</p>
    </div>
  );
}
