
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on a page that starts dark (Home) or light (others)
  const isDarkBase = currentPage === 'home';
  
  const textColorClass = (isDarkBase && !isScrolled) ? 'text-white' : 'text-charcoal';
  const logoColorClass = (isDarkBase && !isScrolled) ? 'text-white' : 'text-charcoal';

  const navItems = [
    { label: 'HOME', value: 'home' },
    { label: 'COLLECTION', value: 'collection' },
    { label: 'ATELIER', value: 'atelier' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-4 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-black/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
          <Menu size={20} className={textColorClass} />
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-[10px] tracking-extrawide font-bold transition-colors hover:text-gold ${
                currentPage === item.value ? 'text-gold' : textColorClass
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className={`cursor-pointer absolute left-1/2 -translate-x-1/2 text-center transition-colors duration-500 ${logoColorClass}`}
        >
          <span className="block text-[8px] tracking-[0.4em] font-bold uppercase -mb-1 text-gold">The</span>
          <span className="text-xl md:text-2xl tracking-[0.2em] font-bold serif">GALLERIA</span>
        </div>

        {/* Utility Icons */}
        <div className={`flex items-center space-x-6 ${textColorClass}`}>
          <Search size={18} className="cursor-pointer hover:text-gold transition-colors" />
          <div className="relative cursor-pointer group">
            <ShoppingBag size={18} className="group-hover:text-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-cream z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest font-bold text-gold uppercase">The</span>
                <span className="text-2xl tracking-widest serif text-charcoal font-bold">GALLERIA</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-charcoal" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { onNavigate(item.value); setIsMenuOpen(false); }}
                  className={`text-2xl tracking-widest text-left font-light border-b border-black/10 pb-4 ${
                    currentPage === item.value ? 'text-gold' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-12 text-[10px] text-charcoal/30 tracking-extrawide uppercase font-bold">
              EST. 1984 — MILAN
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
