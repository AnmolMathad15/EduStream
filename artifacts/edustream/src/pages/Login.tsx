import React from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { Testimonial } from '../components/Testimonial/Testimonial';
import { Stats } from '../components/Stats/Stats';
import { Footer } from '../components/Footer/Footer';
import { HeroImage } from '../components/HeroImage/HeroImage';
import { AuthCard } from '../components/Auth/AuthCard';

export default function Login() {
  return (
    <div className="page">
      <Header />
      <div className="layout">
        <div className="left">
          <Hero />
          <Features />
          <Testimonial />
          <Stats />
          <Footer />
        </div>
        <div className="stage">
          <HeroImage />
          <AuthCard initialMode="signin" />
        </div>
      </div>
    </div>
  );
}
