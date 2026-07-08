import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Reveal WhatsApp Button after 3 seconds
    const timer1 = setTimeout(() => {
      setIsVisible(true);
      
      // Show bubble after another second
      const timer2 = setTimeout(() => {
        setShowMessage(true);
      }, 1000);
      
      return () => clearTimeout(timer2);
    }, 3000);
    
    return () => clearTimeout(timer1);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`} 
      id="whatsapp-btn"
    >
      <div className="flex items-center gap-4">
        <div 
          className={`bg-surface px-4 py-2 border border-outline hidden md:block transition-all duration-500 ${showMessage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} 
          id="whatsapp-msg"
        >
          <p className="font-label-caps text-label-caps text-on-surface uppercase">OLÁ! COMO POSSO AJUDAR?</p>
        </div>
        
        <button className="w-16 h-16 bg-primary text-on-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-outline relative">
          <MessageCircle size={32} />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-background border border-primary animate-pulse"></span>
        </button>
      </div>
    </div>
  );
}
