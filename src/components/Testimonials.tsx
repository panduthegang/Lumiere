import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Lumière is not just a fragrance; it's a sensory manifestation of Parisian history and modern elegance.",
    author: "Vogue France",
    role: "Editorial"
  },
  {
    quote: "The complexity of Ambre Royal is unparalleled. A true masterpiece of Grasse craftsmanship.",
    author: "Harper's Bazaar",
    role: "Beauty Desk"
  },
  {
    quote: "Redefining what it means to be a sustainable luxury house in the 21st century.",
    author: "Wallpaper*",
    role: "Design Review"
  },
  {
    quote: "Each bottle is a piece of art. The scents linger like a beautiful memory.",
    author: "The New York Times",
    role: "Style Section"
  },
  {
    quote: "Lumière captures the essence of a spring morning in Paris perfectly.",
    author: "Elle Decor",
    role: "Lifestyle"
  },
  {
    quote: "A transformative olfactory experience that stays with you long after the day ends.",
    author: "Condé Nast Traveler",
    role: "Luxury Travel"
  },
  {
    quote: "The gold standard of niche perfumery. Pure, raw, and incredibly sophisticated.",
    author: "GQ",
    role: "Grooming"
  },
  {
    quote: "Artistry in a bottle. Lumière is the scent of modern royalty.",
    author: "Town & Country",
    role: "High Society"
  }
];

export const Testimonials = () => {
  return (
    <section className="pt-16 pb-12 max-w-[100vw] overflow-hidden bg-[var(--color-luxury-ink)]/[0.01]">
      <div className="flex flex-col items-center mb-16 text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="text-[9px] uppercase tracking-[0.4em] mb-3"
        >
          Press & Recognition
        </motion.span>
        <h2 className="font-serif text-4xl lg:text-5xl font-light">
          Global <span className="italic text-[var(--color-luxury-gold)]">Acclaim</span>
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4 hover:[animation-play-state:paused] cursor-pointer">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[450px] whitespace-normal flex flex-col items-center text-center p-8 lg:p-10 bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_15px_35px_rgba(50,42,37,0.03)] hover:shadow-[0_30px_60px_rgba(50,42,37,0.08)] relative group hover:bg-white/90 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 cursor-default"
            >
              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-[var(--color-luxury-gold)] to-transparent opacity-30 group-hover:h-10 transition-all duration-700"></div>
              
              <div className="mt-2 mb-3">
                <span className="text-[7px] uppercase tracking-[0.3em] text-[var(--color-luxury-gold)] font-bold">
                  {item.role}
                </span>
              </div>

              <blockquote className="font-serif text-lg lg:text-xl leading-relaxed mb-6 text-[var(--color-luxury-ink)]/90">
                "{item.quote}"
              </blockquote>

              <div className="mt-auto pt-5 border-t border-[var(--color-luxury-ink)]/5 w-full">
                <cite className="not-italic text-[9px] uppercase tracking-[0.25em] font-bold block">
                  {item.author}
                </cite>
              </div>

              {/* Subtle corner detail */}
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-r border-b border-[var(--color-luxury-gold)]/20 group-hover:border-[var(--color-luxury-gold)]/50 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
