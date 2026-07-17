import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, ClipboardList, Calendar,
  TrendingUp, User, Settings, LogOut, ChevronLeft, ChevronRight,
  GraduationCap
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard',   label: 'Dashboard',   icon: <LayoutDashboard size={18} /> },
  { id: 'courses',     label: 'My Courses',  icon: <BookOpen size={18} /> },
  { id: 'assignments', label: 'Assignments', icon: <ClipboardList size={18} /> },
  { id: 'calendar',    label: 'Calendar',    icon: <Calendar size={18} /> },
  { id: 'progress',    label: 'Progress',    icon: <TrendingUp size={18} /> },
  { id: 'profile',     label: 'Profile',     icon: <User size={18} /> },
  { id: 'settings',    label: 'Settings',    icon: <Settings size={18} /> },
];

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  active: string;
  onNav: (id: string) => void;
  onCollapse: () => void;
  onCloseMobile: () => void;
  onLogout: () => void;
}

export default function Sidebar({
  collapsed, mobileOpen, active, onNav, onCollapse, onCloseMobile, onLogout
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="dash-sidebar-overlay" onClick={onCloseMobile} />
      )}

      <aside className={`dash-sidebar${collapsed ? ' collapsed' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
        {/* Logo */}
        <div className="dash-sidebar-logo">
          <div className="dash-sidebar-logo-icon">
            <GraduationCap size={20} color="white" />
          </div>
          <span className="dash-sidebar-logo-text">EduStream</span>
        </div>

        {/* Nav */}
        <nav className="dash-sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              className={`dash-nav-item${active === item.id ? ' active' : ''}`}
              onClick={() => { onNav(item.id); onCloseMobile(); }}
              whileTap={{ scale: 0.97 }}
              title={collapsed ? item.label : undefined}
            >
              <span className="dash-nav-item-icon">{item.icon}</span>
              <span className="dash-nav-item-label">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Footer */}
        <div className="dash-sidebar-footer">
          <motion.button
            className="dash-nav-item"
            onClick={onLogout}
            whileTap={{ scale: 0.97 }}
            title={collapsed ? 'Logout' : undefined}
            style={{ color: '#ef4444' }}
          >
            <span className="dash-nav-item-icon"><LogOut size={18} /></span>
            <span className="dash-nav-item-label">Logout</span>
          </motion.button>

          <button
            className="dash-collapse-btn"
            onClick={onCollapse}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <span className="dash-nav-item-icon">
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </span>
            <span className="dash-nav-item-label">Collapse</span>
          </button>
        </div>
      </aside>
    </>
  );
}
