import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroIllustration } from '@/components/HeroIllustration';
import { Link } from 'wouter';
import {
  Check,
  ChevronDown,
  Menu,
  X,
  Smartphone,
  Zap,
  ShieldCheck,
  Headset,
  ArrowRight,
  MonitorPlay,
  HeartHandshake,
  Star,
  Sparkles,
  BrainCircuit,
  MapPin,
  Gauge,
  Users,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  Globe,
  MessageSquare,
  BadgeCheck,
  Clock,
  Target,
  Phone,
  Store
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5519995466902";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-100 text-slate-900 font-sans selection:bg-slate-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* NAVBAR */}
     <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg flex items-center justify-center"><img src="/favicon.png" alt="Logo" className="w-9 h-9" /></div> <a href="/">
           <span className="text-2xl font-bold text-slate-600 ">Site<span className="text-blue-600 font-bold text-2xl">Fácil</span></span></a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            <a href="#ia" className="hover:text-blue-600 transition-colors">IA para negócios</a>
            <a href="#presenca-digital" className="hover:text-blue-600 transition-colors">Presença Digital</a>
            <a href="#como-funciona" className="hover:text-blue-600 transition-colors">Como funciona</a>
            <a href="#exemplos" className="hover:text-blue-600 transition-colors">Exemplos</a>
            <a href="#precos" className="hover:text-blue-600 transition-colors">Preços</a>
          </nav>

          <div className="hidden md:block">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4 text-center">
                <a href="#ia" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">IA para negócios</a>
                <a href="#presenca-digital" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Presença Digital</a>
                <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Como funciona</a>
                <a href="#exemplos" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Exemplos</a>
                <a href="#precos" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">Preços</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium py-2">FAQ</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-3 rounded-lg font-medium mt-2">
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        
        {/* HERO SECTION */}
       <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-60 pointer-events-none" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* Texto — Esquerda */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          A solução definitiva para o seu negócio
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Seu negócio merece um{' '}
          <span className="text-blue-600">site profissional.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Tenha uma presença online de respeito para sua barbearia, padaria ou loja sem gastar fortunas e sem dor de cabeça. Rápido, bonito e pronto para vender.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2"
          >
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#exemplos"
            className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            Ver exemplos
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-50 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="flex text-amber-400">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>+ de 200 negócios atendidos</span>
          </div>
        </div>
      </motion.div>

      {/* Ilustração — Direita */}
      <div className="flex-1 w-full hidden lg:block">
        <HeroIllustration />
      </div>

    </div>
  </div>
</section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher a SiteFácil?</h2>
              <p className="text-lg text-slate-600">Esqueça agências caras ou plataformas difíceis de usar.</p>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: Zap, title: "Rápido de entregar", desc: "Seu site pronto e no ar em até 7 dias úteis." },
                { icon: ShieldCheck, title: "Preço Fixo", desc: "Sem surpresas no final. Você sabe exatamente o que vai pagar." },
                { icon: HeartHandshake, title: "Sem Mensalidade", desc: "O site é seu. Pague apenas a taxa anual de servidor a partir do 2º ano." },
                { icon: Smartphone, title: "Mobile-First", desc: "Feito para brilhar na tela do celular, onde seus clientes estão." },
                { icon: Headset, title: "Suporte Incluso", desc: "Precisou mudar um telefone ou foto? É só chamar no WhatsApp." },
                { icon: MonitorPlay, title: "Design Premium", desc: "Visual moderno que passa confiança e converte mais clientes." }
              ].map((benefit, i) => (
                <motion.div key={i} variants={fadeIn} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* POR QUE NOS ESCOLHER — TRUST BADGES */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Por que nos escolher?
              </h2>
              <p className="text-lg text-slate-600">
                Mais do que entregar um site — entregamos resultados.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {[
                { icon: Gauge, label: "Desenvolvimento Ágil", sub: "Entrega em até 7 dias" },
                { icon: Headset, label: "Suporte Especializado", sub: "Resposta em até 2h no WhatsApp" },
                { icon: Target, label: "Focado em Conversão", sub: "Design que gera resultados" },
                { icon: BadgeCheck, label: "Transparência Total", sub: "Sem letras miúdas" }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-center group cursor-default"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{badge.label}</h3>
                  <p className="text-xs text-slate-500">{badge.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Metodologia Ágil", "Consultoria Personalizada", "Resultados Mensuráveis",
                "Preço Justo", "Manutenção Contínua", "SLA de Entrega"
              ].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ASSESSORIA EM IA */}
        <section id="ia" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 -mt-16 -ml-16 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 -mb-16 -mr-16 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-4 border border-blue-100">
                <Sparkles className="w-4 h-4" />
                Nova oferta
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Assessoria em IA para pequenos negócios
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Inteligência artificial ao alcance do seu negócio. Sem complicação, sem mensalidade cara — e com resultados que você pode medir.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diagnóstico Gratuito de IA</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Analisamos seu negócio e identificamos até <strong className="text-white">5 oportunidades práticas</strong> onde inteligência artificial pode gerar mais receita, reduzir custos ou automatizar tarefas repetitivas.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Automação de atendimento ao cliente via WhatsApp",
                    "Geração de conteúdo para redes sociais com IA",
                    "Segmentação inteligente de clientes e campanhas",
                    "Previsão de demanda e gestão de estoque simplificada",
                    "Análise de feedbacks e avaliações automaticamente"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Solicitar Diagnóstico Gratuito
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-slate-600 hover:border-slate-500 text-slate-300 font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Falar com Consultor
                  </a>
                </div>

                <p className="text-center text-slate-500 text-xs mt-4">
                  Sem compromisso. Análise realizada em até 48h úteis.
                </p>
              </motion.div>

              {/* Mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Clock, title: "Análise em 48h", desc: "Receba seu diagnóstico completo em até 48h úteis após o preenchimento." },
                  { icon: TrendingUp, title: "ROI Comprovado", desc: "Casos reais de clientes que aumentaram receita com as recomendações." },
                  { icon: Users, title: "Feito pra Você", desc: "Consultoria personalizada para o seu segmento e porte de negócio." }
                ].map((mini, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-100"
                  >
                    <mini.icon className="w-5 h-5 text-blue-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{mini.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{mini.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRESENCE DIGITAL — GOOGLE MAPS BUSINESS PROFILE */}
        <section id="presenca-digital" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-medium text-sm mb-6 border border-green-100">
                  <Globe className="w-4 h-4" />
                  Presence Digital
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Seja encontrado por clientes na sua região
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  O <strong>Google Maps Business Profile</strong> é a ficha do seu negócio no Google. Quando alguém pesquisa "barbearia perto de mim" ou "padaria no centro", seu negocio aparece — com avaliações, horário, telefone e directions para chegar até você.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: MapPin, title: "Apareça nas buscas locais", desc: "Seu negocio destaque quando clientes buscam serviços na sua região." },
                    { icon: Star, title: "Construa credibilidade com avaliações", desc: "Avaliações genuínas no Google constroem confiança e atraem mais clientes." },
                    { icon: Phone, title: "Contato direto sem intermediários", desc: "Botões de ligar, enviar mensagem e ver directions — tudo na ficha do Google." },
                    { icon: Globe, title: "Presença digital completa e oficial", desc: "Fique visivel 24h por dia, 7 dias por semana — mesmo enquanto você dorme." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 text-green-600 border border-slate-100 shadow-sm">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-colors"
                >
                  Criar meu perfil no Google
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Right side — visual mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                  {/* Mock Google Maps Business Profile card */}
                  <div className="bg-green-600 px-6 py-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-sm">Google Business Profile</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center shrink-0">
                        <Store className="w-8 h-8 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5">Barbearia do Carlão</h4>
                        <div className="flex items-center gap-1 mb-1">
                          <div className="flex text-amber-400">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                          </div>
                          <span className="text-xs text-slate-500">4.9 (127 avaliações)</span>
                        </div>
                        <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Aberto ⋅ Fecha às 19h</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>R. das Flores, 123 — Centro, Americana/SP</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span>(19) 99999-9999</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-400" />
                        <span>barberiadocarlao.com.br</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {["Ligar", "Directions", "WhatsApp"].map((btn, i) => (
                        <button key={i} className={`py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-blue-600 text-white' : i === 1 ? 'bg-slate-100 text-slate-700' : 'bg-green-600 text-white'}`}>
                          {btn}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-100 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-slate-900">89%</p>
                        <p className="text-xs text-slate-500">Taxa de cliques</p>
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-slate-900">+34%</p>
                        <p className="text-xs text-slate-500">Visitas este mês</p>
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-slate-900">18</p>
                        <p className="text-xs text-slate-500">Novos clientes/mês</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +34% visitas
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Perfil verificado
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como-funciona" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona?</h2>
              <p className="text-lg text-slate-400">Três passos simples separam você do seu novo site.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-800 z-0"></div>
              
              {[
                { step: "1", title: "Escolha seu modelo", desc: "Navegue pelos nossos templates feitos para o seu nicho e escolha o seu favorito." },
                { step: "2", title: "Nos envie seus dados", desc: "Mande suas fotos, textos e contatos direto pelo nosso WhatsApp. Sem formulários complexos." },
                { step: "3", title: "Receba seu site", desc: "Nossa equipe monta tudo e coloca seu site no ar, pronto para receber seus clientes." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-3xl font-bold text-blue-400 mb-6 border-8 border-slate-900 shadow-xl">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXAMPLES */}
        <section id="exemplos" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Feito para o seu negócio</h2>
              <p className="text-lg text-slate-600">Modelos reais, testados e otimizados para converter visitantes em clientes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Barbearia", desc: "Visual moderno, forte e focado em agendamentos.", img: "/assets/barbearia-niche.jpg", link: "/demo/barbearia", tag: "Masculino" },
                { title: "Padaria & Café", desc: "Quente, acolhedor e com destaque para encomendas.", img: "/assets/padaria-niche.jpg", link: "/demo/padaria", tag: "Apetitoso" },
                { title: "Vestuário Feminino", desc: "Elegante, minimalista e perfeito para catálogos.", img: "/assets/vestuario-niche.jpg", link: "/demo/vestuario", tag: "Elegante" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:border-blue-200 transition-all flex flex-col"
                >
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={`Template para ${item.title}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1">{item.desc}</p>
                    <Link href={item.link} className="inline-flex items-center justify-center w-full bg-slate-100 text-slate-800 font-medium py-3 rounded-xl hover:bg-slate-200 transition-colors">
                      Ver exemplo ao vivo
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="precos" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Preços simples e justos</h2>
              <p className="text-lg text-slate-600">Sem taxas escondidas. Pague uma vez e o site é seu.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Básico", price: "297", desc: "Perfeito para quem está começando agora.", features: ["Site One-Page completo", "Botão direto para WhatsApp", "Formulário de contato", "Otimizado para celular", "Hospedagem inclusa (1º ano)"] },
                { name: "Profissional", price: "497", desc: "A escolha ideal para negócios locais.", popular: true, features: ["Site One-Page avançado", "Galeria de até 15 fotos", "Domínio grátis (.com.br) no 1º ano", "Otimização SEO básica", "Suporte prioritário via WhatsApp"] },
                { name: "Premium", price: "797", desc: "Para marcas que querem se destacar.", features: ["Site com múltiplas páginas", "Blog ou Catálogo integrado", "Domínio grátis no 1º ano", "Otimização SEO avançada", "Painel simples para edição"] }
              ].map((plan, i) => (
                <div key={i} className={`relative flex flex-col rounded-3xl p-8 ${plan.popular ? 'bg-slate-900 text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-900 border border-slate-200'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                      MAIS POPULAR
                    </div>
                  )}
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-blue-400' : 'text-slate-500'}`}>{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-medium">R$</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <p className={`text-sm mb-8 ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{plan.desc}</p>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                  >
                    Quero este plano
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Quem confiou, recomenda.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Carlos T.", biz: "Barbearia do Carlão", text: "Achei que ia ser caro e super demorado, mas em 5 dias meu site estava no ar. A quantidade de agendamentos pelo WhatsApp dobrou." },
                { name: "Mariana L.", biz: "Pão Nosso Padaria", text: "Meus clientes agora fazem encomenda direto pelo site. O visual ficou tão lindo que parece padaria de grife, mas cobram um preço super justo!" },
                { name: "Juliana R.", biz: "Boutique Elegance", text: "O site ficou exatamente com a cara da minha loja. Passa muita credibilidade. A equipe da SiteFácil me ajudou com tudo pelo Whats." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.biz}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Quanto tempo demora para ficar pronto?", a: "Seu site é entregue em até 7 dias úteis após o envio das informações (textos, fotos, contatos)." },
                { q: "O site fica no meu nome?", a: "Com certeza. Registramos o domínio no seu CPF ou CNPJ. Você é o dono do seu site." },
                { q: "Tem mensalidade?", a: "Não cobramos mensalidade para a criação. Você paga apenas o valor do projeto. A partir do segundo ano, há apenas a taxa de renovação do domínio e hospedagem (aprox. R$ 150/ano)." },
                { q: "O site funciona bem no celular?", a: "Sim! Construímos nossos sites com a abordagem Mobile-First. Eles funcionam perfeitamente em qualquer tamanho de tela." },
                { q: "O valor inclui o domínio (.com.br)?", a: "Nos planos Profissional e Premium, o primeiro ano do domínio e hospedagem são por nossa conta!" },
                { q: "Posso editar o site depois?", a: "Sim, no plano Premium você recebe acesso a um painel. Nos outros planos, qualquer alteração simples (como mudar um telefone) fazemos para você via WhatsApp sem custo adicional." }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para ter seu site profissional?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Dê o próximo passo no seu negócio. Fale conosco agora e veja como é simples e barato ter uma presença online de respeito.
            </p>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Fale com um especialista</h3>
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(WHATSAPP_URL, '_blank');
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
                  <input type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Como podemos te chamar?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Negócio</label>
                  <input type="text" required className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Ex: Barbearia, Loja de roupas..." />
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg mt-4 flex items-center justify-center gap-2">
                  Enviar via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="text-xl font-bold text-white tracking-tight">SiteFácil</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} SiteFácil. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href={WHATSAPP_URL} className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center text-left p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: 'auto' }} 
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
