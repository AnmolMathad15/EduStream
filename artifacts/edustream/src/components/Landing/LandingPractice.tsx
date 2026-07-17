import React from 'react';
import { motion } from 'framer-motion';
import { Code as Code2, FileText, BrainCircuit, Database, MessageSquare, Flame } from 'lucide-react';

const CARDS = [
  { icon: <Code2 size={20} />, title: 'Coding Problems', count: '2,500+ problems', desc: 'Practice DSA, algorithms & competitive programming.', progress: 65, bg: 'rgba(37,99,235,.12)', color: '#2563EB' },
  { icon: <FileText size={20} />, title: 'Company Mock Tests', count: '500+ tests', desc: 'Simulate real hiring tests from top companies.', progress: 40, bg: 'rgba(124,58,237,.12)', color: '#7C3AED' },
  { icon: <BrainCircuit size={20} />, title: 'Aptitude Practice', count: '1,200+ questions', desc: 'Quant, logical reasoning & verbal ability.', progress: 78, bg: 'rgba(16,185,129,.12)', color: '#10B981' },
  { icon: <Database size={20} />, title: 'SQL Challenges', count: '300+ challenges', desc: 'Master SQL with real database scenarios.', progress: 52, bg: 'rgba(245,158,11,.12)', color: '#F59E0B' },
  { icon: <MessageSquare size={20} />, title: 'Interview Questions', count: '800+ questions', desc: 'Curated questions from real interviews.', progress: 30, bg: 'rgba(236,72,153,.12)', color: '#EC4899' },
  { icon: <Flame size={20} />, title: 'Daily Challenge', count: 'Today\'s challenge', desc: 'A new problem every day. Keep your streak alive!', progress: 85, bg: 'rgba(239,68,68,.12)', color: '#EF4444' },
];

export default function LandingPractice() {
  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Practice Hub</div>
        <h2 className="landing-section-title">Practice makes you job-ready</h2>
        <p className="landing-section-desc">Sharpen your skills with curated practice tracks across coding, aptitude, SQL & interviews.</p>
      </div>
      <div className="landing-practice-grid">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            className="landing-practice-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="landing-practice-header">
              <div className="landing-practice-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</div>
              <div>
                <div className="landing-practice-title">{c.title}</div>
                <div className="landing-practice-count">{c.count}</div>
              </div>
            </div>
            <div className="landing-practice-desc">{c.desc}</div>
            <div className="landing-practice-progress">
              <div className="landing-practice-progress-bar" style={{ width: `${c.progress}%` }} />
            </div>
            <div className="landing-practice-progress-text">
              <span>Progress</span>
              <span>{c.progress}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
