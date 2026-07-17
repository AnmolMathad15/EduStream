import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, Users } from 'lucide-react';

const CATEGORIES = ['AI', 'Web Development', 'Java', 'Python', 'Cloud', 'Cybersecurity', 'Data Science', 'UI UX'];

const COURSES = [
  { name: 'Complete AI & ML Bootcamp', instructor: 'Dr. Aisha Patel', rating: 4.9, students: '42K', difficulty: 'Intermediate', duration: '32h', lessons: 180, price: '₹2,499', cat: 'AI', thumb: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#4F46E5' },
  { name: 'Full-Stack Web Development', instructor: 'Rahul Sharma', rating: 4.8, students: '68K', difficulty: 'Beginner', duration: '45h', lessons: 220, price: '₹1,999', cat: 'Web Development', thumb: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#2563EB' },
  { name: 'Java Programming Mastery', instructor: 'Prof. Chen Wei', rating: 4.7, students: '35K', difficulty: 'All Levels', duration: '28h', lessons: 150, price: 'Free', cat: 'Java', thumb: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#7C3AED' },
  { name: 'Python for Data Science', instructor: 'Maria Garcia', rating: 4.9, students: '55K', difficulty: 'Intermediate', duration: '36h', lessons: 195, price: '₹1,799', cat: 'Python', thumb: 'https://images.pexels.com/photos/577582/pexels-photo-577582.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#10B981' },
  { name: 'AWS Cloud Fundamentals', instructor: 'James Okoro', rating: 4.8, students: '28K', difficulty: 'Beginner', duration: '22h', lessons: 120, price: '₹2,299', cat: 'Cloud', thumb: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#F59E0B' },
  { name: 'Ethical Hacking & Security', instructor: 'Sara Khan', rating: 4.7, students: '31K', difficulty: 'Advanced', duration: '40h', lessons: 210, price: '₹2,999', cat: 'Cybersecurity', thumb: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#EF4444' },
  { name: 'Data Science Specialization', instructor: 'Dr. Liam Murphy', rating: 4.9, students: '48K', difficulty: 'Intermediate', duration: '38h', lessons: 200, price: '₹2,799', cat: 'Data Science', thumb: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#0F172A' },
  { name: 'UI/UX Design Principles', instructor: 'Nina Rossi', rating: 4.8, students: '39K', difficulty: 'Beginner', duration: '24h', lessons: 130, price: '₹1,499', cat: 'UI UX', thumb: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400', color: '#EC4899' },
];

export default function LandingCourses() {
  const [active, setActive] = useState('AI');
  const filtered = COURSES.filter((c) => c.cat === active);

  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Popular Courses</div>
        <h2 className="landing-section-title">Learn from the best instructors</h2>
        <p className="landing-section-desc">Hand-picked courses designed to make you job-ready, taught by industry experts.</p>
      </div>
      <div className="landing-course-tabs">
        {CATEGORIES.map((cat) => (
          <button key={cat} className={`landing-course-tab${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>{cat}</button>
        ))}
      </div>
      <div className="landing-course-grid">
        {filtered.map((c, i) => (
          <motion.div
            key={c.name}
            className="landing-course-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="landing-course-thumb">
              <img src={c.thumb} alt={c.name} />
              <div className="landing-course-difficulty" style={{ color: c.color }}>{c.difficulty}</div>
            </div>
            <div className="landing-course-body">
              <div className="landing-course-name">{c.name}</div>
              <div className="landing-course-instructor">by {c.instructor}</div>
              <div className="landing-course-meta">
                <div className="landing-course-rating"><Star size={13} className="star" fill="currentColor" /> {c.rating}</div>
                <div><Users size={13} /> {c.students}</div>
                <div><Clock size={13} /> {c.duration}</div>
                <div><BookOpen size={13} /> {c.lessons} lessons</div>
              </div>
              <div className="landing-course-footer">
                <div className="landing-course-price">
                  {c.price === 'Free' ? <span className="free">Free</span> : c.price}
                </div>
                <div className="landing-course-actions">
                  <button className="landing-course-btn preview">Preview</button>
                  <button className="landing-course-btn enroll">Enroll</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
