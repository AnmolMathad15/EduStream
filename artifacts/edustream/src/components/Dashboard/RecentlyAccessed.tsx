import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface RecentItem {
  emoji: string;
  emojiColor: string;
  lesson: string;
  course: string;
  time: string;
}

const RECENT: RecentItem[] = [
  { emoji: '☕', emojiColor: 'rgba(249,115,22,.15)', lesson: 'Spring Boot Basics', course: 'Java Full Stack', time: '2h ago' },
  { emoji: '⚛️', emojiColor: 'rgba(59,130,246,.15)', lesson: 'React Hooks Deep Dive', course: 'React Masterclass', time: '5h ago' },
  { emoji: '🐍', emojiColor: 'rgba(34,197,94,.15)', lesson: 'Data Structures', course: 'Python for Data Science', time: 'Yesterday' },
  { emoji: '🛢️', emojiColor: 'rgba(139,92,246,.15)', lesson: 'SQL Joins & Subqueries', course: 'Database Design', time: '2d ago' },
  { emoji: '🎨', emojiColor: 'rgba(236,72,153,.15)', lesson: 'Flexbox Layouts', course: 'CSS Mastery', time: '3d ago' },
];

export default function RecentlyAccessed() {
  return (
    <div className="dash-section-card">
      <div className="dash-section-header">
        <span className="dash-section-title">Recently Accessed</span>
        <button className="dash-section-link">View all</button>
      </div>

      <div>
        {RECENT.map((item, i) => (
          <motion.div
            key={i}
            className="dash-recent-item"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
          >
            <div className="dash-recent-icon" style={{ background: item.emojiColor }}>
              {item.emoji}
            </div>
            <div className="dash-recent-info">
              <div className="dash-recent-name">{item.lesson}</div>
              <div className="dash-recent-course">{item.course}</div>
            </div>
            <div className="dash-recent-time">{item.time}</div>
            <ChevronRight size={15} className="dash-recent-arrow" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
