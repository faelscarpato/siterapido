// src/components/HeroIllustration.tsx
import { motion } from 'framer-motion';
import { Star, Smartphone, Globe, Zap, ShieldCheck } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Barbearia',
    color: 'from-slate-900 to-slate-700',
    accent: '#3b82f6',
    tag: 'Masculino',
    bars: [70, 45, 85, 60],
  },
  {
    id: 2,
    name: 'Padaria & Café',
    color: 'from-amber-800 to-amber-600',
    accent: '#f59e0b',
    tag: 'Apetitoso',
    bars: [55, 80, 40, 90],
  },
  {
    id: 3,
    name: 'Boutique',
    color: 'from-pink-900 to-pink-600',
    accent: '#ec4899',
    tag: 'Elegante',
    bars: [90, 60, 75, 50],
  },
];

function MockBrowser({ template, delay = 0, className = '' }: { template: typeof templates[0]; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={`rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white ${className}`}
      style={{ minWidth: 220 }}
    >
      {/* Browser chrome */}
      <div className="bg-slate-100 px-3 py-2 flex items-center gap-1.5 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white rounded text-[9px] text-slate-400 px-2 py-0.5 border border-slate-200 truncate">
          {template.name.toLowerCase().replace(' ', '')}.com.br
        </div>
      </div>

      {/* Site mock content */}
      <div className={`bg-gradient-to-br ${template.color} p-4 relative overflow-hidden`} style={{ minHeight: 140 }}>
        {/* Hero area */}
        <div className="mb-3">
          <div className="h-2 w-16 rounded bg-white/30 mb-1.5" />
          <div className="h-1.5 w-24 rounded bg-white/20 mb-1" />
          <div className="h-1.5 w-20 rounded bg-white/20 mb-3" />
          <div className="flex gap-1.5">
            <div className="h-5 w-16 rounded-full text-[8px] font-bold flex items-center justify-center text-white" style={{ background: template.accent }}>
              Saiba mais
            </div>
            <div className="h-5 w-12 rounded-full bg-white/20 text-[8px] text-white/80 flex items-center justify-center">
              Ver mais
            </div>
          </div>
        </div>

        {/* Rating badge floating */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1 shadow-md"
        >
          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          <span className="text-[9px] font-bold text-slate-800">4.9</span>
        </motion.div>

        {/* Tag */}
        <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur text-white text-[8px] font-bold px-2 py-0.5 rounded-full border border-white/20">
          {template.tag}
        </div>

        {/* Bars animation */}
        <div className="absolute bottom-3 right-3 flex items-end gap-0.5">
          {template.bars.map((h, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-sm"
              style={{ background: template.accent, opacity: 0.7 }}
              initial={{ height: 0 }}
              animate={{ height: h * 0.25 }}
              transition={{ duration: 0.6, delay: delay + i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-white p-3">
        <div className="flex justify-between items-center mb-2">
          <div>
            <div className="h-2 w-20 rounded bg-slate-200 mb-1" />
            <div className="h-1.5 w-14 rounded bg-slate-100" />
          </div>
          <div className="w-7 h-7 rounded-full" style={{ background: template.accent + '20' }} />
        </div>
        <div className="flex gap-1">
          {[60, 40, 70].map((w, i) => (
            <div key={i} className="h-1 rounded bg-slate-100 flex-1" style={{ maxWidth: `${w}%` }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: 480 }}>
      
      {/* Glow de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-40" />
      </div>

      {/* Template cards em perspectiva */}
      <div className="relative flex items-end justify-center gap-4 px-4">

        {/* Card Esquerdo — menor, atrás */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 scale-90 origin-bottom"
          style={{ zIndex: 1 }}
        >
          <MockBrowser template={templates[0]} delay={0.4} />
        </motion.div>

        {/* Card Central — maior, frente */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ zIndex: 10 }}
        >
          {/* Mobile mockup do card central */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MockBrowser template={templates[1]} delay={0.2} className="scale-110 origin-bottom shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)]" />
          </motion.div>
        </motion.div>

        {/* Card Direito — menor, atrás */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 scale-90 origin-bottom"
          style={{ zIndex: 1 }}
        >
          <MockBrowser template={templates[2]} delay={0.4} />
        </motion.div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute top-8 left-4 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-slate-100"
      >
        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 text-green-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-800">Entrega em 7 dias</p>
          <p className="text-[9px] text-slate-400">Site pronto e no ar</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute top-8 right-4 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-slate-100"
      >
        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
          <Smartphone className="w-3.5 h-3.5 text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-800">Mobile-First</p>
          <p className="text-[9px] text-slate-400">100% responsivo</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="absolute bottom-4 left-6 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-slate-100"
      >
        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-800">+200 clientes</p>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-2 h-2 fill-amber-400 text-amber-400" />)}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-4 right-6 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-slate-100"
      >
        <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
          <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-800">Sem mensalidade</p>
          <p className="text-[9px] text-slate-400">Preço fixo, sem surpresas</p>
        </div>
      </motion.div>

      {/* Connecting dots / decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-300"
            style={{
              top: `${20 + i * 12}%`,
              left: `${5 + (i % 3) * 3}%`,
              opacity: 0.4,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
}