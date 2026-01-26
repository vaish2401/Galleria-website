import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onDiscover: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-start justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2400" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90"></div>
      </div>

      {/* Hero Content 
          Mobile: pt-[28vh] (Centers it lower, like your 2nd picture)
          Desktop: md:pt-[16vh] (Pushes it up under the logo)
      */}
      <div className="relative z-10 text-center px-6 max-w-5xl pt-[28vh] md:pt-[16vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="text-gold text-[10px] md:text-xs tracking-[0.6em] mb-4 md:mb-6 block font-bold uppercase">
            SINCE 2013
          </span>
          
          <h1 className="text-white text-4xl md:text-8xl lg:text-9xl serif font-light leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
            The Architecture <br /> 
            <span className="italic">of Silence</span>
          </h1>
          
          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            <p className="max-w-xs md:max-w-md text-white/70 text-xs md:text-base tracking-widest font-light leading-relaxed mx-auto px-4 md:px-0">
              Curating spaces that transcend time. A study in materiality, form, and the quiet pursuit of perfection.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onDiscover}
              className="group relative px-10 py-4 md:px-12 md:py-5 overflow-hidden border border-white/20 text-white tracking-[0.4em] text-[9px] md:text-[10px] font-bold uppercase backdrop-blur-sm"
            >
              <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500">Explore Collection</span>
              <div className="absolute inset-0 bg-white -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;