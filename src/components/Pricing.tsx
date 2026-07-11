import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20contratar%20o%20plano%20';

const plans = [
  {
    name: 'B\u00e1sico',
    price: 297,
    period: 'Pagamento \u00fanico',
    desc: 'Perfeito para quem est\u00e1 come\u00e7ando agora.',
    features: [
      'Site One-Page completo',
      'Bot\u00e3o direto para WhatsApp',
      'Formul\u00e1rio de contato',
      'Otimizado para celular',
      'Hospedagem inclusa (1\u00ba ano)',
    ],
    cta: 'Quero este plano',
    popular: false,
  },
  {
    name: 'Profissional',
    price: 497,
    period: 'Pagamento \u00fanico',
    desc: 'A escolha ideal para neg\u00f3cios locais.',
    features: [
      'Site One-Page avan\u00e7ado',
      'Galeria de at\u00e9 15 fotos',
      'Dom\u00ednio gr\u00e1tis (.com.br) no 1\u00ba ano',
      'Otimiza\u00e7\u00e3o SEO b\u00e1sica',
      'Suporte priorit\u00e1rio via WhatsApp',
    ],
    cta: 'Quero este plano',
    popular: true,
  },
  {
    name: 'Premium',
    price: 797,
    period: 'Pagamento \u00fanico',
    desc: 'Para marcas que querem se destacar.',
    features: [
      'Site com m\u00faltiplas p\u00e1ginas',
      'Blog ou Cat\u00e1logo integrado',
      'Dom\u00ednio gr\u00e1tis no 1\u00ba ano',
      'Otimiza\u00e7\u00e3o SEO avan\u00e7ada',
      'Painel simples para edi\u00e7\u00e3o',
    ],
    cta: 'Quero este plano',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24" id="precos" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Pre\u00e7os simples e justos
          </div>
          <h2 className="section-title mb-4">
            Planos <span className="highlight">sem mensalidade</span> e sem surpresas
          </h2>
          <p className="section-subtitle mx-auto">
            Pague uma vez e o site \u00e9 seu. Hospedagem e suporte inclu\u00eddos no primeiro ano.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="card p-8 relative" style={{ borderWidth: p.popular ? 2 : 1, borderColor: p.popular ? '#7C3AED' : '#E5E7EB' }}>
              {p.popular && <div className="popular-badge">MAIS POPULAR</div>}

              {/* Plan name */}
              <h3 className="font-bold text-xl mb-2" style={{ color: '#0F0A1E' }}>
                {p.name}
              </h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
                {p.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold" style={{ color: '#7C3AED' }}>R$</span>
                  <span className="text-5xl font-extrabold" style={{ color: '#7C3AED' }}>{p.price}</span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
                  {p.period}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <Check size={18} color="#10B981" style={{ shrink: 0, marginTop: 2 }} />
                    <span style={{ color: '#374151' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`${WA}${encodeURIComponent(p.name)}`}
                target="_blank"
                rel="noopener"
                className={p.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                style={{ justifyContent: 'center' }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
