import React from 'react';
import { useToast } from '../../contexts/ToastContext';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

export function Header() {
  const { dark, toggleTheme } = useTheme();
  const { showToast } = useToast();

  return (
    <div className="topbar">
      <button
        className="top-btn"
        id="themeBtn"
        title="Toggle theme"
        aria-label="Toggle dark mode"
        onClick={() => {
          toggleTheme();
          showToast(!dark ? 'Dark mode on' : 'Light mode on');
        }}
      >
        {dark ? (
          <svg id="themeIcon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        ) : (
          <svg id="themeIcon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
          </svg>
        )}
      </button>
    </div>
  );
}
