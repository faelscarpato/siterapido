import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos T.',
    business: 'Barbearia do Carl\u00e3o',
    city: 'Pedreira, SP',
    avatar: 'C',
    text: 'Achei que ia ser caro e demorado, mas em 5 dias meu site estava no ar. A quantidade de agendamentos pelo WhatsApp dobrou.',
    stars: 5,
  },
  {
    name: 'Mariana L.',
    business: 'P\u00e3o Nosso Padaria',
    city: 'Amparo, SP',
    avatar: 'M',
    text: 'Meus clientes agora fazem encomenda direto pelo site. O visual ficou t\u00e3o lindo que parece padaria de grife!',
    stars: 5,
  },
  {
    name: 'Juliana R.',
    business: 'Boutique Elegance',
    city: 'Mogi Mirim, SP',
    avatar: 'J',
    text: 'O site ficou exatamente com a cara da minha loja. Passa muita credibilidade. A equipe me ajudou com tudo pelo WhatsApp.',
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24" style={{ background: '#F8F7FF' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Quem j\u00e1 confiou, recomenda
          </div>
          <h2 className="section-title mb-4">
            Veja o que <span className="highlight">nossos clientes</span> dizem
          </h2>
          <p className="section-subtitle mx-auto">
            Neg\u00f3cios locais de Pedreira, Amparo e regi\u00e3o que aumentaram suas vendas com a gente.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6 relative">
              <Quote
                size={40}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  opacity: 0.08,
                  color: '#7C3AED',
                }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm mb-6 relative z-10" style={{ color: '#374151', lineHeight: 1.65 }}>
                \"{t.text}\"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `hsl(${i * 120}, 60%, 70%)`,
                    color: 'white',
                    fontWeight: 700,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#0F0A1E' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>
                    {t.business} \u2022 {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
