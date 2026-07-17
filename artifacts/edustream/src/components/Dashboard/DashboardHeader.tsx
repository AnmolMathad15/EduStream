import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface DashboardHeaderProps {
  onSearch: () => void;
  onMenuOpen: () => void;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good Morning ☀️';
  if (h < 17) return 'Good Afternoon 👋';
  return 'Good Evening 🌙';
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function DashboardHeader({ onSearch, onMenuOpen }: DashboardHeaderProps) {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="dash-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Hamburger for mobile */}
        <button
          className="dash-header-btn"
          onClick={onMenuOpen}
          style={{ display: 'none' }}
          id="dash-menu-btn"
        >
          <Menu size={18} />
        </button>

        <div className="dash-header-left">
          <div className="dash-header-greeting">{getGreeting()}</div>
          <div className="dash-header-name">Welcome back, Alex Johnson</div>
        </div>
      </div>

      <div className="dash-header-right">
        {/* Search */}
        <button className="dash-search-btn" onClick={onSearch}>
          <Search size={14} />
          <span>Search courses…</span>
        </button>

        {/* Notifications */}
        <button className="dash-header-btn" title="Notifications">
          <Bell size={17} />
          <span className="dash-notif-dot" />
        </button>

        {/* Theme toggle */}
        <button className="dash-theme-btn" onClick={toggleTheme} title={dark ? 'Light mode' : 'Dark mode'}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Avatar */}
        <div className="dash-avatar" title="Profile">AJ</div>
      </div>

      {/* Inject mobile hamburger visibility via style */}
      <style>{`
        @media (max-width: 768px) {
          #dash-menu-btn { display: flex !important; }
          .dash-search-btn span { display: none; }
        }
      `}</style>
    </header>
  );
}
