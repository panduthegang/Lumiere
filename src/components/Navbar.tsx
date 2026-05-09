import { ShoppingBag, Search, Menu } from 'lucide-react';

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
  );
};
