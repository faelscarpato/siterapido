import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Coffee, MapPin, Phone, Instagram, Clock } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Padaria() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#4A3728] font-sans">
      
      {/* FLOATING BACK BUTTON */}
      <Link href="/" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-[#4A3728] text-[#FFFBF5] px-5 py-3 rounded-full font-medium shadow-xl hover:bg-[#322318] transition-transform hover:scale-105">
        <ArrowLeft className="w-4 h-4" />
        Voltar para SiteFácil
      </Link>

      {/* NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-40 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-[#E07A5F]" />
            <span className="font-serif text-2xl font-bold text-[#4A3728] tracking-tight">Pão Doce</span>
          </div>
          <button className="hidden sm:block bg-[#E07A5F] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#D56A4F] transition-colors shadow-sm">
            Fazer Encomenda
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E1D2]/30 -z-10 rounded-br-[100px] md:rounded-br-[200px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#E07A5F] font-medium text-sm mb-6 shadow-sm border border-[#F4E1D2]">
              Assados frescos todos os dias
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A3728] mb-6 leading-[1.1]">
              Feito com carinho,<br/>entregue com <span className="text-[#E07A5F]">amor.</span>
            </h1>
            <p className="text-lg text-[#735A47] mb-10 max-w-lg leading-relaxed">
              O cheiro de pão quente logo de manhã. Bolos que abraçam a alma e aquele café perfeito para começar o dia bem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E07A5F] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#D56A4F] transition-colors shadow-lg hover:shadow-[#E07A5F]/20">
                Fazer Encomenda
              </button>
              <button className="bg-white text-[#4A3728] px-8 py-4 rounded-full font-medium text-lg border border-[#F4E1D2] hover:bg-[#FFFBF5] transition-colors">
                Ver Cardápio
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
              <img src="/assets/padaria-niche.jpg" alt="Pães quentinhos" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl -rotate-3 border border-[#F4E1D2]">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-[#E07A5F]/10 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-[#E07A5F]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#4A3728]">Desde 1998</p>
                  <p className="text-xs text-[#735A47]">Tradição na família</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#4A3728] mb-4">Nossas Delícias</h2>
          <p className="text-[#735A47] text-lg max-w-2xl mx-auto">Tudo produzido artesanalmente no dia, com ingredientes selecionados.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Pão Francês Quentinho", price: "R$ 18/kg", img: "/assets/padaria-pao.jpg" },
            { name: "Bolo de Cenoura c/ Chocolate", price: "R$ 45/inteiro", img: "/assets/padaria-bolo.jpg" },
            { name: "Cappuccino da Casa", price: "R$ 12", img: "/assets/padaria-cafe.jpg" },
            { name: "Torta de Morango Especial", price: "R$ 89", img: "/assets/padaria-torta.jpg" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#F4E1D2] group"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#4A3728] mb-2 leading-tight">{item.name}</h3>
                <p className="text-[#E07A5F] font-medium">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFO & HOW TO ORDER */}
      <section className="py-24 px-4 bg-[#F4E1D2]/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A3728] mb-4">Como fazer encomendas?</h2>
              <p className="text-[#735A47] leading-relaxed">Aceitamos encomendas de bolos decorados, tortas doces e salgadas, pães especiais e salgadinhos para festas. O pedido precisa ser feito com antecedência.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F4E1D2]">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Escolha as opções</h4>
                    <p className="text-sm text-[#735A47]">Peça o cardápio completo pelo WhatsApp.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Antecedência</h4>
                    <p className="text-sm text-[#735A47]">Pedidos com no mínimo 48h de antecedência.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E07A5F] text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Retirada ou Entrega</h4>
                    <p className="text-sm text-[#735A47]">Entregamos na região (consulte a taxa).</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#4A3728] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Clock className="w-32 h-32" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 relative z-10">Horário de Funcionamento</h3>
            
            <ul className="space-y-6 text-lg relative z-10">
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[#F4E1D2]">Segunda a Sexta</span>
                <span className="font-medium">06:00 - 20:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[#F4E1D2]">Sábado</span>
                <span className="font-medium">06:00 - 14:00</span>
              </li>
              <li className="flex justify-between items-center text-white/50">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>

            <div className="mt-12 bg-white/10 rounded-xl p-6 backdrop-blur flex items-center gap-4 relative z-10">
              <MapPin className="w-6 h-6 text-[#E07A5F]" />
              <div>
                <p className="font-medium">Rua das Flores, 123</p>
                <p className="text-sm text-[#F4E1D2]">Centro - Cidade/UF</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A3728] mb-16">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "A melhor torta de morango da cidade! Encomendei pro meu aniversário e todos os convidados amaram.", author: "Cláudia S." },
            { text: "Passo toda manhã para pegar meu pão na chapa com café. O atendimento é sempre maravilhoso e acolhedor.", author: "Roberto F." },
            { text: "Os pães artesanais de fermentação natural são um espetáculo. Dá pra sentir que é feito com amor mesmo.", author: "Camila N." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#F4E1D2] flex flex-col items-center">
              <div className="text-4xl text-[#E07A5F]/20 font-serif mb-4">"</div>
              <p className="text-[#735A47] italic mb-6">"{t.text}"</p>
              <p className="font-bold text-[#4A3728] mt-auto">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 pb-8 border-t border-[#F4E1D2]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8">
            <Coffee className="w-8 h-8 text-[#E07A5F]" />
            <span className="font-serif text-3xl font-bold text-[#4A3728] tracking-tight">Pão Doce</span>
          </div>
          
          <div className="flex gap-6 mb-12">
            <a href="#" className="w-12 h-12 rounded-full bg-[#FFFBF5] flex items-center justify-center text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors border border-[#F4E1D2]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#FFFBF5] flex items-center justify-center text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-colors border border-[#F4E1D2]">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-[#735A47] text-sm text-center">
            © {new Date().getFullYear()} Padaria Pão Doce. Este é um site de demonstração da SiteFácil.
          </p>
        </div>
      </footer>

    </div>
  );
}
