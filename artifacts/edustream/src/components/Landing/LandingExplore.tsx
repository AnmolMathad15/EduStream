import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Code as Code2, ClipboardCheck, Briefcase, BrainCircuit } from 'lucide-react';

const CARDS = [
  { icon: <BookOpen size={22} />, title: 'Learn', desc: 'Master in-demand skills with 25K+ courses, learning paths & certificates.', bg: 'rgba(37,99,235,.12)', color: '#2563EB' },
  { icon: <Code2 size={22} />, title: 'Practice', desc: 'Sharpen your coding, SQL & aptitude with real-world challenges.', bg: 'rgba(124,58,237,.12)', color: '#7C3AED' },
  { icon: <ClipboardCheck size={22} />, title: 'Assess', desc: 'Take mock tests & assessments to benchmark your readiness.', bg: 'rgba(16,185,129,.12)', color: '#10B981' },
  { icon: <Briefcase size={22} />, title: 'Get Hired', desc: 'Apply to internships & jobs from 3000+ hiring partners.', bg: 'rgba(245,158,11,.12)', color: '#F59E0B' },
  { icon: <BrainCircuit size={22} />, title: 'AI Mentor', desc: 'Get personalized career guidance, resume reviews & roadmaps.', bg: 'rgba(236,72,153,.12)', color: '#EC4899' },
];

export default function LandingExplore() {
  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Explore EduStream</div>
        <h2 className="landing-section-title">Everything you need, in one platform</h2>
        <p className="landing-section-desc">From learning your first skill to landing your dream job — EduStream covers the entire career journey.</p>
      </div>
      <div className="landing-explore-grid">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            className="landing-explore-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="landing-explore-icon" style={{ background: c.bg, color: c.color }}>{c.icon}</div>
            <div className="landing-explore-title">{c.title}</div>
            <div className="landing-explore-desc">{c.desc}</div>
            <div className="landing-explore-cta">Explore <ArrowRight size={14} /></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
