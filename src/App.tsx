import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modelos } from './components/Modelos';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-white text-on-background font-body antialiased">
      <Navbar />
      <Hero />
      <Modelos />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
