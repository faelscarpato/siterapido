import React from 'react';
import { LayoutGrid, ImagePlus, Rocket } from 'lucide-react';

const steps = [
  {
    num: 1,
    icon: LayoutGrid,
    title: 'Escolha o modelo',
    desc: 'Navegue pelos nossos modelos de nicho e escolha o que mais combina com o seu negócio.',
  },
  {
    num: 2,
    icon: ImagePlus,
    title: 'Envie seus dados',
    desc: 'Mande suas fotos, textos e contatos direto pelo WhatsApp. Sem formulários complicados.',
  },
  {
    num: 3,
    icon: Rocket,
    title: 'Site no ar',
    desc: 'Em até 72 horas, seu site estará pronto e publicado. Comece a receber visitas imediatamente.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24" id="como-funciona" style={{ background: '#F8F7FF' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Processo simples e rápido
          </div>
          <h2 className="section-title mb-4">
            Como funciona? <span className="highlight">3 passos</span> e está pronto.
          </h2>
          <p className="section-subtitle mx-auto">
            Não precisa entender de tecnologia. Nós cuidamos de tudo para você.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="text-center relative">
                {/* Step number circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                    boxShadow: '0 8px 24px rgba(124,58,237,0.25)',
                  }}
                >
                  <span className="text-white font-extrabold text-xl">{s.num}</span>
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#F3F0FF' }}
                >
                  <s.icon size={24} color="#7C3AED" />
                </div>

                {/* Text */}
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0F0A1E' }}>
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  {s.desc}
                </p>
              </div>

              {/* Connector line (between steps, not after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute" style={{ left: `${(i + 1) * 33.33 - 16.66}%`, top: 28, width: '16.66%' }}>
                  <div className="step-connector" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
