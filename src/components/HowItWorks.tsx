import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden bg-background border-t border-outline" id="como-funciona">
      <div className="mx-auto px-6 sm:px-10">
        <div className="mb-20">
          <h2 className="font-display-lg text-display-lg-mobile text-4xl md:text-headline-xl mb-6 text-on-surface uppercase leading-tight">
            DO ZERO AO SITE PRONTO <span className="text-primary">EM 3 PASSOS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
            Um processo direto e sem dor de cabeça, pensado para quem não tem tempo a perder.
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-px bg-outline"></div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">01</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">ESCOLHA O PACOTE</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Você escolhe o modelo ideal para o seu segmento e o plano que cabe no seu bolso.
            </p>
          </div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">02</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">ENVIE SUAS INFOS</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Mande suas fotos, serviços e horários. Nossa equipe cuida dos textos profissionais e da montagem.
            </p>
          </div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">03</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">RECEBA EM 72H</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Seu site publicado, otimizado para celular e pronto para receber clientes do Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
