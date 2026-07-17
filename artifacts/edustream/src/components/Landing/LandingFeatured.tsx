import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    tag: 'Open Source',
    title: 'Google Summer of Code 2026',
    desc: 'Contribute to open-source projects with global organizations. Stipend up to $6,000.',
    bg: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
    img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Hiring Drive',
    title: 'Amazon SDE Hiring Drive',
    desc: 'Amazon is hiring Software Development Engineers. Package up to ₹28 LPA. Remote & on-site.',
    bg: 'linear-gradient(135deg, #2563EB, #4F46E5)',
    img: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Bootcamp',
    title: 'AI & ML Bootcamp 2026',
    desc: '6-week intensive bootcamp on AI, ML & deep learning. Industry mentors. Certificate included.',
    bg: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    tag: 'Hackathon',
    title: 'National Hackathon 2026',
    desc: '48-hour national hackathon. ₹5L prize pool. Build, innovate & win. Open to all students.',
    bg: 'linear-gradient(135deg, #F59E0B, #EC4899)',
    img: 'https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function LandingFeatured() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Featured This Week</div>
        <h2 className="landing-section-title">Don't miss these opportunities</h2>
      </div>
      <div className="landing-carousel">
        <div className="landing-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {SLIDES.map((s, i) => (
            <div className="landing-carousel-slide" key={i}>
              <div className="landing-carousel-slide-bg" style={{ background: s.bg }} />
              <img src={s.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, mixBlendMode: 'overlay' }} />
              <div className="landing-carousel-slide-content">
                <div className="landing-carousel-slide-tag">{s.tag}</div>
                <div className="landing-carousel-slide-title">{s.title}</div>
                <div className="landing-carousel-slide-desc">{s.desc}</div>
                <button className="landing-carousel-slide-btn">Learn More <ArrowRight size={15} /></button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prev} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(255,255,255,.25)', backdropFilter: 'blur(8px)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={20} /></button>
        <button onClick={next} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 2, background: 'rgba(255,255,255,.25)', backdropFilter: 'blur(8px)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={20} /></button>
      </div>
      <div className="landing-carousel-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`landing-carousel-dot${i === index ? ' active' : ''}`} onClick={() => setIndex(i)} />
        ))}
      </div>
    </section>
  );
}
