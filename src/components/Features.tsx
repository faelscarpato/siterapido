import React from 'react';
import { Sparkles, CheckCircle, Edit2, TrendingUp } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-surface border-t border-outline text-on-surface" id="funcionalidades">
      <div className="mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-outline text-primary font-label-caps text-label-caps">
            <Sparkles size={16} />
            INTELIGÊNCIA ARTIFICIAL NATIVA
          </div>
          
          <h2 className="font-headline-xl text-headline-xl leading-[0.9] uppercase text-on-surface">
            VOCÊ NÃO PRECISA SER UM <span className="text-primary">REDATOR</span> OU ESPECIALISTA EM SEO.
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            O sitefacil integra os modelos de linguagem mais avançados do mundo para garantir que seu site seja encontrado e convença seus clientes.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <CheckCircle className="text-primary-container mt-1 shrink-0" size={24} />
              <div>
                <strong className="block font-headline-lg text-headline-lg-mobile text-on-surface mb-1">
                  Copywriting de Alta Conversão
                </strong>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Textos que vendem, gerados instantaneamente com base no perfil do seu cliente ideal.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-primary-container mt-1 shrink-0" size={24} />
              <div>
                <strong className="block font-headline-lg text-headline-lg-mobile text-on-surface mb-1">
                  Otimização SEO Automatizada
                </strong>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Meta tags, descrições e estrutura técnica otimizados para você aparecer no topo do Google.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative bg-surface p-12 border border-outline overflow-hidden">
          <div className="space-y-6">
            <div className="p-8 bg-background border border-outline translate-x-4 animate-pulse">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <Edit2 className="text-on-primary" size={16} />
                </div>
                <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
                  GERADOR DE TÍTULOS
                </span>
              </div>
              <div className="h-4 bg-surface-bright w-3/4 mb-2"></div>
              <div className="h-4 bg-surface-bright w-1/2"></div>
            </div>
            
            <div className="p-8 bg-primary border border-outline scale-105 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-on-primary font-label-caps text-label-caps uppercase tracking-wider">
                  SUGESTÃO PERFEITA
                </span>
                <Sparkles className="text-on-primary" size={20} />
              </div>
              <p className="font-headline-lg text-headline-lg-mobile text-on-primary uppercase leading-tight">
                O MELHOR CORTE DA CIDADE, AGORA COM AGENDAMENTO ONLINE FÁCIL.
              </p>
            </div>
            
            <div className="p-8 bg-background border border-outline -translate-x-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-surface-bright flex items-center justify-center">
                  <TrendingUp className="text-on-surface" size={16} />
                </div>
                <span className="text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
                  ANÁLISE DE SEO
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
