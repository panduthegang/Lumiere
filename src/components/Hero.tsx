import { motion, MotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  y: MotionValue<number>;
}

export const Hero = ({ y }: HeroProps) => {
  return (
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
  );
};
