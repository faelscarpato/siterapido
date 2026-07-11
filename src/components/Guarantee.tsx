import React from 'react';
import { Shield } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #F8F7FF 0%, #FFFFFF 100%)' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Ring badge */}
          <div className="guarantee-ring shrink-0">
            <Shield size={36} color="#7C3AED" />
            <p className="text-4xl font-extrabold mt-1" style={{ color: '#7C3AED' }}>
              7
            </p>
            <p className="text-xs font-bold" style={{ color: '#6B7280' }}>
              DIAS
            </p>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-extrabold text-2xl md:text-3xl mb-3" style={{ color: '#0F0A1E' }}>
              Garantia de <span className="highlight">100% de satisfação</span>
            </h2>
            <p className="text-base" style={{ color: '#6B7280', lineHeight: 1.7 }}>
              Se você não ficar satisfeito com o resultado do seu site nos primeiros{' '}
              <strong>7 dias</strong>, devolvemos 100% do valor investido. Sem perguntas, sem burocracia.
              Queremos que você fique realmente feliz com o resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
