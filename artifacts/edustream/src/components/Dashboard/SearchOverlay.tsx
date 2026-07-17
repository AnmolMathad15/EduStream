import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, TrendingUp, Clock } from 'lucide-react';

interface SearchResult {
  type: 'course' | 'lesson' | 'recent';
  label: string;
  sub: string;
  icon: React.ReactNode;
}

const ALL_RESULTS: SearchResult[] = [
  { type: 'course', label: 'Java Full Stack Development', sub: 'Course · 68% complete', icon: '☕' },
  { type: 'course', label: 'React Masterclass', sub: 'Course · Completed', icon: '⚛️' },
  { type: 'course', label: 'Python for Data Science', sub: 'Course · 42% complete', icon: '🐍' },
  { type: 'course', label: 'Database Design & SQL', sub: 'Course · 85% complete', icon: '🛢️' },
  { type: 'course', label: 'AWS Cloud Practitioner', sub: 'Course · Paused', icon: '☁️' },
  { type: 'lesson', label: 'Spring Boot REST APIs', sub: 'Lesson · Java Full Stack', icon: '📝' },
  { type: 'lesson', label: 'React Hooks Deep Dive', sub: 'Lesson · React Masterclass', icon: '📝' },
  { type: 'lesson', label: 'SQL Joins & Subqueries', sub: 'Lesson · Database Design', icon: '📝' },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
  onSearch: (q: string) => void;
}

export default function SearchOverlay({ open, onClose, onSearch }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const results = query.trim()
    ? ALL_RESULTS.filter(
        (r) =>
          r.label.toLowerCase().includes(query.toLowerCase()) ||
          r.sub.toLowerCase().includes(query.toLowerCase())
      )
    : ALL_RESULTS.slice(0, 4);

  const handleSelect = (label: string) => {
    onSearch(label);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="dash-search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            className="dash-search-box"
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 360, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-search-input-row">
              <Search size={17} color="var(--text-muted)" />
              <input
                ref={inputRef}
                className="dash-search-input"
                placeholder="Search courses, lessons…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) {
                    onSearch(query.trim());
                    onClose();
                  }
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="dash-search-results">
              {!query && (
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', padding: '6px 12px 4px', letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  Suggestions
                </div>
              )}
              {results.length === 0 && (
                <div style={{ padding: '24px 12px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13.5 }}>
                  No results for "{query}"
                </div>
              )}
              {results.map((r, i) => (
                <div key={i} className="dash-search-result-item" onClick={() => handleSelect(r.label)}>
                  <span style={{ fontSize: 18 }}>{r.icon as string}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13.5 }}>{r.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '10px 18px', borderTop: '1px solid var(--border-soft)', fontSize: 11.5, color: 'var(--text-muted)', display: 'flex', gap: 16 }}>
              <span>↵ to search</span>
              <span>Esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
