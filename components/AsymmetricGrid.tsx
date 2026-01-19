
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';

interface GridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const AsymmetricGrid: React.FC<GridProps> = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 px-6 md:px-12 py-32 bg-cream min-h-[600px]">
      <AnimatePresence mode="popLayout">
        {products.map((product, idx) => {
          const isLarge = product.size === 'large';
          const isTall = product.size === 'tall';
          
          const colSpan = isLarge ? 'md:col-span-8' : isTall ? 'md:col-span-4' : 'md:col-span-4';
          const rowSpan = isTall ? 'md:row-span-2' : '';
          const heightClass = isTall ? 'h-[600px] md:h-full' : isLarge ? 'h-[500px] md:h-[650px]' : 'h-[400px] md:h-[500px]';

          return (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.19, 1, 0.22, 1],
                layout: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
              }}
              className={`${colSpan} ${rowSpan} group cursor-pointer`}
              onClick={() => onProductClick(product)}
            >
              <div className={`relative overflow-hidden ${heightClass} bg-neutral-100`}>
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-700 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    <span className="text-[10px] tracking-[0.4em] font-medium uppercase">EXPLORE PIECE</span>
                    <div className="w-10 h-[1px] bg-gold/50"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-start">
                <div className="max-w-[70%]">
                  <p className="text-[10px] tracking-[0.4em] text-gold font-bold uppercase mb-2">{product.category}</p>
                  <h3 className="text-xl md:text-2xl serif tracking-tight font-light group-hover:italic transition-all duration-500">{product.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs tracking-widest font-light opacity-40 block mb-2">Price upon inquiry</span>
                  <span className="text-sm tracking-widest font-medium opacity-80">{product.price}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AsymmetricGrid;
