
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onDiscover: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2400" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover brightness-[0.5]"
        />
        {/* Subtle dynamic overlay using Brand Purple (charcoal) */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
        >
          <span className="text-gold text-[10px] md:text-xs tracking-extrawide mb-8 block font-bold uppercase">
            SINCE 2013
          </span>
          
          <h1 className="text-white text-5xl md:text-9xl serif font-light leading-tight mb-12 tracking-tight">
            The Architecture <br /> 
            <span className="italic">of Silence</span>
          </h1>
          
          <div className="flex flex-col items-center space-y-12">
            <p className="max-w-lg text-white/60 text-sm md:text-base tracking-widest font-light leading-relaxed mx-auto">
              Curating spaces that transcend time. A study in materiality, form, and the quiet pursuit of perfection.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDiscover}
              className="group relative px-14 py-6 overflow-hidden border border-white/20 text-white tracking-[0.4em] text-[10px] font-bold uppercase"
            >
              <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500">Explore Collection</span>
              <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
            <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-1/2 bg-white"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
