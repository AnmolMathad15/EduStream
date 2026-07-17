import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';
import logoImg from '@assets/ChatGPT_Image_Jul_15,_2026,_08_08_30_PM_1784267185333.png';

export function Header() {
  const { dark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = ['English', 'Español', 'Français', 'Deutsch', 'हिन्दी', 'العربية'];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangSelect = (lang: string) => {
    setCurrentLang(lang);
    setLangOpen(false);
    showToast(`Language changed to ${lang}`);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={logoImg} alt="EduStream Logo" className="header-logo" />
        <span className="header-brand">EduStream</span>
      </div>
      <div className="topbar-right">
        <div className="lang-selector" ref={langMenuRef}>
          <button className="top-btn" onClick={() => setLangOpen(!langOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>{currentLang}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`chevron ${langOpen ? 'open' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          {langOpen && (
            <div className="lang-menu open">
              {languages.map((lang) => (
                <button key={lang} className="lang-item" onClick={() => handleLangSelect(lang)}>
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="top-btn theme-btn" onClick={toggleTheme}>
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>
      </div>
    </header>
  );
}