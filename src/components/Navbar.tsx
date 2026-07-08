import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scroll Down
      } else {
        setIsVisible(true); // Scroll Up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`docked w-full sticky z-50 glass-nav border-b border-outline shadow-sm transition-all duration-300 ${isVisible ? 'top-0' : '-top-24'}`}>
      <div className="mx-auto px-6 sm:px-10 flex justify-between items-center h-24">
        <div className="flex items-center gap-4">
          <img 
            alt="sitefacil logo" 
            className="w-8 h-8 object-contain grayscale" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLu7G2YLyunZwO2R9l3FmTTRMQw-F8XzxPCgKVrzUYhdKknlX6XRJ0OultmGtT9jX93YcjaUqOuPEwp1ub0jKGXhL64EDPXSJFeze__9bg8wW-jVZXUOdL5ySqnh9JfKPLT8vhle00nrkg1z3p_oQ5nhVOoRdpGrhWbmar3BXkkuSW1WtLDu7tFhrFgiS1Q4nVPHHdyYeiXxbGo2XU8Jc546zyxbDaFaEzLe-z2ZwjosrNRlRBSBv22a2SA" 
          />
          <span className="font-display-lg text-2xl font-black uppercase tracking-tighter text-on-surface text-display-lg-mobile">SITEFACIL</span>
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <a className="font-label-caps text-label-caps hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2" href="#modelos">Modelos</a>
          <a className="font-label-caps text-label-caps hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2" href="#como-funciona">Como Funciona</a>
          <a className="font-label-caps text-label-caps hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2" href="#precos">Planos</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#modelos" className="bg-primary text-on-primary font-label-caps text-[10px] sm:text-label-caps px-4 py-2 sm:px-6 sm:py-3 hover:bg-opacity-90 active:scale-95 transition-all duration-150 font-bold border border-primary flex items-center justify-center text-center min-h-[48px]">VER MODELOS</a>
        </div>
      </div>
    </nav>
  );
}
