import React from 'react';

export function Navbar() {
  return (
    <nav className="docked full-width top-0 sticky z-50 glass-nav border-b border-outline shadow-sm">
      <div className="mx-auto px-6 sm:px-10 flex justify-between items-center h-24">
        <div className="flex items-center gap-4">
          <img 
            alt="sitefacil logo" 
            className="w-8 h-8 object-contain grayscale" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLu7G2YLyunZwO2R9l3FmTTRMQw-F8XzxPCgKVrzUYhdKknlX6XRJ0OultmGtT9jX93YcjaUqOuPEwp1ub0jKGXhL64EDPXSJFeze__9bg8wW-jVZXUOdL5ySqnh9JfKPLT8vhle00nrkg1z3p_oQ5nhVOoRdpGrhWbmar3BXkkuSW1WtLDu7tFhrFgiS1Q4nVPHHdyYeiXxbGo2XU8Jc546zyxbDaFaEzLe-z2ZwjosrNRlRBSBv22a2SA" 
          />
          <span className="font-display-lg text-2xl font-black uppercase tracking-tighter text-on-surface">SITEFACIL.STUDIO</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-caps text-label-caps hover:text-primary-container transition-colors" href="#solucoes">Soluções</a>
          <a className="font-label-caps text-label-caps hover:text-primary-container transition-colors" href="#funcionalidades">Funcionalidades</a>
          <a className="font-label-caps text-label-caps hover:text-primary-container transition-colors" href="#precos">Preços</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-label-caps text-label-caps px-6 py-2 rounded hover:bg-surface transition-all text-on-surface">LOGIN</button>
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 hover:bg-opacity-90 active:scale-95 transition-all duration-150">COMEÇAR AGORA</button>
        </div>
      </div>
    </nav>
  );
}
