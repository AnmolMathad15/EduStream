import React from 'react';
import { motion } from 'framer-motion';
import { Hop as Home, BookOpen, GraduationCap, Award, Code as Code2, FileText, BrainCircuit, Database, MessageSquare, Briefcase, Trophy, Target, Users, Star, Newspaper, Building2, UserCheck, Info, Mail, LifeBuoy, ChevronLeft } from 'lucide-react';

export interface LandingNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}
export interface LandingNavGroup {
  label: string;
  items: LandingNavItem[];
}

const NAV_GROUPS: LandingNavGroup[] = [
  {
    label: 'Home',
    items: [{ id: 'home', label: 'Home', icon: <Home size={18} /> }],
  },
  {
    label: 'Learn',
    items: [
      { id: 'courses', label: 'Courses', icon: <BookOpen size={18} /> },
      { id: 'paths', label: 'Learning Paths', icon: <GraduationCap size={18} /> },
      { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
    ],
  },
  {
    label: 'Practice',
    items: [
      { id: 'coding', label: 'Coding Practice', icon: <Code2 size={18} /> },
      { id: 'mocktests', label: 'Mock Tests', icon: <FileText size={18} /> },
      { id: 'aptitude', label: 'Aptitude', icon: <BrainCircuit size={18} /> },
      { id: 'sql', label: 'SQL Practice', icon: <Database size={18} /> },
      { id: 'interview', label: 'Interview Questions', icon: <MessageSquare size={18} /> },
    ],
  },
  {
    label: 'Career',
    items: [
      { id: 'resume', label: 'Resume Builder', icon: <FileText size={18} /> },
      { id: 'roadmap', label: 'Career Roadmap', icon: <Target size={18} /> },
      { id: 'mentor', label: 'AI Mentor', icon: <BrainCircuit size={18} /> },
    ],
  },
  {
    label: 'Opportunities',
    items: [
      { id: 'internships', label: 'Internships', icon: <Briefcase size={18} /> },
      { id: 'jobs', label: 'Jobs', icon: <Briefcase size={18} /> },
      { id: 'hackathons', label: 'Hackathons', icon: <Trophy size={18} /> },
      { id: 'competitions', label: 'Competitions', icon: <Target size={18} /> },
    ],
  },
  {
    label: 'Community',
    items: [
      { id: 'mentorship', label: 'Mentorship', icon: <Users size={18} /> },
      { id: 'stories', label: 'Success Stories', icon: <Star size={18} /> },
      { id: 'blog', label: 'Blog', icon: <Newspaper size={18} /> },
    ],
  },
  {
    label: 'For Organizations',
    items: [
      { id: 'colleges', label: 'For Colleges', icon: <Building2 size={18} /> },
      { id: 'recruiters', label: 'For Recruiters', icon: <UserCheck size={18} /> },
    ],
  },
  {
    label: 'About',
    items: [
      { id: 'company', label: 'Company', icon: <Info size={18} /> },
      { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
      { id: 'support', label: 'Support', icon: <LifeBuoy size={18} /> },
    ],
  },
];

interface LandingSidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  active: string;
  onNav: (id: string) => void;
  onCollapse: () => void;
  onCloseMobile: () => void;
}

export default function LandingSidebar({
  collapsed, mobileOpen, active, onNav, onCollapse, onCloseMobile,
}: LandingSidebarProps) {
  return (
    <>
      <div
        className={`landing-sidebar-overlay${mobileOpen ? ' show' : ''}`}
        onClick={onCloseMobile}
      />
      <aside className={`landing-sidebar${collapsed ? ' collapsed' : ''}${mobileOpen ? ' mobileOpen' : ''}`}>
        <div className="landing-sidebar-brand">
          <div className="landing-sidebar-mark">E</div>
          <div className="landing-sidebar-brand-text">
            <div className="landing-sidebar-brand-name">EduStream</div>
            <div className="landing-sidebar-brand-tag">Learn • Practice • Get Hired</div>
          </div>
        </div>

        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="landing-nav-group">
            <div className="landing-nav-group-label">{group.label}</div>
            {group.items.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.97 }}
                className={`landing-nav-item${active === item.id ? ' active' : ''}`}
                onClick={() => onNav(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        ))}

        <button className="landing-sidebar-collapse" onClick={onCollapse}>
          <ChevronLeft size={18} style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: '.2s' }} />
          <span>{collapsed ? '' : 'Collapse'}</span>
        </button>
      </aside>
    </>
  );
}
