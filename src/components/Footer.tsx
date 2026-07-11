import React from 'react';
import { Instagram, Linkedin, Mail, Zap } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ background: '#0F0A1E', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span className="font-extrabold text-lg">Site<span style={{ color: '#7C3AED' }}>R\u00e1pido</span></span>
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Sites profissionais para pequenos neg\u00f3cios em Pedreira, Amparo, Mogi Mirim e regi\u00e3o.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links R\u00e1pidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Modelos', href: '#modelos' },
                { label: 'Como funciona', href: '#como-funciona' },
                { label: 'Pre\u00e7os', href: '#precos' },
                { label: 'FAQ', href: '#faq' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: 'rgba(255,255,255,0.7)' }} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: '#7C3AED' }} />
                <a href="mailto:scarpatoweb@gmail.com" style={{ color: 'rgba(255,255,255,0.7)' }} className="hover:text-white transition-colors">
                  scarpatoweb@gmail.com
                </a>
              </li>
              <li>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>WhatsApp: (19) 99546-6902</p>
              </li>
              <li className="flex gap-3 mt-4">
                <a
                  href="https://instagram.com/siterapido"
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: 'rgba(124,58,237,0.1)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7C3AED')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(124,58,237,0.1)')}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/siterapido"
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: 'rgba(124,58,237,0.1)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7C3AED')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(124,58,237,0.1)')}
                >
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            \u00a9 {year} SiteR\u00e1pido. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
