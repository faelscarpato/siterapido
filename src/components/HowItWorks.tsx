import React from 'react';

export function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden bg-background border-t border-outline">
      <div className="mx-auto px-6 sm:px-10">
        <div className="mb-20">
          <h2 className="font-headline-xl text-headline-xl mb-6 text-on-surface uppercase">
            O CAMINHO PARA O <span className="text-primary">SUCESSO ONLINE</span>
          </h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
            Simplicidade tecnológica para focar no que você faz de melhor.
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-px bg-outline"></div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">01</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">ESCOLHA SEU ESTILO</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Selecione entre templates premium validados para conversão no seu mercado específico.
            </p>
          </div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">02</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">PERSONALIZE COM IA</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Nossa inteligência artificial cria textos e títulos persuasivos baseados no seu negócio.
            </p>
          </div>
          
          <div className="flex flex-col group">
            <div className="w-12 h-12 bg-surface flex items-center justify-center mb-8 border border-outline group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps font-bold">03</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile mb-4 text-on-surface uppercase">PUBLIQUE E LUCRE</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Hospedagem inclusa de alta velocidade e domínio personalizado prontos em segundos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
