
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-cream">
      <div className="max-w-[1400px] mx-auto">
        <motion.button 
          variants={itemVariants}
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] tracking-widest font-medium mb-12 hover:text-gold transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO COLLECTION</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Main Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] md:h-[800px] overflow-hidden bg-white shadow-sm"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="flex flex-col"
          >
            <motion.div variants={itemVariants} className="border-b border-charcoal/10 pb-8 mb-8">
              <span className="text-xs tracking-[0.3em] text-gold font-semibold mb-4 block">{product.category}</span>
              <h1 className="text-4xl md:text-6xl serif font-light mb-6 leading-tight">{product.name}</h1>
              <p className="text-2xl font-light tracking-widest text-charcoal/80">{product.price}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-4 opacity-50 uppercase">Description</h4>
              <p className="text-charcoal/70 leading-relaxed font-light text-lg italic md:not-italic">
                {product.description}
              </p>
            </motion.div>

            {product.material && (
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-charcoal/10">
                <div>
                  <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-2 opacity-50 uppercase">Material</h4>
                  <p className="text-sm tracking-wide">{product.material}</p>
                </div>
                {product.dimensions && (
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-2 opacity-50 uppercase">Dimensions</h4>
                    <p className="text-sm tracking-wide">{product.dimensions}</p>
                  </div>
                )}
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="flex flex-col space-y-4">
              <button className="w-full py-6 bg-charcoal text-white tracking-[0.3em] text-[10px] font-medium hover:bg-gold transition-colors duration-500">
                INQUIRE FOR ACQUISITION
              </button>
              <button className="w-full py-6 border border-charcoal/10 text-charcoal tracking-[0.3em] text-[10px] font-medium hover:bg-charcoal hover:text-white transition-all duration-500 flex items-center justify-center space-x-2">
                <Share2 size={14} />
                <span>SHARE PIECE</span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 bg-white/50 p-8 border border-gold/10">
              <p className="text-[10px] tracking-widest font-light text-charcoal/60 leading-relaxed">
                * Each LUVIA piece is handmade to order in our Italian atelier. Lead times vary between 12-16 weeks depending on material availability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
