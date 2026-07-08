import React from 'react';
import { MapPin, Sparkles, Rocket, PlayCircle, Zap, SearchCheck, TrendingUp, Store } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-background min-h-[90vh] flex items-center map-layer-bg">
      {/* Map Layer Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dots Grid (Map connection lines representation) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="dotGrid" width="40" x="0" y="0">
              <circle cx="2" cy="2" fill="#d4e4fa" r="1.5"></circle>
            </pattern>
          </defs>
          <rect fill="url(#dotGrid)" height="100%" width="100%"></rect>
        </svg>
        
        {/* Glowing Map Pins & Connections */}
        <div className="absolute top-[20%] left-[10%] animate-pulse-pin" style={{ animationDelay: '0s' }}>
          <MapPin className="text-primary-container opacity-40" size={24} />
        </div>
        <div className="absolute top-[60%] left-[35%] animate-pulse-pin" style={{ animationDelay: '1s' }}>
          <Sparkles className="text-primary-container opacity-30" size={32} />
        </div>
        <div className="absolute top-[15%] right-[25%] animate-pulse-pin" style={{ animationDelay: '0.5s' }}>
          <MapPin className="text-primary-container opacity-50" size={20} />
        </div>
        <div className="absolute bottom-[20%] right-[15%] animate-pulse-pin" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="text-primary-container opacity-40" size={28} />
        </div>
      </div>

      <div className="mx-auto px-6 sm:px-10 w-full relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Typography & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="font-serif italic text-sm opacity-50 mb-6">
              Case Study #842 — Tokyo, 2024
            </div>
            
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.85] text-on-surface">
              DIGITAL<br />PRESENCE
            </h1>
            
            <div className="w-32 h-2 bg-primary mb-10"></div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mb-12">
              Criamos sites sofisticados com performance superior para quem exige o nível de agência sem a burocracia tradicional. Expanda seu alcance no mapa digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-opacity-90 transition-all font-bold">
                LANÇAR MEU SITE AGORA
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border border-outline font-label-caps text-label-caps hover:bg-surface transition-all text-on-surface">
                VER DEMONSTRAÇÃO
              </button>
            </div>
            
            {/* Social Proof Subtle */}
            <div className="mt-16 pt-8 border-t border-outline-variant/50 w-full max-w-lg">
              <div className="flex flex-wrap items-center gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface">
                  <Zap className="text-primary-container" size={20} />
                  99/100 Mobile Speed
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant hidden sm:block"></div>
                <div className="flex items-center gap-2 font-body-md text-body-md text-on-surface">
                  <SearchCheck className="text-primary-container" size={20} />
                  SEO Otimizado
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Complex Floating Mockups */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex flex-col justify-center gap-6">
            <div className="bg-surface border border-outline p-6 flex flex-col justify-between h-[240px]">
              <span className="font-label-caps text-label-caps">ACTIVE USERS</span>
              <span className="text-[64px] font-black tracking-tighter leading-none text-on-surface">18.4K</span>
              <div className="flex justify-between items-end font-label-caps text-[10px] opacity-60">
                <span>+12% vs last month</span>
                <span>Live Updates</span>
              </div>
            </div>
            <div className="bg-surface border border-outline p-6 flex flex-col justify-between h-[240px]">
              <span className="font-label-caps text-label-caps">SYSTEM LOAD</span>
              <span className="text-[64px] font-black tracking-tighter leading-none text-on-surface">0.02ms</span>
              <div className="flex justify-between items-end font-label-caps text-[10px] opacity-60">
                <span>Optimal performance</span>
                <span>Server: Tokyo-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
