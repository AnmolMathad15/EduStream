import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Star } from 'lucide-react';

export default function CourseSummary() {
  return (
    <motion.div
      className="dash-hero-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="dash-hero-label">Continue Learning</div>
        <div className="dash-hero-title">Java Full Stack Development</div>
        <div className="dash-hero-sub">Module 7 · Spring Boot REST APIs · 12 lessons remaining</div>

        <div className="dash-hero-progress-row">
          <div className="dash-hero-progress-bar">
            <motion.div
              className="dash-hero-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: '68%' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
          <span className="dash-hero-progress-pct">68%</span>
        </div>

        <motion.button
          className="dash-hero-btn"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Play size={15} />
          Resume Learning
        </motion.button>
      </div>

      <div className="dash-hero-right" style={{ position: 'relative', zIndex: 1 }}>
        <div className="dash-hero-badge">
          <div className="dash-hero-badge-num">24</div>
          <div className="dash-hero-badge-label">Lessons Done</div>
        </div>
        <div className="dash-hero-badge">
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
            <Clock size={14} color="rgba(255,255,255,.7)" />
            <span className="dash-hero-badge-num" style={{ fontSize: 20 }}>4.2h</span>
          </div>
          <div className="dash-hero-badge-label">This Week</div>
        </div>
        <div className="dash-hero-badge">
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
            <Star size={14} color="#f5a623" fill="#f5a623" />
            <span className="dash-hero-badge-num" style={{ fontSize: 20 }}>4.8</span>
          </div>
          <div className="dash-hero-badge-label">Course Rating</div>
        </div>
      </div>
    </motion.div>
  );
}
