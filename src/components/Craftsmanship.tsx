import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Craftsmanship = () => {
  return (
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
  );
};
