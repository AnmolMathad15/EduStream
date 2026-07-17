import React from 'react';
import './Testimonial.css';

export function Testimonial() {
  return (
    <div className="testimonial">
      <span className="quote-mark">&ldquo;</span>
      <p>EduStream made it easy to learn new skills, practice coding, and prepare for placements—all from a single platform.</p>
      <div className="stars">★★★★★</div>
      <div className="t-person">
        <div className="t-avatar">PS</div>
        <div>
          <div className="t-name">Priya Sharma</div>
          <div className="t-role">Computer Science Student</div>
        </div>
      </div>
    </div>
  );
}
