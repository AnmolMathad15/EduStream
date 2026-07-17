import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X } from 'lucide-react';

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutDialog({ open, onClose, onConfirm }: LogoutDialogProps) {
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
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dash-dialog-header">
              <div>
                <div className="dash-dialog-title">Sign out?</div>
                <div className="dash-dialog-sub">You'll need to sign back in to continue learning.</div>
              </div>
              <button className="dash-dialog-close" onClick={onClose}><X size={15} /></button>
            </div>

            <div className="dash-dialog-body">
              <div className="dash-logout-icon">
                <LogOut size={24} />
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.6 }}>
                Are you sure you want to sign out of EduStream? Your progress is saved and you can continue where you left off anytime.
              </div>

              <div className="dash-dialog-footer">
                <button className="dash-btn-secondary" onClick={onClose}>Stay</button>
                <button className="dash-btn-danger" onClick={onConfirm}>Sign Out</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
