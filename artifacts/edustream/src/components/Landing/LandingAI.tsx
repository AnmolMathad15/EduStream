import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Map, MessageSquare, ChartBar as BarChart3, CalendarDays, Sparkles, Send } from 'lucide-react';

const FEATURES = [
  { icon: <FileText size={16} />, text: 'Resume Review', bg: 'rgba(37,99,235,.12)', color: '#2563EB' },
  { icon: <Map size={16} />, text: 'Career Roadmap', bg: 'rgba(124,58,237,.12)', color: '#7C3AED' },
  { icon: <MessageSquare size={16} />, text: 'Mock Interview', bg: 'rgba(16,185,129,.12)', color: '#10B981' },
  { icon: <BarChart3 size={16} />, text: 'Skill Gap Analysis', bg: 'rgba(245,158,11,.12)', color: '#F59E0B' },
  { icon: <CalendarDays size={16} />, text: 'Study Planner', bg: 'rgba(236,72,153,.12)', color: '#EC4899' },
  { icon: <Sparkles size={16} />, text: 'AI Career Chat', bg: 'rgba(79,70,229,.12)', color: '#4F46E5' },
];

export default function LandingAI() {
  return (
    <section className="landing-section">
      <div className="landing-section-header">
        <div className="landing-section-eyebrow">AI Career Assistant</div>
        <h2 className="landing-section-title">Your personal AI career coach</h2>
        <p className="landing-section-desc">Get instant, personalized guidance for resume reviews, career roadmaps, mock interviews & more — powered by AI.</p>
      </div>
      <div className="landing-ai-section">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="landing-ai-features">
            {FEATURES.map((f) => (
              <div key={f.text} className="landing-ai-feature">
                <div className="landing-ai-feature-icon" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
                <div className="landing-ai-feature-text">{f.text}</div>
              </div>
            ))}
          </div>
          <button className="landing-ai-btn">Chat with AI <Send size={16} /></button>
        </motion.div>

        <motion.div
          className="landing-ai-chat"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="landing-ai-chat-header">
            <div className="landing-ai-chat-avatar"><Sparkles size={20} /></div>
            <div>
              <div className="landing-ai-chat-name">EduStream AI</div>
              <div className="landing-ai-chat-status">● Online now</div>
            </div>
          </div>
          <div className="landing-ai-chat-msg bot">
            Hi! I'm your AI career coach. I can help you review your resume, plan your career, practice interviews, and find the right opportunities. What would you like to work on today?
          </div>
          <div className="landing-ai-chat-msg user">Can you review my resume for a software engineer role?</div>
          <div className="landing-ai-chat-msg bot">
            Sure! Upload your resume and I'll analyze it for: keyword optimization, ATS compatibility, impact statements, and skill gaps. I'll also suggest improvements tailored to roles you're targeting.
          </div>
          <div className="landing-ai-chat-input">
            <input placeholder="Ask me anything about your career…" />
            <button className="landing-ai-chat-send"><Send size={15} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
