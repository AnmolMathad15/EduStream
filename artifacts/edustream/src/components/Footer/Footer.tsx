import React from 'react';
import { useToast } from '../../contexts/ToastContext';
import './Footer.css';

export function Footer() {
  const { showToast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    showToast(`Opening ${label}`);
  };

  return (
    <div className="footer-wrap">
      <div className="foot-links">
        <a href="#" onClick={(e) => handleLinkClick(e, 'Privacy Policy')}>Privacy Policy</a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Terms of Service')}>Terms of Service</a>
        <a href="#" onClick={(e) => handleLinkClick(e, 'Help & Support')}>Help & Support</a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} EduStream. All rights reserved.
      </div>
    </div>
  );
}