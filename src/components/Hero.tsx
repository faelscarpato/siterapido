import React from 'react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden flex-1 flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-bright/20 via-background to-background pointer-events-none"></div>
        {/* Subtle grid pattern for the "Bold Typography" design */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`, 
            backgroundSize: '4rem 4rem' 
          }}
        ></div>
      </div>

      <div className="mx-auto px-6 sm:px-10 w-full relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Typography & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="font-label-caps text-label-caps opacity-60 mb-6 text-primary tracking-[4px] UPPERCASE">
              FEITO PARA O COMÉRCIO LOCAL
            </div>
            
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.85] text-on-surface">
              SITE PRONTO<br />PARA VENDER.
            </h1>
            
            <div className="w-32 h-2 bg-primary mb-10"></div>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mb-12">
              Sua loja na internet sem complicação e sem preço de agência. Transforme visitantes do Google em pedidos reais no seu WhatsApp em até 72 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#modelos" className="flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-4 min-h-[48px] font-label-caps text-label-caps hover:bg-opacity-90 transition-all font-bold">
                VER MODELOS
              </a>
              <a href="#precos" className="flex items-center justify-center gap-2 px-8 py-4 min-h-[48px] border border-outline font-label-caps text-label-caps hover:bg-surface transition-all text-on-surface">
                VER PLANOS
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-surface object-cover grayscale" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
                <img className="w-12 h-12 rounded-full border-2 border-surface object-cover grayscale" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
                <img className="w-12 h-12 rounded-full border-2 border-surface object-cover grayscale" src="https://i.pravatar.cc/100?img=3" alt="User 3" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 text-primary">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <span className="font-label-caps text-[10px] text-on-surface-variant mt-1">MAIS DE 500 COMÉRCIOS LOCAIS</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Complex Floating Mockups */}
          <div className="w-full lg:w-1/2 relative h-auto lg:h-[600px] flex flex-col justify-center gap-6 mt-12 lg:mt-0">
            <div className="bg-surface border border-outline p-6 flex flex-col justify-between h-[180px] sm:h-[240px]">
              <span className="font-label-caps text-label-caps">VISITAS NO GOOGLE</span>
              <span className="text-5xl sm:text-[64px] font-black tracking-tighter leading-none text-on-surface">+400%</span>
              <div className="flex justify-between items-end font-label-caps text-[10px] opacity-60">
                <span>Após ativar o site</span>
                <span>Otimizado para SEO</span>
              </div>
            </div>
            <div className="bg-surface border border-outline p-6 flex flex-col justify-between h-[180px] sm:h-[240px]">
              <span className="font-label-caps text-label-caps text-primary">ENTREGA RÁPIDA</span>
              <span className="text-5xl sm:text-[64px] font-black tracking-tighter leading-none text-on-surface">72H</span>
              <div className="flex justify-between items-end font-label-caps text-[10px] opacity-60">
                <span>Com textos e imagens prontas</span>
                <span>Sem enrolação de agência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
