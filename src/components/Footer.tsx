export const Footer = () => {
  return (
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
  );
};
