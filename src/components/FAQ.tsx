import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "O QUE EU PRECISO ENVIAR PARA TER MEU SITE?",
    answer: "Apenas informações básicas do seu negócio: fotos (se tiver), serviços ou produtos que oferece, endereço, horário de funcionamento e seu número de WhatsApp. Nós cuidamos de toda a estrutura, textos persuasivos e design."
  },
  {
    question: "EM QUANTO TEMPO MEU SITE FICA PRONTO?",
    answer: "Trabalhamos com um prazo de entrega super rápido de 72 horas úteis após o recebimento das informações do seu negócio. Sem enrolação de agência."
  },
  {
    question: "PRECISO PAGAR HOSPEDAGEM OU DOMÍNIO SEPARADO?",
    answer: "Não! A hospedagem já está inclusa em todos os planos. O domínio personalizado (.com.br) está incluso gratuitamente nos planos Catálogo e Conversão."
  },
  {
    question: "MEU SITE VAI APARECER NO GOOGLE?",
    answer: "Sim! Entregamos o site 100% otimizado para os motores de busca (SEO Local), o que ajuda muito o seu negócio a ser encontrado por clientes da sua região quando pesquisarem no Google."
  },
  {
    question: "COMO FUNCIONA O PAGAMENTO DA MENSALIDADE?",
    answer: "O pagamento é feito via cartão de crédito ou PIX, de forma automática e recorrente, sem prender o limite do seu cartão."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background border-t border-outline" id="faq">
      <div className="mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="font-display-lg text-display-lg-mobile text-4xl md:text-headline-xl mb-6 text-on-surface uppercase leading-tight">
              PERGUNTAS<br /><span className="text-primary">FREQUENTES</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px]">
              Tudo o que você precisa saber antes de transformar a presença digital do seu negócio.
            </p>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border ${isOpen ? 'border-primary' : 'border-outline'} bg-surface transition-colors cursor-pointer hover:border-primary`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <h3 className="font-headline-lg text-lg sm:text-xl text-on-surface uppercase pr-4">{faq.question}</h3>
                    <div className={`shrink-0 w-8 h-8 flex items-center justify-center border ${isOpen ? 'border-primary text-primary' : 'border-outline text-on-surface'} transition-colors`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 font-body-md text-on-surface-variant">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
