import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const pins = [
  { top: '18%', left: '22%', delay: 0.1 },
  { top: '28%', left: '58%', delay: 0.4 },
  { top: '42%', left: '35%', delay: 0.2 },
  { top: '55%', left: '70%', delay: 0.6 },
  { top: '72%', left: '28%', delay: 0.3 },
  { top: '76%', left: '62%', delay: 0.5 },
];

export function HeroMapLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_55%)]" />

      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <motion.path
          d="M80 180 C220 120, 340 120, 480 180 S760 250, 900 180 S1080 120, 1140 160"
          stroke="rgba(148,163,184,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
        <motion.path
          d="M140 320 C260 260, 380 260, 520 320 S780 400, 920 330 S1080 270, 1140 310"
          stroke="rgba(148,163,184,0.28)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.path
          d="M210 90 L210 700"
          stroke="rgba(148,163,184,0.18)"
          strokeWidth="2"
          strokeDasharray="4 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
        <motion.path
          d="M620 60 L620 740"
          stroke="rgba(148,163,184,0.18)"
          strokeWidth="2"
          strokeDasharray="4 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.1 }}
        />
        <motion.path
          d="M960 100 L960 720"
          stroke="rgba(148,163,184,0.18)"
          strokeWidth="2"
          strokeDasharray="4 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.2 }}
        />
      </svg>

      {pins.map((pin, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: pin.top, left: pin.left }}
          animate={{ y: [0, -6, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: pin.delay, ease: 'easeInOut' }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md scale-150" />
            <MapPin className="w-6 h-6 text-blue-500 drop-shadow" />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute top-[22%] left-[24%] flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 shadow-sm border border-slate-100"
        animate={{ y: [0, -4, 0], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
        ))}
      </motion.div>

      <motion.div
        className="absolute top-[44%] left-[62%] flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 shadow-sm border border-slate-100"
        animate={{ y: [0, -4, 0], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
        <span className="text-[10px] font-semibold text-slate-700">4.9</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[52%] rounded-full bg-blue-600/10 border border-blue-500/20 px-3 py-1 text-[10px] font-semibold text-blue-700 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        comércio local
      </motion.div>
    </div>
  );
}