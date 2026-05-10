import { useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { Craftsmanship } from './components/Craftsmanship';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

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
      <Navbar scrolled={scrolled} />
      <Hero y={y} />
      <FeaturedCollection />
      <Craftsmanship />
      <Testimonials />
      <Footer />
    </div>
  );
}
