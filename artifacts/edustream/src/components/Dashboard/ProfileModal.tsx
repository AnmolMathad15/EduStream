import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
}

const DEFAULT_PROFILE: ProfileData = {
  name: 'Alex Johnson',
  email: 'alex.johnson@university.edu',
  phone: '+1 (555) 012-3456',
  department: 'Computer Science',
  year: '3rd Year',
};

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];

export default function ProfileModal({ open, onClose }: ProfileModalProps) {
  const [form, setForm] = useState<ProfileData>(DEFAULT_PROFILE);
  const [errors, setErrors] = useState<Partial<ProfileData>>({});
  const { showToast } = useToast();

  const validate = (): boolean => {
    const newErrors: Partial<ProfileData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.department.trim()) newErrors.department = 'Department is required';
    if (!form.year) newErrors.year = 'Year is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    showToast('✅ Profile updated successfully!');
    onClose();
  };

  const field = (
    key: keyof ProfileData,
    label: string,
    placeholder: string,
    type = 'text'
  ) => (
    <div className="dash-form-group">
      <label className="dash-form-label">{label}</label>
      <input
        className="dash-form-input"
        type={type}
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => {
          setForm({ ...form, [key]: e.target.value });
          if (errors[key]) setErrors({ ...errors, [key]: undefined });
        }}
        style={errors[key] ? { borderColor: '#ef4444' } : undefined}
      />
      {errors[key] && (
        <div style={{ fontSize: 12, color: '#ef4444', marginTop: 2 }}>{errors[key]}</div>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="dash-dialog-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="dash-dialog"
            style={{ width: 520 }}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-dialog-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'linear-gradient(135deg,#3b82f6,#7c3aed)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <User size={20} color="white" />
                </div>
                <div>
                  <div className="dash-dialog-title">Edit Profile</div>
                  <div className="dash-dialog-sub">Update your personal information</div>
                </div>
              </div>
              <button className="dash-dialog-close" onClick={onClose}><X size={15} /></button>
            </div>

            <div className="dash-dialog-body">
              {/* Avatar row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '4px 0 8px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 20, color: 'white',
                  outline: '3px solid rgba(59,130,246,.25)',
                }}>
                  AJ
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-dark)' }}>{form.name || 'Your Name'}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{form.department} · {form.year}</div>
                </div>
              </div>

              {field('name', 'Full Name', 'e.g. Alex Johnson')}

              <div className="dash-form-row">
                {field('email', 'Email Address', 'email@university.edu', 'email')}
                {field('phone', 'Phone Number', '+1 (555) 000-0000', 'tel')}
              </div>

              <div className="dash-form-row">
                {field('department', 'Department', 'e.g. Computer Science')}
                <div className="dash-form-group">
                  <label className="dash-form-label">Year of Study</label>
                  <select
                    className="dash-form-input"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    style={{ cursor: 'pointer' }}
                  >
                    {YEAR_OPTIONS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="dash-dialog-footer">
                <button className="dash-btn-secondary" onClick={onClose}>Cancel</button>
                <button className="dash-btn-primary" onClick={handleSave}>Save Profile</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
