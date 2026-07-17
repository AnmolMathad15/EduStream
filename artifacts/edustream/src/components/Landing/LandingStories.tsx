import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const STORIES = [
  {
    name: 'Priya Sharma',
    role: 'B.Tech CSE, IIT Delhi',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    company: 'Google',
    package: '₹32 LPA',
    review: 'EduStream\'s AI mentor helped me identify my skill gaps and guided me through a personalized roadmap. The mock interviews were incredibly realistic and prepared me for the actual Google interview.',
  },
  {
    name: 'Arjun Patel',
    role: 'MCA, NIT Trichy',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    company: 'Amazon',
    package: '₹28 LPA',
    review: 'The coding practice section is unmatched. I solved over 500 problems and the daily challenges kept me consistent. Got placed at Amazon within 3 months of dedicated practice.',
  },
  {
    name: 'Sneha Reddy',
    role: 'B.E. ECE, BITS Pilani',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    company: 'Microsoft',
    package: '₹30 LPA',
    review: 'From learning full-stack development to cracking the Microsoft interview, EduStream was with me at every step. The resume builder made my profile stand out instantly.',
  },
  {
    name: 'Karan Mehta',
    role: 'B.Tech IT, VIT Vellore',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
    company: 'Adobe',
    package: '₹26 LPA',
    review: 'The hackathons on EduStream gave me real-world experience and helped me build a portfolio that impressed recruiters. The AI career guidance was the cherry on top.',
  },
];

export default function LandingStories() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'left' ? -380 : 380, behavior: 'smooth' });
  };

  return (
    <section className="landing-section landing-stories">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Student Success Stories</div>
        <h2 className="landing-section-title">Dreams turned into careers</h2>
        <p className="landing-section-desc">Join 850K+ students who transformed their careers with EduStream.</p>
      </div>
      <div style={{ position: 'relative' }}>
        <button onClick={() => scroll('left')} style={{ position: 'absolute', left: -8, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'var(--card-bg)', border: '1px solid var(--border-soft)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={20} /></button>
        <div className="landing-stories-track" ref={trackRef}>
          {STORIES.map((s, i) => (
            <motion.div
              key={s.name}
              className="landing-story-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="landing-story-header">
                <img src={s.avatar} alt={s.name} className="landing-story-avatar" />
                <div>
                  <div className="landing-story-name">{s.name}</div>
                  <div className="landing-story-role">{s.role}</div>
                </div>
              </div>
              <div className="landing-story-placed">Placed at {s.company}</div>
              <div className="landing-story-package">{s.package}</div>
              <div className="landing-story-review"><Quote size={14} style={{ color: 'var(--text-muted)', marginRight: 6, flexShrink: 0, marginTop: 3 }} />{s.review}</div>
            </motion.div>
          ))}
        </div>
        <button onClick={() => scroll('right')} style={{ position: 'absolute', right: -8, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'var(--card-bg)', border: '1px solid var(--border-soft)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: 'var(--text-body)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={20} /></button>
      </div>
    </section>
  );
}
