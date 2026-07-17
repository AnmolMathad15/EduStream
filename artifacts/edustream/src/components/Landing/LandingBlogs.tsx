import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';

const BLOGS = [
  {
    tag: 'AI', tagBg: 'rgba(79,70,229,.12)', tagColor: '#4F46E5',
    title: 'How AI is Transforming Career Guidance in 2026',
    excerpt: 'Explore how AI-powered platforms are reshaping the way students plan and navigate their careers.',
    thumb: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Dr. Aisha Patel', date: 'Jul 12, 2026', read: '5 min',
  },
  {
    tag: 'Placements', tagBg: 'rgba(16,185,129,.12)', tagColor: '#10B981',
    title: 'Top 10 Companies Hiring in 2026 & What They Look For',
    excerpt: 'A comprehensive guide to the hiring trends and skills demanded by top recruiters this year.',
    thumb: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Rahul Sharma', date: 'Jul 10, 2026', read: '7 min',
  },
  {
    tag: 'Career Tips', tagBg: 'rgba(245,158,11,.12)', tagColor: '#F59E0B',
    title: 'How to Build a Resume That Gets Shortlisted Every Time',
    excerpt: 'Learn the proven framework for crafting resumes that pass ATS filters and impress recruiters.',
    thumb: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Sneha Reddy', date: 'Jul 8, 2026', read: '6 min',
  },
  {
    tag: 'Technology', tagBg: 'rgba(37,99,235,.12)', tagColor: '#2563EB',
    title: 'The Rise of Full-Stack Development: A 2026 Perspective',
    excerpt: 'Why full-stack developers are in high demand and how to become one in 6 months.',
    thumb: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Karan Mehta', date: 'Jul 5, 2026', read: '8 min',
  },
  {
    tag: 'Interview', tagBg: 'rgba(124,58,237,.12)', tagColor: '#7C3AED',
    title: 'Cracking the Google Interview: A Complete Guide',
    excerpt: 'Everything you need to know — from DSA prep to system design to behavioral rounds.',
    thumb: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Arjun Patel', date: 'Jul 2, 2026', read: '10 min',
  },
  {
    tag: 'Career Tips', tagBg: 'rgba(236,72,153,.12)', tagColor: '#EC4899',
    title: 'From Non-CS to Software Engineer: A Success Story',
    excerpt: 'How an electronics student transitioned to a software engineering role at a top tech company.',
    thumb: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
    author: 'Nina Rossi', date: 'Jun 28, 2026', read: '6 min',
  },
];

export default function LandingBlogs() {
  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Latest Blogs</div>
        <h2 className="landing-section-title">Insights to accelerate your career</h2>
        <p className="landing-section-desc">Expert articles on AI, placements, career tips, technology & interview experiences.</p>
      </div>
      <div className="landing-blog-grid">
        {BLOGS.map((b, i) => (
          <motion.div
            key={b.title}
            className="landing-blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="landing-blog-thumb">
              <img src={b.thumb} alt={b.title} />
            </div>
            <div className="landing-blog-body">
              <div className="landing-blog-tag" style={{ background: b.tagBg, color: b.tagColor }}>{b.tag}</div>
              <div className="landing-blog-title">{b.title}</div>
              <div className="landing-blog-excerpt">{b.excerpt}</div>
              <div className="landing-blog-meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><User size={12} /> {b.author}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Clock size={12} /> {b.date} • {b.read}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
