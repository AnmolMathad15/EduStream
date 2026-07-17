import React from 'react';
import { useToast } from '../../contexts/ToastContext';
import './Testimonial.css';

export function Testimonial() {
  const { showToast } = useToast();

  return (
    <div className="testimonial">
      <div className="quote-mark">"</div>
      <div className="stars">★★★★★</div>
      <p>EduStream transformed my career completely. I went from a retail job to a software engineer role in just 6 months!</p>
      <div className="t-person">
        <div className="t-avatar">PR</div>
        <div>
          <div className="t-name">Priya Rajan</div>
          <div 
            className="t-role" 
            onClick={() => showToast('View Priya\'s success story')}
            style={{ cursor: 'pointer' }}
          >
            Software Engineer @ Google
          </div>
        </div>
      </div>
    </div>
  );
}