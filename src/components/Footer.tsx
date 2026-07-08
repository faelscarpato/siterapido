import React from 'react';

export function Footer() {
  return (
    <footer className="full-width bg-background border-t border-outline">
      <div className="mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface uppercase opacity-60">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>SISTEMA OPERACIONAL</span>
        </div>
        
        <div className="flex gap-6 font-label-caps text-label-caps text-on-surface uppercase opacity-40">
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-primary hover:opacity-100 transition-colors">TWITTER</a>
        </div>
        
        <div className="font-label-caps text-label-caps text-on-surface uppercase opacity-60">
          EST. 2024 — SITEFACIL.STUDIO
        </div>
      </div>
    </footer>
  );
}
