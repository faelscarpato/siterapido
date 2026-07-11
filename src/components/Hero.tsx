import React from 'react';
import { MessageCircle, ArrowRight, Star, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';

const WA = 'https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20SiteR%C3%A1pido';

const stats = [
  { icon: TrendingUp, value: '+400%', label: 'visitas no Google' },
  { icon: Clock, value: '72h', label: 'para ficar no ar' },
  { icon: Shield, value: '100%', label: 'satisfação garantida' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F8F7FF 0%, #EDE9FE 40%, #F8F7FF 80%, #FEF3C7 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          top: -100,
          right: -150,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)',
          bottom: 0,
          left: -100,
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="section-label inline-flex mb-6">
              <span style={{width:8,height:8,borderRadius:'50%',background:'#7C3AED',display:'inline-block'}} />
              Feito para o comércio local de Pedreira e região
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-tight mb-6"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                letterSpacing: '-0.03em',
                color: '#0F0A1E',
              }}
            >
              Seu negócio
              <br />
              <span className="highlight">merece aparecer</span>
              <br />
              no Google.
            </h1>

            {/* Subheadline */}
            <p
              className="mb-8 section-subtitle"
              style={{ margin: '0 auto 32px', textAlign: 'inherit', maxWidth: '520px' }}
            >
              Site profissional, bonito e pronto para vender em até <strong>72 horas</strong>.
              Sem complicação, sem preço de agência. Seu WhatsApp cheia de pedidos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href={WA} target="_blank" rel="noopener" className="btn-whatsapp">
                <MessageCircle size={20} />
                Quero meu site agora
              </a>
              <a href="#modelos" className="btn-secondary">
                Ver modelos
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white"
                    style={{
                      background: `hsl(${i * 60}, 60%, 70%)`,
                      marginLeft: i > 1 ? -10 : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    {['C','M','J','R','A'][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="text-xs font-medium" style={{color:'#6B7280'}}>+200 negócios atendidos</p>
              </div>
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            {/* Main card */}
            <div
              className="card p-6"
              style={{
                background: 'white',
                boxShadow: '0 20px 60px rgba(124,58,237,0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{background:'linear-gradient(135deg,#7C3AED,#6D28D9)'}}
                >
                  <span style={{fontSize:18}}>&#127981;</span>
                </div>
                <div>
                  <p className="font-bold text-sm" style={{color:'#0F0A1E'}}>Barbearia do Carlão</p>
                  <p className="text-xs" style={{color:'#6B7280'}}>Pedreira, SP</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-3 text-center"
                    style={{background:'#F8F7FF'}}
                  >
                    <p className="font-extrabold text-lg" style={{color:'#7C3AED'}}>{s.value}</p>
                    <p className="text-xs" style={{color:'#6B7280'}}>{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-3" style={{background:'#F0FDF4'}}>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} color="#16A34A" />
                  <span className="text-sm font-semibold" style={{color:'#16A34A'}}>3 novos pedidos via WhatsApp hoje</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-4 -left-4 rounded-2xl p-3 flex items-center gap-2"
              style={{background:'white',boxShadow:'0 4px 20px rgba(0,0,0,0.1)',border:'1px solid #E5E7EB'}}
            >
              <CheckCircle size={18} color="#7C3AED" />
              <span className="text-xs font-bold" style={{color:'#0F0A1E'}}>Site no ar em 72h</span>
            </div>

            <div
              className="absolute -bottom-4 -right-4 rounded-2xl p-3 flex items-center gap-2"
              style={{background:'linear-gradient(135deg,#7C3AED,#6D28D9)',boxShadow:'0 4px 20px rgba(124,58,237,0.35)'}}
            >
              <TrendingUp size={18} color="white" />
              <span className="text-xs font-bold" style={{color:'white'}}>+400% no Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
