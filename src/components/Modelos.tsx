import React, { useState } from 'react';
import { Scissors, Coffee, Pizza, Sparkles, PawPrint, Wrench, Shirt, Dumbbell, Smile, ShoppingCart, ExternalLink, X } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20um%20site%20para%20o%20meu%20neg%C3%B3cio';

const templates = [
  {
    id: 1,
    name: 'Barbearia',
    icon: Scissors,
    color: '#DC2626',
    desc: 'Visual masculino, sistema de agendamento online',
    features: ['Galeria de cortes', 'Agendamento online', 'Catálogo de serviços', 'Instagram integrado']
  },
  {
    id: 2,
    name: 'Padaria & Café',
    icon: Coffee,
    color: '#F59E0B',
    desc: 'Cardápio digital, encomendas pelo WhatsApp',
    features: ['Cardápio completo', 'Encomendas via WhatsApp', 'Promoções do dia', 'Horário de funcionamento']
  },
  {
    id: 3,
    name: 'Restaurante',
    icon: Pizza,
    color: '#EF4444',
    desc: 'Menu completo, delivery integrado',
    features: ['Menu digital', 'Delivery integrado', 'Avaliações', 'Reserva de mesas']
  },
  {
    id: 4,
    name: 'Salão de Beleza',
    icon: Sparkles,
    color: '#EC4899',
    desc: 'Galeria de trabalhos, agendamento fácil',
    features: ['Galeria de trabalhos', 'Agendamento online', 'Equipe profissional', 'Serviços e preços']
  },
  {
    id: 5,
    name: 'Pet Shop',
    icon: PawPrint,
    color: '#10B981',
    desc: 'Catálogo de produtos e serviços',
    features: ['Catálogo de produtos', 'Serviços de banho/tosa', 'Promoções', 'Contato WhatsApp']
  },
  {
    id: 6,
    name: 'Oficina Mecânica',
    icon: Wrench,
    color: '#3B82F6',
    desc: 'Orçamentos online, serviços oferecidos',
    features: ['Serviços oferecidos', 'Orçamento rápido', 'Localização', 'Horário de atendimento']
  },
  {
    id: 7,
    name: 'Loja de Roupas',
    icon: Shirt,
    color: '#A855F7',
    desc: 'Catálogo visual, looks do dia',
    features: ['Catálogo de produtos', 'Looks do dia', 'Lançamentos', 'Compra via WhatsApp']
  },
  {
    id: 8,
    name: 'Academia',
    icon: Dumbbell,
    color: '#14B8A6',
    desc: 'Planos, horários, instrutores',
    features: ['Planos e preços', 'Horários de aulas', 'Instrutores', 'Estrutura completa']
  },
  {
    id: 9,
    name: 'Dentista',
    icon: Smile,
    color: '#06B6D4',
    desc: 'Agendamento, tratamentos, equipe',
    features: ['Agendamento online', 'Tratamentos', 'Equipe especializada', 'Convênios']
  },
  {
    id: 10,
    name: 'Mercadinho',
    icon: ShoppingCart,
    color: '#84CC16',
    desc: 'Ofertas da semana, promoções',
    features: ['Ofertas da semana', 'Promoções', 'Delivery', 'Lista de produtos']
  },
];

export function Modelos() {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null);

  return (
    <section className="py-24 bg-gray-50" id="modelos">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label inline-flex mb-4">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563EB' }} />
            Modelos Profissionais
          </div>
          <h2 className="section-title mb-4">
            Escolha o modelo <span className="highlight">perfeito</span> para o seu negócio
          </h2>
          <p className="section-subtitle mx-auto">
            Templates profissionais, otimizados para cada tipo de comércio local.
          </p>
        </div>

        {/* Grid de Templates */}
        <div className="template-grid">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className="template-card text-left"
              >
                {/* Preview com ícone */}
                <div
                  className="template-preview flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${template.color}15 0%, ${template.color}08 100%)`,
                  }}
                >
                  <Icon size={64} strokeWidth={1.5} style={{ color: template.color }} />
                </div>

                {/* Informações */}
                <div className="template-info">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#111827' }}>
                    {template.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{template.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: template.color }}>
                    Ver modelo completo
                    <ExternalLink size={16} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href={WA} target="_blank" rel="noopener" className="btn-whatsapp">
            Solicitar orçamento personalizado
          </a>
        </div>
      </div>

      {/* Modal de Preview */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 z-[9998] bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTemplate(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {React.createElement(selectedTemplate.icon, {
                  size: 32,
                  strokeWidth: 1.5,
                  style: { color: selectedTemplate.color },
                })}
                <div>
                  <h3 className="font-bold text-xl">{selectedTemplate.name}</h3>
                  <p className="text-sm text-gray-600">{selectedTemplate.desc}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6">
              <h4 className="font-bold text-lg mb-4">Funcionalidades incluídas:</h4>
              <ul className="space-y-3 mb-8">
                {selectedTemplate.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${selectedTemplate.color}20` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: selectedTemplate.color }}
                      />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold mb-2">Design Responsivo</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Funciona perfeitamente em celulares, tablets e computadores.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: selectedTemplate.color }}>
                      100%
                    </div>
                    <div className="text-xs text-gray-600">Mobile</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: selectedTemplate.color }}>
                      SEO
                    </div>
                    <div className="text-xs text-gray-600">Otimizado</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: selectedTemplate.color }}>
                      24h
                    </div>
                    <div className="text-xs text-gray-600">Online</div>
                  </div>
                </div>
              </div>

              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="btn-primary w-full justify-center"
              >
                Quero este modelo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
