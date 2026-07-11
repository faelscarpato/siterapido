import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, MessageCircle } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20SiteR%C3%A1pido';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#modelos', label: 'Modelos' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#precos', label: 'Preços' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:'linear-gradient(135deg,#7C3AED,#6D28D9)'}}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight" style={{color:'#0F0A1E'}}>Site<span style={{color:'#7C3AED'}}>Rápido</span></span>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{color:'#6B7280'}}
                onMouseEnter={e => (e.currentTarget.style.color='#7C3AED')}
                onMouseLeave={e => (e.currentTarget.style.color='#6B7280')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA desktop */}
          <a href={WA} target="_blank" rel="noopener" className="hidden md:flex btn-primary" style={{padding:'10px 20px',fontSize:'13px'}}>
            <MessageCircle size={15} />
            Falar no WhatsApp
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{color:'#0F0A1E'}}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden" style={{background:'rgba(255,255,255,0.97)',borderTop:'1px solid #E5E7EB',padding:'16px 20px 20px'}}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-medium text-sm"
                style={{color:'#374151',borderBottom:'1px solid #F3F4F6'}}
              >
                {l.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener" className="btn-whatsapp w-full mt-4" style={{justifyContent:'center'}}>
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
