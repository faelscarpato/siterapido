import React from 'react';
import { CheckCircle, SearchCheck, Smartphone, MapPin, TrendingUp } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-surface border-t border-outline text-on-surface" id="funcionalidades">
      <div className="mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-outline text-primary font-label-caps text-label-caps tracking-[4px]">
            <SearchCheck size={16} />
            OTIMIZADO PARA BUSCAS
          </div>
          
          <h2 className="font-display-lg text-display-lg-mobile text-4xl md:text-headline-xl leading-tight uppercase text-on-surface ">
            TUDO QUE O CLIENTE PROCURA NO <span className="text-primary">GOOGLE</span>.
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Não basta ter um site. Ele precisa passar confiança e facilitar o contato para quem procura seus serviços na sua região.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                <CheckCircle className="text-on-primary" size={14} />
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase mb-2">Botão de WhatsApp Direto</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Visitantes entram em contato com um clique, sem precisar salvar o número ou preencher formulários longos.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                <CheckCircle className="text-on-primary" size={14} />
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase mb-2">Integração Google Meu Negócio</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Conectamos seu site com o mapa do Google, reforçando sua presença e credibilidade local.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                <CheckCircle className="text-on-primary" size={14} />
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg-mobile text-on-surface uppercase mb-2">100% Otimizado para Celular</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Mais de 80% das buscas locais vêm de smartphones. Seu site vai abrir rápido e perfeito em qualquer tela.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative bg-surface p-6 sm:p-12 border border-outline overflow-hidden">
          <div className="space-y-6">
            <div className="p-6 sm:p-8 bg-background border border-outline translate-x-4 animate-pulse">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <Smartphone className="text-on-primary" size={16} />
                </div>
                <span className="text-on-surface-variant font-label-caps text-[10px] sm:text-label-caps uppercase tracking-wider">
                  MOBILE FIRST
                </span>
              </div>
              <div className="h-4 bg-surface-bright w-3/4 mb-2"></div>
              <div className="h-4 bg-surface-bright w-1/2"></div>
            </div>
            
            <div className="p-6 sm:p-8 bg-primary border border-outline md:scale-105 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-on-primary font-label-caps text-[10px] sm:text-label-caps uppercase tracking-wider">
                  WHATSAPP DIRETO
                </span>
                <TrendingUp className="text-on-primary" size={20} />
              </div>
              <p className="font-headline-lg text-lg sm:text-headline-lg-mobile text-on-primary uppercase leading-tight">
                PEDIDOS E ORÇAMENTOS DIRETO NO SEU CELULAR, SEM INTERMEDIÁRIOS.
              </p>
            </div>
            
            <div className="p-6 sm:p-8 bg-background border border-outline -translate-x-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-surface-bright flex items-center justify-center">
                  <MapPin className="text-on-surface" size={16} />
                </div>
                <span className="text-on-surface-variant font-label-caps text-[10px] sm:text-label-caps uppercase tracking-wider">
                  BUSCA LOCAL
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-2 bg-surface-bright w-20"></div>
                <div className="h-2 bg-surface-bright w-12"></div>
                <div className="h-2 bg-surface-bright w-24"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
