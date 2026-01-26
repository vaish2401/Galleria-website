import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

import logo from '../assets/logo.png'; 

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

  const isDarkBase = currentPage === 'home';
  const textColorClass = (isDarkBase && !isScrolled) ? 'text-white' : 'text-charcoal';
  const logoFilterClass = (isDarkBase && !isScrolled) ? 'brightness-0 invert' : '';

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Collection', value: 'collection' },
    { label: 'Atelier', value: 'atelier' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-8 md:px-16 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6 md:py-8' // Reduced from py-10 to give Hero room
      }`}
    >
      {/* Left: Navigation */}
      <nav className={`hidden md:flex space-x-12 flex-1 items-center ${textColorClass}`}>
        {navItems.map((item) => (
          <button 
            key={item.value} 
            onClick={() => onNavigate(item.value)}
            className={`serif text-xl lg:text-2xl tracking-tight transition-all duration-500 relative group ${
              currentPage === item.value ? 'italic opacity-100' : 'opacity-70 hover:opacity-100'
            }`}
          >
            {item.label}
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500 ${currentPage === item.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
        ))}
      </nav>

      {/* Center: Logo */}
      <div className="flex justify-center items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center justify-center py-2 transition-transform duration-500 hover:scale-105"
        >
          <img 
            src={logo} 
            alt="The Galleria" 
            className={`h-8 md:h-12 w-auto object-contain transition-all duration-500 ${logoFilterClass}`} // Scaled down slightly
          />
        </button>
      </div>

      {/* Right: Actions */}
      <div className={`flex items-center justify-end space-x-8 md:space-x-10 flex-1 ${textColorClass}`}>
        <button className="flex items-center space-x-2 group">
          <Search size={20} strokeWidth={1.5} className="group-hover:text-gold transition-colors" />
          <span className="hidden lg:block text-[10px] tracking-[0.3em] font-bold uppercase">SEARCH</span>
        </button>
        
        <button className="flex items-center space-x-2 group relative">
          <ShoppingBag size={20} strokeWidth={1.5} className="group-hover:text-gold transition-colors" />
          <span className="hidden lg:block text-[10px] tracking-[0.3em] font-bold uppercase">CART</span>
          <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-gold rounded-full"></span>
        </button>

        <button 
          className="md:hidden hover:text-gold transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-cream z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <img src={logo} alt="The Galleria" className="h-10 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-charcoal text-white rounded-full">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-10">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { onNavigate(item.value); setIsMenuOpen(false); }}
                  className={`serif text-5xl text-left ${
                    currentPage === item.value ? 'italic text-gold' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;