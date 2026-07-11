import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Pizza, UtensilsCrossed, Clock, MapPin, Phone, Instagram } from 'lucide-react';

export default function Restaurante() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans">
      {/* FLOATING BACK BUTTON */}
      <Link href="/" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-zinc-100 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Voltar para SiteFácil
      </Link>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-md z-40 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold text-white tracking-tight">TRATTORIA BELLA</h1>
          </div>
          <a
            href="https://wa.me/5519995466902?text=Ol%C3%A1!%20Quero%20fazer%20uma%20reserva"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            FAZER RESERVA
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            SABOR AUTÊNTICO
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Culinária italiana de qualidade. Massas artesanais, ambiente acolhedor.
          </p>
          <a
            href="#cardapio"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            VER CARDÁPIO
          </a>
        </motion.div>
      </section>

      {/* CARDAPIO */}
      <section id="cardapio" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">NOSSO CARDÁPIO</h3>
            <p className="text-zinc-400 text-lg">Pratos preparados com ingredientes frescos e selecionados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Spaghetti Carbonara', desc: 'Massa fresca, bacon crocante, molho cremoso', price: 'R$ 42' },
              { name: 'Lasanha Bolonhesa', desc: 'Camadas de massa, molho de carne, queijo gratinado', price: 'R$ 48' },
              { name: 'Risotto de Fungi', desc: 'Arroz arbóreo, cogumelos frescos, parmigiano', price: 'R$ 45' },
              { name: 'Pizza Margherita', desc: 'Molho de tomate, mussarela, manjericão fresco', price: 'R$ 38' },
              { name: 'Gnocchi ao Pesto', desc: 'Nhoque caseiro, molho pesto de manjericão', price: 'R$ 40' },
              { name: 'Tiramisù', desc: 'Sobremesa clássica italiana com café e mascarpone', price: 'R$ 18' },
            ].map((prato, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-white">{prato.name}</h4>
                  <span className="text-red-500 font-bold text-lg">{prato.price}</span>
                </div>
                <p className="text-zinc-400">{prato.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">NOSSO AMBIENTE</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <UtensilsCrossed className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-white mb-6">NOSSA HISTÓRIA</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Fundada em 2020, a Trattoria Bella traz o sabor autêntico da Itália para Pedreira. 
            Nossas receitas são passadas de geração em geração, preparadas com amor e dedicação.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Venha conhecer nosso ambiente acolhedor e saborear pratos que vão além da comida — 
            são experiências que aquecem o coração.
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">ENDEREÇO</h4>
              <p className="text-zinc-400">Rua das Flores, 123<br />Centro, Pedreira/SP</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">HORÁRIO</h4>
              <p className="text-zinc-400">Ter a Dom: 11h - 23h<br />Segunda: Fechado</p>
            </div>
            <div>
              <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">CONTATO</h4>
              <p className="text-zinc-400">(19) 99546-6902<br />@trattoriabella</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-zinc-400 hover:text-red-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.me/5519995466902" target="_blank" rel="noopener" className="text-zinc-400 hover:text-red-500 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-zinc-500 text-sm">© 2024 Trattoria Bella. Site criado por SiteFácil.studio</p>
        </div>
      </footer>
    </div>
  );
}
