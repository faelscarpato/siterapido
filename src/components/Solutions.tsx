import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Solutions() {
  return (
    <section className="py-24 bg-surface" id="modelos">
      <div className="mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display-lg text-display-lg-mobile text-4xl md:text-headline-xl mb-6 text-on-surface uppercase leading-tight">
              MODELOS VALIDADOS<br />
              <span className="text-primary">PARA O SEU SEGMENTO</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
              Temos o design perfeito para o seu negócio. Escolha o seu e deixe a nossa equipe adaptar com suas informações.
            </p>
          </div>
          <a className="font-label-caps text-label-caps flex items-center gap-2 hover:text-primary transition-colors mt-6 md:mt-0 pb-2 border-b border-on-surface hover:border-primary min-h-[48px]" href="#">
            EXPLORAR TODOS OS NICHOS
            <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Barbearia */}
          <div className="group relative overflow-hidden bg-surface-bright aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-outline">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <img 
                className="w-full h-full object-cover grayscale mix-blend-overlay" 
                alt="A high-end barber shop interior" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLsAlNks-rIMpY6o_mC0Jv9o3BZTyEZzio3WAW9HaFtFDEqWIIrU1dqd5Vy_Crav58Na4Xc-wLZzohiGhjjQ5FNo-v97MTh_B4c0U_ZBBkjF4ZbD-gwR0NteTYOJ28xjYNcu7XZF49Sg49H5bKejleobz-9m0UIXYXKKukIJ79uuKZE5dRGIdLWoVb5XnGPwFgK55-szrKWJs956RUf9UwPiFFkWKGWXsEB2gC0oyEOxnnoISOfLehgnIWg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps mb-4 block text-primary">BARBEARIA & SALÃO</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">SITE C/ AGENDAMENTO</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Acabe com a bagunça no WhatsApp. Seus clientes marcam horário direto no site 24h por dia.
              </p>
            </div>
          </div>
          
          {/* Padaria */}
          <div className="group relative overflow-hidden bg-surface-bright aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-outline">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <img 
                className="w-full h-full object-cover grayscale mix-blend-overlay" 
                alt="A sophisticated artisan bakery" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLvMPVvoBQPSoXXColSEUGwGbfFMRXULv-3nhu7rSZnj7SHstY_yUsFXaiBzG3PXWFNJ_x79NQ_oeWFr-1a36OdtMIo1wY9gYX5fAQ88qhbF8VeRJ5CWF9Tn0it7IL22yGorQQa1rE68qc9jx-AYO9Fq0qVVHfY07oDolhPzNPpO72wBVVp-Ic766XO7BS7CreQyksOrIiaZ041SqWEH8nyhpEFm3mKDdNMY9lfR2MJFDjt765ZHYsjUO6U" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps mb-4 block text-primary">ALIMENTAÇÃO & DELIVERY</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">CATÁLOGO + WHATSAPP</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mostre seus produtos e cardápio de forma irresistível e receba pedidos organizados no seu WhatsApp.
              </p>
            </div>
          </div>
          
          {/* Vestuario */}
          <div className="group relative overflow-hidden bg-surface-bright aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-outline">
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <img 
                className="w-full h-full object-cover grayscale mix-blend-overlay" 
                alt="A minimalist fashion boutique" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLuRwVpEGPIeoAZyfmoz9XHMFy_ZMYug-TKu-v99JJp17s7iBmBGby3zYkiZ1S9Lfk73fAEEJ034-x5Pta10bFmELZb5hkVVZFSYFL6-30WeMPKifTfOfDLtG4H7LXC6Tpf229iT2tmHWY21xBKvAAn2f2gLfdugnJAHZJNMXn81K4hYRz1vmBTrlHeBlIRGZ7pfbqVR8rftZ37QoT2pltn2Cy7fyPFmtD9skLQIkfYm3Uf9VB4Ir9pAvPg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="relative z-10 text-on-surface">
              <span className="font-label-caps text-label-caps mb-4 block text-primary">ASSISTÊNCIA & SERVIÇOS</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">SITE INSTITUCIONAL</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Passe confiança profissional. Destaque seus serviços, localização no mapa e facilite o contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
