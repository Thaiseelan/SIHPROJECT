// src/LandingPage.js
import React from 'react';
// import ThreeBackground from "./ThreeBackground";
import Header from "./Header.tsx";
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-violet-100 text-gray-800 overflow-x-hidden">
      {/* Animated Background */}
      {/* <ThreeBackground /> */}

      {/* Header / Navbar */}
      <Header />

      {/* Hero / Intro Section */}
      <HeroSection onGetStarted={onGetStarted} />

      {/* Features Section */}
      <FeaturesSection onGetStarted={onGetStarted} />

      {/* How It Works Section */}
      <HowItWorksSection onGetStarted={onGetStarted} />

      {/* Testimonials Section */}
      <TestimonialsSection onGetStarted={onGetStarted} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
