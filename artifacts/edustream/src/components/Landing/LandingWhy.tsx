import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, UserCheck, Check } from 'lucide-react';

const CARDS = [
  {
    icon: <GraduationCap size={26} />,
    title: 'For Students',
    bg: 'rgba(37,99,235,.12)', color: '#2563EB',
    items: ['Learn in-demand skills', 'Practice coding & aptitude', 'Build resume with AI', 'Get hired by top companies'],
  },
  {
    icon: <Building2 size={26} />,
    title: 'For Colleges',
    bg: 'rgba(124,58,237,.12)', color: '#7C3AED',
    items: ['Manage student learning', 'Track placement progress', 'Analytics & insights', 'Connect with recruiters'],
  },
  {
    icon: <UserCheck size={26} />,
    title: 'For Recruiters',
    bg: 'rgba(16,185,129,.12)', color: '#10B981',
    items: ['Post jobs & internships', 'Screen candidates with AI', 'Access verified talent pool', 'Hire 3x faster'],
  },
];

export default function LandingWhy() {
  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Why EduStream</div>
        <h2 className="landing-section-title">Built for everyone in the career ecosystem</h2>
        <p className="landing-section-desc">Whether you're learning, teaching, or hiring — EduStream has a tailored experience for you.</p>
      </div>
      <div className="landing-why-grid">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            className="landing-why-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="landing-why-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</div>
            <div className="landing-why-title">{c.title}</div>
            <div className="landing-why-list">
              {c.items.map((item) => (
                <div key={item} className="landing-why-item">
                  <div className="landing-why-check"><Check size={13} /></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
