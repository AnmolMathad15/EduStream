import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, Bookmark, DollarSign } from 'lucide-react';

const TABS = [
  { id: 'jobs', label: 'Jobs', count: 1240 },
  { id: 'internships', label: 'Internships', count: 860 },
  { id: 'competitions', label: 'Competitions', count: 340 },
  { id: 'hackathons', label: 'Hackathons', count: 120 },
];

const DATA: Record<string, any[]> = {
  jobs: [
    { title: 'Software Engineer', company: 'Google', logo: 'G', color: '#4285F4', location: 'Bangalore', salary: '₹18-25 LPA', type: 'Hybrid', deadline: '5 days left' },
    { title: 'Data Analyst', company: 'Amazon', logo: 'A', color: '#FF9900', location: 'Remote', salary: '₹12-16 LPA', type: 'Remote', deadline: '3 days left' },
    { title: 'Frontend Developer', company: 'Microsoft', logo: 'M', color: '#00A4EF', location: 'Hyderabad', salary: '₹14-20 LPA', type: 'On-site', deadline: '7 days left' },
  ],
  internships: [
    { title: 'SDE Intern', company: 'Adobe', logo: 'Ad', color: '#FA0F00', location: 'Noida', salary: '₹40K/mo', type: 'On-site', deadline: '10 days left' },
    { title: 'ML Research Intern', company: 'Deloitte', logo: 'D', color: '#86BC25', location: 'Remote', salary: '₹35K/mo', type: 'Remote', deadline: '4 days left' },
    { title: 'Product Intern', company: 'Accenture', logo: 'Ac', color: '#A100FF', location: 'Mumbai', salary: '₹30K/mo', type: 'Hybrid', deadline: '8 days left' },
  ],
  competitions: [
    { title: 'National Coding Cup', company: 'TCS', logo: 'T', color: '#1E3A8A', location: 'Online', salary: '₹2L prize', type: 'Online', deadline: '12 days left' },
    { title: 'Case Study Challenge', company: 'Wipro', logo: 'W', color: '#341F53', location: 'Online', salary: '₹1L prize', type: 'Online', deadline: '6 days left' },
    { title: 'Data Science Derby', company: 'Capgemini', logo: 'C', color: '#0070AD', location: 'Pune', salary: '₹1.5L prize', type: 'Hybrid', deadline: '15 days left' },
  ],
  hackathons: [
    { title: 'Smart India Hackathon', company: 'Govt of India', logo: 'SI', color: '#FF9933', location: 'Nationwide', salary: '₹5L prize', type: 'Hybrid', deadline: '20 days left' },
    { title: 'AI for Good Hackathon', company: 'Microsoft', logo: 'M', color: '#00A4EF', location: 'Online', salary: '₹3L prize', type: 'Online', deadline: '9 days left' },
    { title: 'FinTech Hack', company: 'Infosys', logo: 'In', color: '#1E88E5', location: 'Bangalore', salary: '₹2L prize', type: 'On-site', deadline: '14 days left' },
  ],
};

export default function LandingOpportunities() {
  const [active, setActive] = useState('jobs');
  const items = DATA[active];

  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">Opportunities</div>
        <h2 className="landing-section-title">Find your next big break</h2>
        <p className="landing-section-desc">Jobs, internships, competitions & hackathons — all in one place. Updated daily.</p>
      </div>
      <div className="landing-opp-tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`landing-opp-tab${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label} <span className="count">{t.count}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="landing-opp-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="landing-opp-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="landing-opp-header">
                <div className="landing-opp-logo" style={{ background: item.color }}>{item.logo}</div>
                <div>
                  <div className="landing-opp-title">{item.title}</div>
                  <div className="landing-opp-company">{item.company}</div>
                </div>
              </div>
              <div className="landing-opp-meta">
                <div className="landing-opp-chip"><MapPin size={12} /> {item.location}</div>
                <div className="landing-opp-chip"><DollarSign size={12} /> {item.salary}</div>
                <div className="landing-opp-chip"><Briefcase size={12} /> {item.type}</div>
              </div>
              <div className="landing-opp-deadline"><Clock size={13} /> {item.deadline}</div>
              <div className="landing-opp-footer">
                <div className="landing-opp-actions">
                  <button className="landing-opp-bookmark" aria-label="Bookmark"><Bookmark size={15} /></button>
                  <button className="landing-opp-apply">Apply Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
