import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20meu%20site%20agora';

export function FinalCTA() {
  return (
    <section className="py-24" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2
          className="font-extrabold text-3xl md:text-4xl mb-4"
          style={{ color: 'white', letterSpacing: '-0.02em' }}
        >
          Pronto para ter seu site profissional?
        </h2>
        <p className="text-base md:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
          D\u00ea o pr\u00f3ximo passo no seu neg\u00f3cio. Fale conosco agora e veja como \u00e9 simples e barato ter uma presen\u00e7a online de respeito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="btn-whatsapp"
            style={{ background: 'white', color: '#25D366', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          >
            <MessageCircle size={20} />
            Falar com um especialista
          </a>
          <a
            href="#precos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white transition-all"
            style={{ background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Ver planos
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
