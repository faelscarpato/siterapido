import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Instagram, ArrowRight, Minus } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Vestuario() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-['Inter'] selection:bg-[#E5D5C5] selection:text-black">
      
      {/* FLOATING BACK BUTTON */}
      <Link href="/" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-[#E5D5C5] text-[#2C2C2C] px-5 py-3 rounded-full font-medium shadow-xl hover:bg-white transition-transform hover:scale-105">
        <ArrowLeft className="w-4 h-4" />
        Voltar para SiteFácil
      </Link>

      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-['Playfair_Display'] italic text-2xl tracking-wide text-[#2C2C2C]">
            Élégance
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-[#555]">
            <a href="#" className="hover:text-black transition-colors">Nova Coleção</a>
            <a href="#" className="hover:text-black transition-colors">Looks</a>
            <a href="#" className="hover:text-black transition-colors">Sobre</a>
          </nav>
          <button className="text-xs tracking-widest uppercase border-b border-[#2C2C2C] pb-1 hover:text-[#7A6A5E] hover:border-[#7A6A5E] transition-colors">
            Ver Coleção
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto w-full">
          <p className="text-[#7A6A5E] tracking-[0.3em] uppercase text-xs mb-8">Outono / Inverno 2024</p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-12">
            Vista-se com <br/><span className="italic text-[#7A6A5E]">confiança.</span>
          </h1>
          
          <div className="w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden mb-12">
            <img 
              src="/assets/vestuario-niche.jpg" 
              alt="Boutique Elegance" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <button className="bg-[#2C2C2C] text-[#FAF9F6] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#7A6A5E] transition-colors duration-300">
            Descubra a Coleção
          </button>
        </motion.div>
      </section>

      {/* NEW COLLECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-['Playfair_Display'] text-4xl mb-4">Nova Coleção</h2>
            <p className="text-[#7A6A5E] font-light">Peças atemporais para a mulher moderna.</p>
          </motion.div>
          <a href="#" className="flex items-center gap-2 text-sm tracking-widest uppercase border-b border-transparent hover:border-[#2C2C2C] pb-1 transition-all">
            Ver tudo <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Vestido Seda Nude", price: "R$ 489", img: "/assets/vestuario-look1.jpg" },
            { name: "Blazer Alfaiataria", price: "R$ 520", img: "/assets/vestuario-look2.jpg" },
            { name: "Calça Linho Areia", price: "R$ 340", img: "/assets/vestuario-look3.jpg" },
            { name: "Conjunto Minimal", price: "R$ 650", img: "/assets/vestuario-look4.jpg" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-[#EAE7E0]">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <h3 className="text-sm font-medium tracking-wide mb-2">{item.name}</h3>
              <p className="text-[#7A6A5E] text-sm">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="py-32 px-6 bg-[#F2EFE9]">
        <div className="max-w-4xl mx-auto text-center">
          <Minus className="w-8 h-8 text-[#7A6A5E] mx-auto mb-10" strokeWidth={1} />
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl leading-tight mb-10 italic">
            "Acreditamos que a verdadeira elegância reside na simplicidade. Nossas peças são desenhadas para realçar, não esconder."
          </h2>
          <p className="text-[#7A6A5E] font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Fundada com o propósito de oferecer moda atemporal e de alta qualidade. Cada tecido é selecionado com cuidado, cada costura é pensada para garantir o caimento perfeito. Mais do que roupas, entregamos confiança.
          </p>
          <p className="text-sm tracking-widest uppercase font-medium">Ana Silva — Fundadora</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl mb-16 text-center">O que dizem sobre nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { text: "Caimento impecável. O vestido veste perfeitamente e o tecido tem um toque maravilhoso.", author: "Julia M." },
            { text: "Minha loja favorita. O atendimento pelo WhatsApp foi super atencioso e a entrega chegou super rápido e perfumada.", author: "Carolina T." },
            { text: "Roupas elegantes que duram. Comprei um blazer ano passado e continua parecendo novo.", author: "Beatriz L." }
          ].map((t, i) => (
            <div key={i} className="text-center px-4">
              <p className="font-['Playfair_Display'] text-lg italic text-[#555] mb-6">"{t.text}"</p>
              <Minus className="w-4 h-4 text-[#7A6A5E] mx-auto mb-2" strokeWidth={1} />
              <p className="text-xs tracking-widest uppercase">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-32 px-6 text-center border-t border-[#EAE7E0]">
        <h2 className="font-['Playfair_Display'] text-4xl mb-6">Atendimento Exclusivo</h2>
        <p className="text-[#7A6A5E] font-light mb-10 max-w-md mx-auto">
          Precisa de ajuda com tamanhos ou quer fazer um pedido? Nossa equipe está pronta para te atender.
        </p>
        <button className="border border-[#2C2C2C] text-[#2C2C2C] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#2C2C2C] hover:text-[#FAF9F6] transition-colors duration-300">
          Chamar no WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C2C2C] text-[#FAF9F6] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-['Playfair_Display'] italic text-2xl tracking-wide">
            Élégance
          </div>
          <div className="flex gap-8 text-sm font-light">
            <a href="#" className="hover:text-[#7A6A5E] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#7A6A5E] transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-[#7A6A5E] transition-colors">Contato</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/50 font-light">
          © {new Date().getFullYear()} Boutique Élégance. Este é um site de demonstração da SiteFácil.
        </div>
      </footer>

    </div>
  );
}
