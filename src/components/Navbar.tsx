import { motion } from 'motion/react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[var(--color-luxury-bg)]/90 backdrop-blur-md border-[var(--color-luxury-ink)]/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      {/* Aesthetic shimmer line - only visible when scrolled */}
      <div className={`absolute bottom-[-1px] left-0 w-full h-[1px] overflow-hidden transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[var(--color-luxury-gold)]/40 to-transparent animate-navbar-shimmer"></div>
      </div>

      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 flex flex-col items-center justify-center relative">
        <a href="#" className="text-xl md:text-2xl font-serif tracking-[0.5em] text-center transition-all duration-500 hover:tracking-[0.6em] hover:opacity-70 leading-none">
          L U M I È R E
        </a>
        <motion.span 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[7px] tracking-[0.8em] uppercase mt-2 ml-1"
        >
          Paris
        </motion.span>
      </div>
    </nav>
  );
};

