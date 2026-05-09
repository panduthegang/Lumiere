import { motion } from 'motion/react';
import { useState } from 'react';

const perfumes = [
  {
    id: 1,
    name: 'Ambre Royal',
    notes: 'Amber, Vanilla, Precious Woods',
    price: '$280',
    img: '/Product-1.png',
  },
  {
    id: 2,
    name: 'Rose de Mai',
    notes: 'Centifolia Rose, Peony, White Musk',
    price: '$240',
    img: '/Product-2.png',
  },
  {
    id: 3,
    name: 'Nuit d\'Azur',
    notes: 'Sea Salt, Blue Sage, Bergamot',
    price: '$210',
    img: '/Product-3.png',
  },
  {
    id: 4,
    name: 'Violette de Mai',
    notes: 'Violet, Iris, Cashmere Wood',
    price: '$240',
    img: '/Product-4.png',
  },
  {
    id: 5,
    name: 'Nectar Solaire',
    notes: 'Bergamot, Solar Musk, Neroli',
    price: '$190',
    img: '/Product-5.png',
  },
  {
    id: 6,
    name: 'Rose Rubis',
    notes: 'Damask Rose, Saffron, Dark Vanilla',
    price: '$225',
    img: '/Product-6.png',
  },
];

export const FeaturedCollection = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePerfumes = showAll ? perfumes : perfumes.slice(0, 3);

  return (
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 md:gap-y-16">
        {visiblePerfumes.map((perfume, i) => (
          <motion.div 
            key={perfume.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: (i % 3) * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

      <div className="mt-20 flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-[var(--color-luxury-gold)] text-white px-10 py-4 rounded-none text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 shadow-lg shadow-[var(--color-luxury-gold)]/20"
        >
          {showAll ? 'Show Less' : 'View All Fragrances'}
        </button>
      </div>
    </section>
  );
};

