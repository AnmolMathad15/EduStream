import React, { useState } from 'react';
import LandingSidebar from '../components/Landing/LandingSidebar';
import LandingTopNav from '../components/Landing/LandingTopNav';
import LandingHero from '../components/Landing/LandingHero';
import LandingExplore from '../components/Landing/LandingExplore';
import LandingFeatured from '../components/Landing/LandingFeatured';
import LandingCourses from '../components/Landing/LandingCourses';
import LandingPractice from '../components/Landing/LandingPractice';
import LandingOpportunities from '../components/Landing/LandingOpportunities';
import LandingAI from '../components/Landing/LandingAI';
import LandingWhy from '../components/Landing/LandingWhy';
import LandingTrusted from '../components/Landing/LandingTrusted';
import LandingStories from '../components/Landing/LandingStories';
import LandingBlogs from '../components/Landing/LandingBlogs';
import LandingFooter from '../components/Landing/LandingFooter';
import { useToast } from '../contexts/ToastContext';

export default function Landing() {
  const { showToast } = useToast();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleNav = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    showToast(`Navigating to ${id}…`);
  };

  const handleLogin = (role: string) => {
    showToast(`Signing in as ${role}…`);
  };

  return (
    <>
      <div className="bg-blob b1"></div>
      <div className="bg-blob b2"></div>
      <div className="bg-blob b3"></div>
      <div className="landing-shell">
        <LandingSidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          active={active}
          onNav={handleNav}
          onCollapse={() => setCollapsed((v) => !v)}
          onCloseMobile={() => setMobileOpen(false)}
        />
        <div className="landing-main">
          <LandingTopNav onMenuOpen={() => setMobileOpen(true)} onLogin={handleLogin} />
          <div className="landing-content">
            <LandingHero onLogin={handleLogin} />
            <LandingExplore />
            <LandingFeatured />
            <LandingCourses />
            <LandingPractice />
            <LandingOpportunities />
            <LandingAI />
            <LandingWhy />
            <LandingTrusted />
            <LandingStories />
            <LandingBlogs />
          </div>
          <LandingFooter />
        </div>
      </div>
    </>
  );
}
