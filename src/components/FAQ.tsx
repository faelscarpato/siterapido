import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Quanto tempo demora para ficar pronto?',
    a: 'O site fica pronto em at\u00e9 72 horas (3 dias \u00fateis) ap\u00f3s voc\u00ea nos enviar as informa\u00e7\u00f5es, fotos e textos.',
  },
  {
    q: 'O site fica no meu nome?',
    a: 'Sim! O site \u00e9 100% seu. Ap\u00f3s o primeiro ano, voc\u00ea pode continuar conosco ou hospedar em outro lugar.',
  },
  {
    q: 'Tem mensalidade?',
    a: 'N\u00e3o! Voc\u00ea paga apenas uma vez. Hospedagem e dom\u00ednio inclu\u00eddos no primeiro ano. A partir do segundo ano, h\u00e1 apenas uma taxa anual de manuten\u00e7\u00e3o de servidor.',
  },
  {
    q: 'O site funciona bem no celular?',
    a: 'Com certeza! Todos os sites s\u00e3o desenvolvidos priorizando a vers\u00e3o mobile, que \u00e9 onde a maioria dos clientes acessa.',
  },
  {
    q: 'O valor inclui o dom\u00ednio (.com.br)?',
    a: 'Nos planos Profissional e Premium, o dom\u00ednio .com.br est\u00e1 incluso no primeiro ano. No plano B\u00e1sico, o site funciona em subdom\u00ednio.',
  },
  {
    q: 'Posso editar o site depois?',
    a: 'No plano Premium, voc\u00ea ter\u00e1 um painel simples para editar conte\u00fados. Nos outros planos, \u00e9 s\u00f3 nos mandar no WhatsApp e fazemos a altera\u00e7\u00e3o para voc\u00ea.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24" id="faq" style={{ background: '#F8F7FF' }}>
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', display: 'inline-block' }} />
            D\u00favidas frequentes
          </div>
          <h2 className="section-title mb-4">Perguntas Frequentes</h2>
          <p className="section-subtitle mx-auto">
            Tire suas d\u00favidas sobre como funciona o SiteR\u00e1pido.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card overflow-hidden"
              style={{ borderColor: open === i ? '#7C3AED' : '#E5E7EB' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                style={{ background: open === i ? '#F8F7FF' : 'white' }}
              >
                <span className="font-bold text-base" style={{ color: '#0F0A1E' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: '#7C3AED',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-sm" style={{ color: '#6B7280', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
