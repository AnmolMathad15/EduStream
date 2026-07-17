import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = ['Google', 'Microsoft', 'Amazon', 'Infosys', 'Adobe', 'Deloitte', 'Accenture', 'TCS', 'Wipro', 'Capgemini'];

const STATS = [
  { num: '850K+', label: 'Students' },
  { num: '15K+', label: 'Institutions' },
  { num: '3000+', label: 'Recruiters' },
  { num: '25K+', label: 'Courses' },
  { num: '10M+', label: 'Assessments Completed' },
];

export default function LandingTrusted() {
  return (
    <section className="landing-section landing-trusted">
      <div className="landing-trusted-title">Trusted by industry leaders</div>
      <motion.div
        className="landing-trusted-logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {LOGOS.map((l) => (
          <div key={l} className="landing-trusted-logo">{l}</div>
        ))}
      </motion.div>
      <motion.div
        className="landing-platform-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {STATS.map((s) => (
          <div key={s.label} className="landing-platform-stat">
            <div className="landing-platform-stat-num">{s.num}</div>
            <div className="landing-platform-stat-label">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
