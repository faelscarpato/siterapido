import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '5519995466902';
const WA_MESSAGE = 'Ol%C3%A1!%20Quero%20um%20site%20para%20o%20meu%20neg%C3%B3cio';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Aparecer depois de 2 segundos
    const timer1 = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip depois de mais 1 segundo
      const timer2 = setTimeout(() => {
        setShowTooltip(true);
        // Esconder tooltip depois de 5 segundos
        const timer3 = setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
        return () => clearTimeout(timer3);
      }, 1000);
      return () => clearTimeout(timer2);
    }, 2000);
    return () => clearTimeout(timer1);
  }, []);

  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Tooltip */}
        <div
          className={`bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
            Precisa de ajuda? Fale conosco!
          </p>
        </div>

        {/* Botão Principal - SÓLIDO VERDE */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-[#10B981] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Falar no WhatsApp"
          style={{
            background: '#10B981',  /* Verde sólido - NÃO é contorno */
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)'
          }}
        >
          {/* Pulsação de fundo */}
          <span
            className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-20"
            style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
          />

          {/* Ícone do WhatsApp - BRANCO */}
          <MessageCircle
            size={32}
            className="relative z-10"
            style={{ color: '#FFFFFF', strokeWidth: 2 }}  /* Branco sólido */
          />
        </a>
      </div>
    </div>
  );
}
