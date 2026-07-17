import React from 'react';
import { useToast } from '../../contexts/ToastContext';
import './Footer.css';

export function Footer() {
  const { showToast } = useToast();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showToast((e.currentTarget.textContent || '') + ' page');
  };

  return (
    <div className="foot-links">
      <span>© 2027 EduStream. All rights reserved.</span>
      <a href="#" id="privacyLink" onClick={handleLink}>Privacy Policy</a>
      <a href="#" id="termsLink" onClick={handleLink}>Terms of Service</a>
      <a href="#" id="supportLink" onClick={handleLink}>Support</a>
    </div>
  );
}
