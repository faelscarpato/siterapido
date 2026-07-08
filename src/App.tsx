import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen p-4 sm:p-10">
      <div className="max-w-[1440px] mx-auto border border-outline relative flex flex-col bg-surface-dim min-h-[calc(100vh-80px)] overflow-clip">
        <Navbar />
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Solutions />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
          <Features />
        </ScrollReveal>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
