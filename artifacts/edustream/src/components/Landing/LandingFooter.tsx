import React from 'react';
import { Battery as Twitter, Link as Linkedin, GitFork as Github, Route as Youtube } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

const COLUMNS = [
  { title: 'Products', links: ['Courses', 'Practice', 'Jobs', 'AI Mentor'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers', 'Privacy', 'Terms'] },
  { title: 'For Colleges', links: ['Placement Solution', 'Analytics', 'Student Tracking'] },
  { title: 'For Recruiters', links: ['Hire Talent', 'Screen Candidates', 'Post Jobs'] },
  { title: 'Resources', links: ['Help Center', 'Documentation', 'Blog', 'Newsletter'] },
];

export default function LandingFooter() {
  const { showToast } = useToast();

  return (
    <footer className="landing-footer">
      <div className="landing-footer-inner">
        <div className="landing-footer-grid">
          <div>
            <div className="landing-footer-brand-mark">E</div>
            <div className="landing-footer-brand-name">EduStream</div>
            <div className="landing-footer-brand-desc">AI-powered Career Management Platform. Learn. Practice. Get Hired.</div>
            <div className="landing-footer-social">
              <button className="landing-footer-social-btn" aria-label="Twitter" onClick={() => showToast('Follow us on Twitter!')}><Twitter size={16} /></button>
              <button className="landing-footer-social-btn" aria-label="LinkedIn" onClick={() => showToast('Connect on LinkedIn!')}><Linkedin size={16} /></button>
              <button className="landing-footer-social-btn" aria-label="GitHub" onClick={() => showToast('Check our GitHub!')}><Github size={16} /></button>
              <button className="landing-footer-social-btn" aria-label="YouTube" onClick={() => showToast('Subscribe on YouTube!')}><Youtube size={16} /></button>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="landing-footer-col-title">{col.title}</div>
              {col.links.map((link) => (
                <button key={link} className="landing-footer-link" onClick={() => showToast(`Opening ${link}…`)}>{link}</button>
              ))}
            </div>
          ))}
        </div>
        <div className="landing-footer-bottom">
          <div className="landing-footer-copy">© 2026 EduStream. All rights reserved.</div>
          <div className="landing-footer-legal">
            <button onClick={() => showToast('Privacy Policy')}>Privacy</button>
            <button onClick={() => showToast('Terms of Service')}>Terms</button>
            <button onClick={() => showToast('Cookie Policy')}>Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
