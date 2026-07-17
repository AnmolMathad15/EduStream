import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

import '../components/Dashboard/Dashboard.css';

import Sidebar from '../components/Dashboard/Sidebar';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import CourseSummary from '../components/Dashboard/CourseSummary';
import StatsCards from '../components/Dashboard/StatsCards';
import RecentlyAccessed from '../components/Dashboard/RecentlyAccessed';
import CoursesTable from '../components/Dashboard/CoursesTable';
import SearchOverlay from '../components/Dashboard/SearchOverlay';
import LogoutDialog from '../components/Dashboard/LogoutDialog';
import ProfileModal from '../components/Dashboard/ProfileModal';
import DashboardSkeleton from '../components/Dashboard/DashboardSkeleton';

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  // Simulate a brief loading state (US37 – never show blank pages)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const handleNav = (id: string) => {
    if (id === 'profile') {
      setProfileOpen(true);
    } else {
      setActiveNav(id);
    }
  };

  const handleLogout = () => {
    setLogoutOpen(false);
    setLocation('/');
  };

  return (
    <div className="dash-shell">
      {/* Background blobs – same as auth pages */}
      <div className="bg-blob b1" />
      <div className="bg-blob b2" />
      <div className="bg-blob b3" />

      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        active={activeNav}
        onNav={handleNav}
        onCollapse={() => setCollapsed((v) => !v)}
        onCloseMobile={() => setMobileOpen(false)}
        onLogout={() => setLogoutOpen(true)}
      />

      <main className={`dash-main${collapsed ? ' sidebar-collapsed' : ''}`}>
        <DashboardHeader
          onSearch={() => setSearchOpen(true)}
          onMenuOpen={() => setMobileOpen(true)}
        />

        {loading ? (
          <DashboardSkeleton />
        ) : (
          <motion.div
            className="dash-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {/* US23 – Course summary hero */}
            <CourseSummary />

            {/* US28 – Stat cards */}
            <StatsCards />

            {/* US24 + US31 – Bottom two-column grid */}
            <div className="dash-bottom-grid">
              <RecentlyAccessed />
              <CoursesTable searchQuery={searchQuery} />
            </div>
          </motion.div>
        )}
      </main>

      {/* US39 – Search */}
      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={(q) => {
          setSearchQuery(q);
          setActiveNav('courses');
        }}
      />

      {/* US25 – Logout confirm */}
      <LogoutDialog
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleLogout}
      />

      {/* US33–34 – Profile update form */}
      <ProfileModal
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </div>
  );
}
