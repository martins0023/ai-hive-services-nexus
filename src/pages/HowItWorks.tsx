
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksComponent from '@/components/HowItWorks';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HowItWorksComponent />
      <Footer />
    </div>
  );
};

export default HowItWorks;
