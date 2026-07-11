import React from 'react';
import { Smartphone, MessageCircle, Search, Clock, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Mais de 80% das buscas locais v\u00eam do celular. Seu site vai carregar r\u00e1pido e perfeito em qualquer tela.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Direto',
    desc: 'Bot\u00e3o de contato instant\u00e2neo. Seus clientes chegam at\u00e9 voc\u00ea com um toque, sem precisar salvar n\u00fameros.',
  },
  {
    icon: Search,
    title: 'Otimizado para Google',
    desc: 'SEO local configurado desde o primeiro dia. Apare\u00e7a quando clientes buscarem seu servi\u00e7o na regi\u00e3o.',
  },
  {
    icon: Clock,
    title: 'Entrega em 72h',
    desc: 'Sem enrola\u00e7\u00e3o. Em at\u00e9 3 dias \u00fateis seu site estar\u00e1 no ar e pronto para receber visitas e pedidos.',
  },
  {
    icon: Shield,
    title: 'Hospedagem Inclusa',
    desc: 'Servidor r\u00e1pido e seguro, certificado SSL (cadeado verde). Tudo inclu\u00eddo sem custos extras no primeiro ano.',
  },
  {
    icon: Zap,
    title: 'Suporte Via WhatsApp',
    desc: 'Precisa mudar uma foto ou texto? \u00c9 s\u00f3 mandar mensagem. Suporte r\u00e1pido e sem burocracia.',
  },
];

export function Features() {
  return (
    <section className="py-24" id="funcionalidades" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            Tudo que voc\u00ea precisa
          </div>
          <h2 className="section-title mb-4">
            Funcionalidades pensadas para <span className="highlight">vender mais</span>
          </h2>
          <p className="section-subtitle mx-auto">
            N\u00e3o basta ter um site bonito. Ele precisa gerar resultados reais para o seu neg\u00f3cio.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}
              >
                <f.icon size={22} color="white" />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0F0A1E' }}>
                {f.title}
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
