import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, User, Building2, UserCheck, Shield } from 'lucide-react';

const ROLES = [
  { id: 'student', name: 'Student', icon: <User size={18} />, color: '#4F46E5', bg: 'rgba(79,70,229,.12)' },
  { id: 'college', name: 'College', icon: <Building2 size={18} />, color: '#2563EB', bg: 'rgba(37,99,235,.12)' },
  { id: 'recruiter', name: 'Recruiter', icon: <UserCheck size={18} />, color: '#7C3AED', bg: 'rgba(124,58,237,.12)' },
  { id: 'admin', name: 'Admin', icon: <Shield size={18} />, color: '#0F172A', bg: 'rgba(15,23,42,.08)' },
];

const STATS = [
  { num: '850K+', label: 'Students' },
  { num: '15K+', label: 'Colleges' },
  { num: '3000+', label: 'Hiring Partners' },
  { num: '25K+', label: 'Courses & Tests' },
];

interface LandingHeroProps {
  onLogin: (role: string) => void;
}

export default function LandingHero({ onLogin }: LandingHeroProps) {
  const [selectedRole, setSelectedRole] = useState('student');

  return (
    <section className="landing-hero">
      <div className="landing-hero-content">
        <motion.div
          className="landing-hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Sparkles size={13} /> AI-Powered Career Management Platform
        </motion.div>

        <motion.h1
          className="landing-hero-headline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Learn. <span className="landing-hero-grad">Practice.</span>{' '}
          <span className="landing-hero-grad">Get Hired.</span>
        </motion.h1>

        <motion.p
          className="landing-hero-desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          EduStream is an AI-powered Career Management Platform helping students learn in-demand skills, prepare for interviews, practice coding and land their dream job while enabling colleges and recruiters to discover talent.
        </motion.p>

        <motion.div
          className="landing-hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="landing-hero-primary" onClick={() => onLogin('student')}>
            Explore Platform <ArrowRight size={16} />
          </button>
          <button className="landing-hero-secondary">
            <Play size={14} /> Watch Demo
          </button>
        </motion.div>

        <motion.div
          className="landing-hero-stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="landing-hero-stat">
              <div className="landing-hero-stat-num">{s.num}</div>
              <div className="landing-hero-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="landing-hero-visual"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="landing-hero-orbit o1" />
        <div className="landing-hero-orbit o2" />
        <div className="landing-hero-orbit o3" />
        <div className="landing-hero-float-card f1">🎓</div>
        <div className="landing-hero-float-card f2">💻</div>
        <div className="landing-hero-float-card f3">🏆</div>
        <div className="landing-hero-float-card f4">💼</div>

        <motion.div
          className="landing-role-card"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="landing-role-card-header">
            <div className="landing-role-card-title">Continue as</div>
            <div className="landing-role-card-sub">Choose your role to sign in</div>
          </div>
          <div className="landing-role-grid">
            {ROLES.map((r) => (
              <button
                key={r.id}
                className={`landing-role-tile${selectedRole === r.id ? ' selected' : ''}`}
                onClick={() => setSelectedRole(r.id)}
              >
                <div className="landing-role-tile-icon" style={{ background: r.bg, color: r.color }}>{r.icon}</div>
                <div className="landing-role-tile-name">{r.name}</div>
              </button>
            ))}
          </div>
          <div className="landing-role-divider" />
          <button className="landing-role-continue" onClick={() => onLogin(selectedRole)}>
            Continue as {ROLES.find(r => r.id === selectedRole)?.name} <ArrowRight size={15} />
          </button>
          <div className="landing-role-trust">
            <div className="landing-role-trust-stars">★★★★★</div>
            <div className="landing-role-trust-text">Trusted by 850K+ students</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
