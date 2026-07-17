import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Flame, Award } from 'lucide-react';

interface StatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  desc: string;
}

const STATS: StatCard[] = [
  {
    label: 'Active Courses',
    value: '6',
    icon: <BookOpen size={20} />,
    iconBg: 'rgba(59,130,246,.15)',
    iconColor: '#3b82f6',
    desc: '2 starting this week',
  },
  {
    label: 'Completed',
    value: '14',
    icon: <CheckCircle size={20} />,
    iconBg: 'rgba(34,197,94,.15)',
    iconColor: '#22c55e',
    desc: '3 certificates earned',
  },
  {
    label: 'Learning Hours',
    value: '128h',
    icon: <Clock size={20} />,
    iconBg: 'rgba(139,92,246,.15)',
    iconColor: '#8b5cf6',
    desc: '4.2h this week',
  },
  {
    label: 'Current Streak',
    value: '12d',
    icon: <Flame size={20} />,
    iconBg: 'rgba(249,115,22,.15)',
    iconColor: '#f97316',
    desc: 'Personal best: 18 days',
  },
  {
    label: 'Certificates',
    value: '3',
    icon: <Award size={20} />,
    iconBg: 'rgba(245,166,35,.15)',
    iconColor: '#f5a623',
    desc: '1 pending completion',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function StatsCards() {
  return (
    <motion.div
      className="dash-stats-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {STATS.map((s) => (
        <motion.div key={s.label} className="dash-stat-card" variants={card}>
          <div
            className="dash-stat-icon"
            style={{ background: s.iconBg, color: s.iconColor }}
          >
            {s.icon}
          </div>
          <div>
            <div className="dash-stat-num">{s.value}</div>
            <div className="dash-stat-label">{s.label}</div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
