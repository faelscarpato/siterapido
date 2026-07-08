import React from 'react';
import { Check, CheckCircle, X } from 'lucide-react';

export function Pricing() {
  return (
    <section className="py-24 bg-background border-t border-outline" id="precos">
      <div className="mx-auto px-6 sm:px-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg-mobile text-4xl md:text-headline-xl mb-6 text-on-surface uppercase leading-tight">
            PACOTES FECHADOS,<br /><span className="text-primary">SEM MENSALIDADE DE AGÊNCIA</span>
          </h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
            Planos simples e acessíveis, pensados para o tamanho do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {/* Plan 1 */}
          <div className="bg-surface p-6 sm:p-10 border border-outline flex flex-col h-full hover:border-primary transition-colors">
            <div className="mb-8">
              <h3 className="font-headline-lg text-headline-lg-mobile mb-2 text-on-surface uppercase">VITRINE</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-on-surface-variant font-label-caps">R$</span>
                <span className="text-5xl font-black font-headline-xl text-on-surface">29</span>
                <span className="text-on-surface-variant font-label-caps">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-16 flex-grow">
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Site Institucional Simples
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Hospedagem Inclusa
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Botão de WhatsApp
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant opacity-50">
                <X className="text-outline shrink-0" size={16} />
                Catálogo de Produtos
              </li>
            </ul>
            <button className="w-full py-4 min-h-[48px] border border-outline text-on-surface font-label-caps text-label-caps hover:bg-surface-bright transition-all">
              COMEÇAR AGORA
            </button>
          </div>
          
          {/* Plan 2 (Featured) */}
          <div className="bg-surface-bright p-6 sm:p-10 border-2 border-primary flex flex-col h-full relative z-10 md:scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 font-label-caps text-label-caps">
              MAIS POPULAR
            </div>
            <div className="mb-8">
              <h3 className="font-headline-lg text-headline-lg-mobile mb-2 text-on-surface uppercase">CATÁLOGO</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-on-surface-variant font-label-caps">R$</span>
                <span className="text-6xl font-black font-headline-xl text-on-surface">49</span>
                <span className="text-on-surface-variant font-label-caps">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-16 flex-grow">
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <CheckCircle className="text-primary shrink-0" size={16} />
                Tudo do plano Vitrine
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <CheckCircle className="text-primary shrink-0" size={16} />
                Catálogo de Produtos/Serviços
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <CheckCircle className="text-primary shrink-0" size={16} />
                Integração Google Meu Negócio
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <CheckCircle className="text-primary shrink-0" size={16} />
                Domínio Próprio (.com.br)
              </li>
            </ul>
            <button className="w-full py-4 min-h-[48px] bg-primary text-on-primary font-label-caps text-label-caps hover:bg-opacity-90 transition-all font-bold">
              ASSINAR CATÁLOGO
            </button>
          </div>
          
          {/* Plan 3 */}
          <div className="bg-surface p-6 sm:p-10 border border-outline flex flex-col h-full hover:border-primary transition-colors">
            <div className="mb-8">
              <h3 className="font-headline-lg text-headline-lg-mobile mb-2 text-on-surface uppercase">CONVERSÃO</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-on-surface-variant font-label-caps">R$</span>
                <span className="text-5xl font-black font-headline-xl text-on-surface">97</span>
                <span className="text-on-surface-variant font-label-caps">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-16 flex-grow">
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Tudo do plano Catálogo
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Sistema de Agendamento
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Recebimento de Pedidos
              </li>
              <li className="flex items-center gap-3 text-body-md font-body-md text-on-surface-variant">
                <Check className="text-primary shrink-0" size={16} />
                Suporte Prioritário no WhatsApp
              </li>
            </ul>
            <button className="w-full py-4 min-h-[48px] border border-outline text-on-surface font-label-caps text-label-caps hover:bg-surface-bright transition-all">
              FALAR COM CONSULTOR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
