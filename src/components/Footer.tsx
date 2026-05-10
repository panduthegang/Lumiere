import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-luxury-ink)]/10 pt-20 pb-12">
      {/* Background Image with subtle scale animation */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src="/Footer.png"
          alt="Lumière Background"
          className="w-full h-full object-cover object-right md:object-center"
        />
        {/* Subtle gradient overlay to blend with background and maintain text legibility */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-luxury-bg)] via-[var(--color-luxury-bg)]/20 to-[var(--color-luxury-bg)]"></div> */}
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-24 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl tracking-widest mb-6"
            >
              L U M I È R E
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm font-medium max-w-xs leading-relaxed mb-8"
            >
              Elevating the everyday through the transformative power of scent.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              {['Instagram', 'Pinterest', 'Journal'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-widest border border-[var(--color-luxury-ink)]/40 px-4 py-2 rounded-none hover:bg-[var(--color-luxury-ink)] hover:text-[var(--color-luxury-bg)] transition-all duration-300 font-semibold">
                  {social}
                </a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">All Fragrances</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Home Ambience</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Sample Sets</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Gift Cards</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Assistance</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--color-luxury-gold)] transition-colors">Track Order</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--color-luxury-ink)]/20 text-[10px] uppercase tracking-widest font-semibold"
        >
          <p className="opacity-70">&copy; {new Date().getFullYear()} LUMIÈRE PERFUMES PARIS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity opacity-70">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity opacity-70">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

