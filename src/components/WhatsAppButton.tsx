import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5519995466902";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            <Tooltip />
          </AnimatePresence>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors group"
            style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-green-400"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Tooltip() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hidden md:flex items-center"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 'auto' }}
            exit={{ opacity: 0, x: 10, width: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-2xl px-5 py-3 shadow-xl border border-slate-100 whitespace-nowrap">
              <p className="text-sm font-semibold text-slate-800">Fale com um Especialista</p>
              <p className="text-xs text-slate-500 mt-0.5">Resposta rápida no WhatsApp</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
      >
        <div className="bg-white rounded-full px-3.5 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full relative">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
          </div>
          <span className="text-xs font-medium text-slate-700">Online</span>
        </div>
      </motion.div>
    </motion.div>
  );
}