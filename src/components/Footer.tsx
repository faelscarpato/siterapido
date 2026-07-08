import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-outline">
      <div className="mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface uppercase opacity-60">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>SISTEMA OPERACIONAL</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 font-label-caps text-label-caps text-on-surface uppercase opacity-40">
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2">INSTAGRAM</a>
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2">LINKEDIN</a>
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center px-2">TWITTER</a>
        </div>
        
        <div className="font-label-caps text-label-caps text-on-surface uppercase opacity-60">
          EST. 2024 — SITEFACIL.STUDIO
        </div>
      </div>
    </footer>
  );
}
