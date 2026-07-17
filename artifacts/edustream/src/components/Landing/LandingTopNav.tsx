import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Menu, ChevronDown, User, Building2, UserCheck, Shield } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useToast } from '../../contexts/ToastContext';

interface LandingTopNavProps {
  onMenuOpen: () => void;
  onLogin: (role: string) => void;
}

const ROLES = [
  { id: 'student', name: 'Student', desc: 'Learn, practice & get hired', icon: <User size={18} />, color: '#4F46E5', bg: 'rgba(79,70,229,.12)' },
  { id: 'college', name: 'College', desc: 'Manage placements & students', icon: <Building2 size={18} />, color: '#2563EB', bg: 'rgba(37,99,235,.12)' },
  { id: 'recruiter', name: 'Recruiter', desc: 'Hire top talent at scale', icon: <UserCheck size={18} />, color: '#7C3AED', bg: 'rgba(124,58,237,.12)' },
  { id: 'admin', name: 'Admin', desc: 'Platform administration', icon: <Shield size={18} />, color: '#0F172A', bg: 'rgba(15,23,42,.08)' },
];

export default function LandingTopNav({ onMenuOpen, onLogin }: LandingTopNavProps) {
  const { dark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="landing-topnav">
      <div className="landing-topnav-left">
        <button className="landing-icon-btn landing-mobile-menu-btn" onClick={onMenuOpen} aria-label="Open menu">
          <Menu size={18} />
        </button>
        <div className="landing-topnav-brand">
          <div className="landing-topnav-brand-name">EduStream</div>
          <div className="landing-topnav-brand-tag">AI Career Platform</div>
        </div>
        <div className="landing-search">
          <Search size={15} color="var(--text-muted)" />
          <input placeholder="Search courses, jobs, hackathons…" aria-label="Global search" />
          <span className="landing-search-kbd">⌘K</span>
        </div>
      </div>

      <div className="landing-topnav-right">
        <button className="landing-icon-btn" onClick={toggleTheme} title={dark ? 'Light mode' : 'Dark mode'} aria-label="Toggle theme">
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
        <button className="landing-icon-btn" title="Notifications" aria-label="Notifications">
          <Bell size={17} />
          <span className="landing-notif-dot" />
        </button>

        <div ref={loginRef} style={{ position: 'relative' }}>
          <button className="landing-login-btn" onClick={() => setLoginOpen(v => !v)}>
            Log In <ChevronDown size={14} />
          </button>
          <AnimatePresence>
            {loginOpen && (
              <motion.div
                className="landing-login-dropdown"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <div className="landing-login-dropdown-header">
                  <div className="landing-login-dropdown-title">Continue as</div>
                  <div className="landing-login-dropdown-sub">Choose your role to sign in</div>
                </div>
                {ROLES.map((r) => (
                  <button key={r.id} className="landing-role-option" onClick={() => { onLogin(r.id); setLoginOpen(false); }}>
                    <div className="landing-role-icon" style={{ background: r.bg, color: r.color }}>{r.icon}</div>
                    <div>
                      <div className="landing-role-name">{r.name}</div>
                      <div className="landing-role-desc">{r.desc}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="landing-cta-btn" onClick={() => showToast('Starting free trial…')}>
          Get Started Free
        </button>
      </div>
    </header>
  );
}
