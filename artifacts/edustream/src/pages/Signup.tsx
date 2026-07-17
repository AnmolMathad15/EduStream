import React from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { Testimonial } from '../components/Testimonial/Testimonial';
import { Stats } from '../components/Stats/Stats';
import { Footer } from '../components/Footer/Footer';
import { AuthCard } from '../components/Auth/AuthCard';

export default function Signup() {
  return (
    <div className="page">
      <Header />
      <div className="layout">
        <div className="left-panel">
          <Hero />
          <Features />
          <Stats />
          <Testimonial />
          <Footer />
        </div>
        <div className="right-panel">
          <AuthCard initialMode="signup" />
        </div>
      </div>
    </div>
  );
}