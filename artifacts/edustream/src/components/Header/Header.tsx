import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

export function Header() {
  const { dark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const langRef = useRef<HTMLDivElement>(null);

  const languages = ['English', 'हिन्दी', 'ಕನ್ನಡ', 'Español'];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLangSelect = (lang: string) => {
    setCurrentLang(lang);
    setLangOpen(false);
    showToast('Language set to ' + lang);
  };

  return (
    <div className="topbar">
      <div className="lang-selector" ref={langRef}>
        <button
          className="top-btn"
          id="langBtn"
          aria-haspopup="true"
          aria-expanded={langOpen}
          onClick={(e) => { e.stopPropagation(); setLangOpen(o => !o); }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>
          </svg>
          {currentLang}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <div className={`lang-menu${langOpen ? ' open' : ''}`} id="langMenu">
          {languages.map(lang => (
            <button key={lang} data-lang={lang} onClick={(e) => { e.stopPropagation(); handleLangSelect(lang); }}>
              {lang}
            </button>
          ))}
        </div>
      </div>

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
