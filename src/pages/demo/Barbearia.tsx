import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Scissors, Clock, MapPin, Phone, Instagram, Check } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Barbearia() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* FLOATING BACK BUTTON */}
      <Link href="/" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-bold shadow-xl hover:bg-gray-200 transition-transform hover:scale-105 border-2 border-white/20">
        <ArrowLeft className="w-4 h-4" />
        Voltar para SiteFácil
      </Link>

      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-['Montserrat'] font-black text-2xl tracking-tighter text-white">
            NAVALHA <span className="text-amber-500">&</span> LENHA
          </div>
          <button className="hidden sm:block bg-amber-500 text-zinc-950 px-6 py-2.5 rounded-md font-bold hover:bg-amber-400 transition-colors">
            Agendar agora
          </button>
          <button className="sm:hidden text-white">
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/assets/barbearia-niche.jpg" 
          alt="Interior da Barbearia" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <p className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Tradição & Respeito</p>
            <h1 className="font-['Montserrat'] text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.9]">
              Estilo que <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">faz diferença</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
              Cortes clássicos, barba na toalha quente e aquele ambiente que você respeita.
            </p>
            <button className="bg-amber-500 text-zinc-950 px-10 py-4 rounded-md font-bold text-lg hover:bg-amber-400 transition-colors hover:scale-105 active:scale-95 duration-200">
              Agendar meu horário
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
            className="text-center mb-16"
          >
            <Scissors className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-black text-white uppercase">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              { name: "Corte Clássico / Degradê", price: "35", desc: "Acabamento na navalha" },
              { name: "Barba Tradicional", price: "25", desc: "Toalha quente e balm" },
              { name: "Combo: Cabelo + Barba", price: "55", desc: "O pacote completo" },
              { name: "Hidratação VIP", price: "40", desc: "Com produtos premium" },
              { name: "Pigmentação Cabelo", price: "30", desc: "Disfarce natural" },
              { name: "Corte Infantil", price: "30", desc: "Até 10 anos" }
            ].map((srv, i) => (
              <div key={i} className="flex justify-between items-end border-b border-zinc-800 pb-4 group hover:border-amber-500/50 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{srv.name}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{srv.desc}</p>
                </div>
                <div className="font-['Montserrat'] font-black text-2xl text-amber-500">
                  <span className="text-sm font-medium text-amber-500/50 mr-1">R$</span>{srv.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-4 bg-zinc-950 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "/assets/barbearia-corte1.jpg",
            "/assets/barbearia-corte2.jpg",
            "/assets/barbearia-ambiente.jpg",
            "/assets/barbearia-corte3.jpg"
          ].map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square relative group overflow-hidden bg-zinc-900"
            >
              <img 
                src={src} 
                alt="Galeria" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT & TESTIMONIALS */}
      <section className="py-24 px-4 bg-zinc-900 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            <h2 className="font-['Montserrat'] text-3xl font-black text-white uppercase mb-6">Mais que um corte,<br/>uma experiência.</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              A Navalha & Lenha nasceu da paixão pela barbearia clássica. Aqui, não se trata apenas de aparar o cabelo. É sobre dar um tempo da rotina, tomar uma cerveja gelada, bater um bom papo e sair renovado.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Trabalhamos com os melhores produtos do mercado e profissionais experientes para garantir que seu visual fique sempre impecável.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-zinc-800 rounded-full overflow-hidden border-2 border-amber-500">
                <img src="https://i.pravatar.cc/150?img=11" alt="Barbeiro Chefe" />
              </div>
              <div>
                <p className="font-bold text-white">Marcelo Silva</p>
                <p className="text-sm text-amber-500">Fundador & Barbeiro Chefe</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
            className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 relative"
          >
            <div className="absolute -top-4 -left-4 text-6xl text-amber-500/20 font-serif">"</div>
            <div className="space-y-8 relative z-10">
              <div>
                <p className="italic text-zinc-300 mb-4">"Melhor degradê da cidade. O ambiente é sensacional, atendimento nota 10 e a cerveja tá sempre trincando."</p>
                <p className="text-sm font-bold text-amber-500">— Ricardo M.</p>
              </div>
              <div className="h-px w-full bg-zinc-800"></div>
              <div>
                <p className="italic text-zinc-300 mb-4">"Levo meu filho todo mês. Os caras têm a maior paciência do mundo e o corte sai perfeito. Recomendo de olhos fechados."</p>
                <p className="text-sm font-bold text-amber-500">— Fernando Costa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer className="bg-zinc-950 pt-20 pb-10 px-4 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-['Montserrat'] font-black text-2xl tracking-tighter text-white mb-6">
              NAVALHA <span className="text-amber-500">&</span> LENHA
            </div>
            <p className="text-zinc-500 text-sm">
              Sua barbearia de confiança. Onde o estilo clássico encontra a técnica moderna.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider text-sm">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Instagram className="w-5 h-5 text-amber-500 shrink-0" />
                <span>@navalhaelenha</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider text-sm">Horário</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex justify-between"><span>Segunda:</span> <span className="text-zinc-500">Fechado</span></li>
              <li className="flex justify-between"><span>Ter - Sex:</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span>09:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span className="text-zinc-500">Fechado</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-zinc-600 text-sm border-t border-zinc-900 pt-8">
          © {new Date().getFullYear()} Navalha & Lenha. Este é um site de demonstração da SiteFácil.
        </div>
      </footer>

    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
