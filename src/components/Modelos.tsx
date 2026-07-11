import React from 'react';
import { ExternalLink, Scissors, Coffee, Pizza, Sparkles, PawPrint, Wrench, Shirt, Dumbbell, Smile, ShoppingCart } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20um%20site%20para%20o%20meu%20neg%C3%B3cio';

const niches = [
  { id: 1, name: 'Barbearia', icon: Scissors, emoji: '\u2702\uFE0F', color: '#DC2626', desc: 'Visual masculino, sistema de agendamento online' },
  { id: 2, name: 'Padaria & Caf\u00e9', icon: Coffee, emoji: '\ud83e\udd56', color: '#F59E0B', desc: 'Card\u00e1pio digital, encomendas pelo WhatsApp' },
  { id: 3, name: 'Restaurante', icon: Pizza, emoji: '\ud83c\udf55', color: '#EF4444', desc: 'Menu completo, delivery integrado' },
  { id: 4, name: 'Sal\u00e3o de Beleza', icon: Sparkles, emoji: '\ud83d\udc85', color: '#EC4899', desc: 'Galeria de trabalhos, agendamento f\u00e1cil' },
  { id: 5, name: 'Pet Shop', icon: PawPrint, emoji: '\ud83d\udc3e', color: '#10B981', desc: 'Cat\u00e1logo de produtos e servi\u00e7os' },
  { id: 6, name: 'Oficina Mec\u00e2nica', icon: Wrench, emoji: '\ud83d\udd27', color: '#3B82F6', desc: 'Or\u00e7amentos online, servi\u00e7os oferecidos' },
  { id: 7, name: 'Loja de Roupas', icon: Shirt, emoji: '\ud83d\udc57', color: '#A855F7', desc: 'Cat\u00e1logo visual, looks do dia' },
  { id: 8, name: 'Academia', icon: Dumbbell, emoji: '\ud83d\udcaa', color: '#14B8A6', desc: 'Planos, hor\u00e1rios, instrutores' },
  { id: 9, name: 'Dentista', icon: Smile, emoji: '\ud83e\uddb7', color: '#06B6D4', desc: 'Agendamento, tratamentos, equipe' },
  { id: 10, name: 'Mercadinho', icon: ShoppingCart, emoji: '\ud83d\uded2', color: '#84CC16', desc: 'Ofertas da semana, promo\u00e7\u00f5es' },
];

export function Modelos() {
  return (
    <section className="py-24" id="modelos" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Modelos prontos para cada neg\u00f3cio
          </div>
          <h2 className="section-title mb-4">
            Escolha o modelo <span className="highlight">perfeito</span> para o seu nicho
          </h2>
          <p className="section-subtitle mx-auto">
            Templates profissionais, testados e otimizados para cada tipo de com\u00e9rcio local.
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="niche-track">
          {niches.map(n => (
            <div key={n.id} className="niche-card">
              <div
                className="h-40 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${n.color}15 0%, ${n.color}08 100%)`,
                }}
              >
                <span style={{ fontSize: 56 }}>{n.emoji}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: '#0F0A1E' }}>
                  {n.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                  {n.desc}
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: n.color }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Quero este modelo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={WA} target="_blank" rel="noopener" className="btn-whatsapp">
            Solicitar or\u00e7amento personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
