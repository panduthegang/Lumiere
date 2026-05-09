import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, Menu, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const perfumes = [
  {
    id: 1,
    name: 'Oud Nuit',
    notes: 'Agarwood, Rose, Amber',
    price: '$280',
    img: '/Product-1.png',
  },
  {
    id: 2,
    name: 'Santal Blanc',
    notes: 'Sandalwood, Fig, Cardamom',
    price: '$240',
    img: '/Product-2.png',
  },
  {
    id: 3,
    name: 'Fleur d\'Oranger',
    notes: 'Orange Blossom, Neroli, Musk',
    price: '$210',
    img: '/Product-3.png',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-luxury-bg)] overflow-hidden font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[var(--color-luxury-bg)]/90 backdrop-blur-md border-[var(--color-luxury-ink)]/10 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-[var(--color-luxury-ink)] transition-opacity">
              <Menu size={20} strokeWidth={1.5} />
            </button>
            <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-medium">
              <a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Collections</a>
              <a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Bespoke</a>
            </div>
          </div>
          
          <a href="#" className="text-2xl md:text-3xl font-serif tracking-widest text-center absolute left-1/2 -translate-x-1/2">
            LUMIÈRE
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-medium">
              <a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Our Story</a>
              <a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Stores</a>
            </div>
            <button className="text-[var(--color-luxury-ink)] transition-opacity">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-[var(--color-luxury-ink)] transition-opacity relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-[var(--color-luxury-ink)] text-[var(--color-luxury-bg)] text-[9px] w-4 h-4 flex items-center justify-center rounded-none">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y }}
            src="/Perfume-Hero.png"
            alt="Lumière Eau de Parfum"
            className="w-full h-[120%] object-cover object-[75%_center] md:object-center"
            referrerPolicy="no-referrer"
          />
          {/* subtle gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-luxury-bg)]/80 md:from-[var(--color-luxury-bg)]/50 via-[var(--color-luxury-bg)]/10 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[var(--color-luxury-bg)] to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-24 max-w-[100rem] mx-auto w-full flex flex-col items-start text-left mt-12 md:mt-0">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold text-[var(--color-luxury-gold)]"
          >
            Signature Edition
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] mb-6 font-light tracking-tight leading-[0.85] text-[var(--color-luxury-ink)]"
          >
            Essence of <br/>
            <span className="italic text-[var(--color-luxury-gold)] block mt-2">Light</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm md:text-base max-w-md mb-10 leading-relaxed font-medium text-[var(--color-luxury-ink)]/80"
          >
            A radiant blend of wild rose and sun-kissed citrus. 
            Captured at the golden hour in the heart of the Riviera.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-[var(--color-luxury-gold)] text-white group flex items-center gap-4 px-8 py-4 rounded-none text-[11px] uppercase tracking-[0.15em] transition-colors duration-500 shadow-xl shadow-[var(--color-luxury-gold)]/20"
          >
            Discover Lumière
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 md:px-12 lg:px-20 xl:px-24 max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Signature <span className="italic text-[var(--color-luxury-gold)]">Scents</span>
            </h2>
            <p className="text-sm opacity-70 max-w-sm">
              Our most beloved fragrances, crafted with the finest ingredients sourced from around the globe.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-3 bg-[var(--color-luxury-gold)] text-white px-6 py-3 rounded-none text-[10px] uppercase tracking-[0.15em] transition-colors duration-500 shadow-lg shadow-[var(--color-luxury-gold)]/20">
            View All Fragrances
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 md:gap-y-16">
          {perfumes.map((perfume, i) => (
            <motion.div 
              key={perfume.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[var(--color-luxury-ink)]/5">
                <img 
                  src={perfume.img} 
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[var(--color-luxury-ink)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <button className="bg-[var(--color-luxury-gold)] text-white w-full py-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 shadow-lg shadow-[var(--color-luxury-gold)]/20">
                    Add to Bag
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="font-serif text-3xl font-light mb-2 text-[var(--color-luxury-ink)]">{perfume.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-luxury-ink)]/60 mb-3">{perfume.notes}</p>
                <span className="text-sm text-[var(--color-luxury-gold)] block transition-transform duration-500 group-hover:-translate-y-1">{perfume.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-[#F4EFEA] text-[var(--color-luxury-ink)]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="aspect-[3/4] max-w-md mx-auto lg:max-w-none relative"
          >
            {/* Oval mask for distinctive luxury feel */}
            <div className="absolute inset-0 [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=\&quot;0 0 100 120\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;><ellipse cx=\&quot;50\&quot; cy=\&quot;60\&quot; rx=\&quot;50\&quot; ry=\&quot;60\&quot;/></svg>')] [mask-size:100%_100%] [mask-repeat:no-repeat]">
              <img 
                src="https://images.unsplash.com/photo-1615634260167-c8cd00ae6ce2?auto=format&fit=crop&q=80&w=1200" 
                alt="Perfume creation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-medium mb-6 block text-[var(--color-luxury-gold)]">
              The Art of Extraction
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1]">
              Crafted in <br/>
              <span className="italic text-[var(--color-luxury-gold)]">Grasse</span>, France
            </h2>
            <p className="text-[var(--color-luxury-ink)]/80 font-medium text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Every drop of Lumière perfume is a testament to generations of olfactory mastery. We source the rarest blooms at their peak, utilizing centuries-old enfleurage techniques alongside modern precision to capture the very soul of the flower.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="font-serif text-4xl mb-2">98<span className="text-xl">%</span></p>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-medium">Natural Origin</p>
              </div>
              <div>
                <p className="font-serif text-4xl mb-2">300<span className="text-xl">+</span></p>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-medium">Hours of Maceration</p>
              </div>
            </div>

            <button className="bg-[var(--color-luxury-gold)] text-white group flex items-center gap-4 px-8 py-4 rounded-none text-[11px] uppercase tracking-[0.15em] transition-colors duration-500 shadow-xl shadow-[var(--color-luxury-gold)]/20 w-fit">
              Discover Our Process
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-luxury-ink)]/10 pt-24 pb-12 px-6 md:px-12 lg:px-20 xl:px-24 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl tracking-widest mb-6">L U M I È R E</h3>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed mb-8">
              Elevating the everyday through the transformative power of scent.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Pinterest', 'Journal'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-widest border border-[var(--color-luxury-ink)]/20 px-4 py-2 rounded-none transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">All Fragrances</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Home Ambience</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Sample Sets</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">Assistance</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--color-luxury-ink)]/10 text-[10px] uppercase tracking-widest opacity-50">
          <p>&copy; {new Date().getFullYear()} LUMIÈRE PERFUMES PARIS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
