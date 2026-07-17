import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Trash2, X, Search } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface Course {
  id: number;
  emoji: string;
  emojiColor: string;
  name: string;
  desc: string;
  instructor: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
}

const INITIAL_COURSES: Course[] = [
  { id: 1, emoji: '☕', emojiColor: 'rgba(249,115,22,.15)', name: 'Java Full Stack Development', desc: 'Spring Boot · React · MySQL', instructor: 'Dr. Ravi Kumar', progress: 68, status: 'active' },
  { id: 2, emoji: '⚛️', emojiColor: 'rgba(59,130,246,.15)', name: 'React Masterclass', desc: 'Hooks · Redux · Testing', instructor: 'Sarah Mitchell', progress: 100, status: 'completed' },
  { id: 3, emoji: '🐍', emojiColor: 'rgba(34,197,94,.15)', name: 'Python for Data Science', desc: 'Pandas · NumPy · ML basics', instructor: 'Prof. Chen Wei', progress: 42, status: 'active' },
  { id: 4, emoji: '🛢️', emojiColor: 'rgba(139,92,246,.15)', name: 'Database Design & SQL', desc: 'PostgreSQL · Normalization', instructor: 'Mark Anderson', progress: 85, status: 'active' },
  { id: 5, emoji: '☁️', emojiColor: 'rgba(59,130,246,.1)', name: 'AWS Cloud Practitioner', desc: 'EC2 · S3 · Lambda · IAM', instructor: 'Priya Sharma', progress: 20, status: 'paused' },
  { id: 6, emoji: '🎨', emojiColor: 'rgba(236,72,153,.15)', name: 'CSS Mastery', desc: 'Flexbox · Grid · Animations', instructor: 'Emily Clarke', progress: 100, status: 'completed' },
];

interface EditModalProps {
  course: Course;
  onClose: () => void;
  onSave: (updated: Course) => void;
}

function EditModal({ course, onClose, onSave }: EditModalProps) {
  const [form, setForm] = useState({
    name: course.name,
    instructor: course.instructor,
    desc: course.desc,
  });

  const handleSave = () => {
    onSave({ ...course, name: form.name, instructor: form.instructor, desc: form.desc });
  };

  return (
    <motion.div
      className="dash-dialog-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="dash-dialog"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dash-dialog-header">
          <div>
            <div className="dash-dialog-title">Edit Course</div>
            <div className="dash-dialog-sub">Update the course details below</div>
          </div>
          <button className="dash-dialog-close" onClick={onClose}><X size={15} /></button>
        </div>

        <div className="dash-dialog-body">
          <div className="dash-form-group">
            <label className="dash-form-label">Course Name</label>
            <input
              className="dash-form-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="dash-form-row">
            <div className="dash-form-group">
              <label className="dash-form-label">Instructor</label>
              <input
                className="dash-form-input"
                value={form.instructor}
                onChange={(e) => setForm({ ...form, instructor: e.target.value })}
              />
            </div>
            <div className="dash-form-group">
              <label className="dash-form-label">Description</label>
              <input
                className="dash-form-input"
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
              />
            </div>
          </div>

          <div className="dash-dialog-footer">
            <button className="dash-btn-secondary" onClick={onClose}>Cancel</button>
            <button className="dash-btn-primary" onClick={handleSave}>Save Changes</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface DeleteDialogProps {
  course: Course;
  onClose: () => void;
  onConfirm: () => void;
}

function DeleteDialog({ course, onClose, onConfirm }: DeleteDialogProps) {
  return (
    <motion.div
      className="dash-dialog-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="dash-dialog"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dash-dialog-header">
          <div>
            <div className="dash-dialog-title">Delete Course?</div>
            <div className="dash-dialog-sub">This action cannot be undone.</div>
          </div>
          <button className="dash-dialog-close" onClick={onClose}><X size={15} /></button>
        </div>

        <div className="dash-dialog-body">
          <div className="dash-delete-icon-wrap">
            <Trash2 size={24} />
          </div>
          <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.6 }}>
            You are about to permanently delete <strong style={{ color: 'var(--text-dark)' }}>{course.name}</strong>.
            All your progress will be lost.
          </div>

          <div className="dash-dialog-footer">
            <button className="dash-btn-secondary" onClick={onClose}>Cancel</button>
            <button className="dash-btn-danger" onClick={onConfirm}>Delete Course</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface CoursesTableProps {
  searchQuery: string;
}

export default function CoursesTable({ searchQuery }: CoursesTableProps) {
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [editCourse, setEditCourse] = useState<Course | null>(null);
  const [deleteCourse, setDeleteCourse] = useState<Course | null>(null);
  const { showToast } = useToast();

  const filtered = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = (updated: Course) => {
    setCourses((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setEditCourse(null);
    showToast('✅ Course updated successfully!');
  };

  const handleDelete = () => {
    if (!deleteCourse) return;
    setCourses((prev) => prev.filter((c) => c.id !== deleteCourse.id));
    setDeleteCourse(null);
    showToast('🗑️ Course deleted.');
  };

  return (
    <>
      <div className="dash-section-card">
        <div className="dash-section-header">
          <span className="dash-section-title">My Courses</span>
          <button className="dash-section-link">Browse Courses</button>
        </div>

        <div className="dash-table-wrap">
          {filtered.length === 0 ? (
            <div className="dash-empty">
              <div className="dash-empty-icon">📚</div>
              <div className="dash-empty-title">No courses found</div>
              <div className="dash-empty-sub">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search.`
                  : "You haven't enrolled in any courses yet."}
              </div>
              <button className="dash-empty-btn">Browse Courses</button>
            </div>
          ) : (
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Instructor</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false}>
                  {filtered.map((course) => (
                    <motion.tr
                      key={course.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <td>
                        <div className="dash-course-cell">
                          <div className="dash-course-emoji" style={{ background: course.emojiColor }}>
                            {course.emoji}
                          </div>
                          <div>
                            <div className="dash-course-name">{course.name}</div>
                            <div className="dash-course-desc">{course.desc}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ color: 'var(--text-body)', fontSize: 13 }}>{course.instructor}</td>
                      <td>
                        <div className="dash-progress-cell">
                          <div className="dash-progress-mini">
                            <div
                              className="dash-progress-mini-fill"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="dash-progress-pct">{course.progress}%</span>
                        </div>
                      </td>
                      <td>
                        <span className={`dash-badge ${course.status}`}>
                          {course.status === 'active' && '● '}
                          {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="dash-table-actions">
                          <motion.button
                            className="dash-action-btn"
                            title="Edit"
                            onClick={() => setEditCourse(course)}
                            whileTap={{ scale: 0.92 }}
                          >
                            <Edit2 size={14} />
                          </motion.button>
                          <motion.button
                            className="dash-action-btn danger"
                            title="Delete"
                            onClick={() => setDeleteCourse(course)}
                            whileTap={{ scale: 0.92 }}
                          >
                            <Trash2 size={14} />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          )}
        </div>
      </div>

      <AnimatePresence>
        {editCourse && (
          <EditModal
            course={editCourse}
            onClose={() => setEditCourse(null)}
            onSave={handleSave}
          />
        )}
        {deleteCourse && (
          <DeleteDialog
            course={deleteCourse}
            onClose={() => setDeleteCourse(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </>
  );
}
