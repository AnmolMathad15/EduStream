import React from 'react';
import './Features.css';

export function Features() {
  return (
    <div className="features">
      <div className="feature">
        <div className="icon blue">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/>
            <path d="M22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z"/>
          </svg>
        </div>
        <div>
          <h3>Smart Learning</h3>
          <p>Interactive courses, personalized learning paths, and real-time progress tracking.</p>
        </div>
      </div>

      <div className="feature">
        <div className="icon green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div>
          <h3>Practice &amp; Assessments</h3>
          <p>Coding challenges, mock tests, quizzes, and interview preparation in one place.</p>
        </div>
      </div>

      <div className="feature">
        <div className="icon purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        </div>
        <div>
          <h3>Placement Ready</h3>
          <p>Build skills, showcase achievements, and apply for internships and jobs with confidence.</p>
        </div>
      </div>

      <div className="feature">
        <div className="icon amber">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
          </svg>
        </div>
        <div>
          <h3>Trusted by Institutions</h3>
          <p>Designed for students, colleges, and recruiters with enterprise-grade security.</p>
        </div>
      </div>
    </div>
  );
}
