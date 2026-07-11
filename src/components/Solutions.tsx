import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const models = [
  {
    id: 1,
    title: 'BARBEARIA & SALÃO',
    subtitle: 'SITE C/ AGENDAMENTO',
    desc: 'Acabe com a bagunça no WhatsApp. Seus clientes marcam horário direto no site 24h por dia.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsAlNks-rIMpY6o_mC0Jv9o3BZTyEZzio3WAW9HaFtFDEqWIIrU1dqd5Vy_Crav58Na4Xc-wLZzohiGhjjQ5FNo-v97MTh_B4c0U_ZBBkjF4ZbD-gwR0NteTYOJ28xjYNcu7XZF49Sg49H5bKejleobz-9m0UIXYXKKukIJ79uuKZE5dRGIdLWoVb5XnGPwFgK55-szrKWJs956RUf9UwPiFFkWKGWXsEB2gC0oyEOxnnoISOfLehgnIWg',
    link: '/demo/barbearia'
  },
  {
    id: 2,
    title: 'ALIMENTAÇÃO & DELIVERY',
    subtitle: 'CATÁLOGO + WHATSAPP',
    desc: 'Mostre seus produtos e cardápio de forma irresistível e receba pedidos organizados no seu WhatsApp.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvMPVvoBQPSoXXColSEUGwGbfFMRXULv-3nhu7rSZnj7SHstY_yUsFXaiBzG3PXWFNJ_x79NQ_oeWFr-1a36OdtMIo1wY9gYX5fAQ88qhbF8VeRJ5CWF9Tn0it7IL22yGorQQa1rE68qc9jx-AYO9Fq0qVVHfY07oDolhPzNPpO72wBVVp-Ic766XO7BS7CreQyksOrIiaZ041SqWEH8nyhpEFm3mKDdNMY9lfR2MJFDjt765ZHYsjUO6U',
    link: '/demo/padaria'
  },
  {
    id: 3,
    title: 'VESTUÁRIO & MODA',
    subtitle: 'SITE INSTITUCIONAL',
    desc: 'Passe confiança profissional. Destaque seus serviços, localização no mapa e facilite o contato.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuRwVpEGPIeoAZyfmoz9XHMFy_ZMYug-TKu-v99JJp17s7iBmBGby3zYkiZ1S9Lfk73fAEEJ034-x5Pta10bFmELZb5hkVVZFSYFL6-30WeMPKifTfOfDLtG4H7LXC6Tpf229iT2tmHWY21xBKvAAn2f2gLfdugnJAHZJNMXn81K4hYRz1vmBTrlHeBlIRGZ7pfbqVR8rftZ37QoT2pltn2Cy7fyPFmtD9skLQIkfYm3Uf9VB4Ir9pAvPg',
    link: '/demo/vestuario'
  },
  {
    id: 4,
    title: 'RESTAURANTE & PIZZARIA',
    subtitle: 'CARDÁPIO DIGITAL',
    desc: 'Apresente seus pratos com fotos apetitosas. Cardápio completo, reservas e delivery.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    link: '/demo/restaurante'
  },
  {
    id: 5,
    title: 'SALÃO DE BELEZA',
    subtitle: 'GALERIA + AGENDAMENTO',
    desc: 'Mostre seus trabalhos em uma galeria linda. Sistema de agendamento integrado.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    link: '#'
  },
  {
    id: 6,
    title: 'PET SHOP',
    subtitle: 'SERVIÇOS + PRODUTOS',
    desc: 'Catálogo de produtos, serviços de banho e tosa. Facilite a vida dos tutores.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c',
    link: '#'
  },
  {
    id: 7,
    title: 'OFICINA MECÂNICA',
    subtitle: 'ORÇAMENTOS ONLINE',
    desc: 'Serviços oferecidos, orçamentos rápidos. Ganhe credibilidade profissional.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3',
    link: '#'
  },
  {
    id: 8,
    title: 'ACADEMIA',
    subtitle: 'PLANOS + HORÁRIOS',
    desc: 'Apresente sua estrutura, instrutores e planos. Atraia novos alunos.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    link: '#'
  },
  {
    id: 9,
    title: 'DENTISTA',
    subtitle: 'CLÍNICA PROFISSIONAL',
    desc: 'Mostre sua equipe e tratamentos. Agendamento de consultas simplificado.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5',
    link: '#'
  },
  {
    id: 10,
    title: 'MERCADINHO',
    subtitle: 'OFERTAS + DELIVERY',
    desc: 'Divulgue ofertas da semana. Receba pedidos pelo WhatsApp com facilidade.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a',
    link: '#'
  },
];

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
          <a
            className="font-label-caps text-label-caps flex items-center gap-2 hover:text-primary transition-colors mt-6 md:mt-0 pb-2 border-b border-on-surface hover:border-primary min-h-[48px]"
            href="#modelos"
          >
            EXPLORAR TODOS OS NICHOS
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <Link
              key={model.id}
              href={model.link}
              className="group relative overflow-hidden bg-surface-bright aspect-[4/5] flex flex-col justify-end p-6 sm:p-8 border border-outline hover:border-primary transition-all duration-300"
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <img
                  className="w-full h-full object-cover grayscale mix-blend-overlay"
                  alt={model.title}
                  src={model.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              </div>
              <div className="relative z-10 text-on-surface">
                <span className="font-label-caps text-label-caps mb-4 block text-primary">
                  {model.title}
                </span>
                <h3 className="font-headline-lg text-headline-lg mb-4">{model.subtitle}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{model.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
