
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AsymmetricGrid from './components/AsymmetricGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Product, Page } from './types';

const curtainVariants = {
  initial: { x: '100%' },
  animate: { 
    x: ['100%', '0%', '-100%'],
    transition: { 
      duration: 1.2, 
      times: [0, 0.45, 1],
      ease: [0.8, 0, 0.2, 1] 
    }
  }
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: [0, 1, 0],
    scale: [0.9, 1, 1.1],
    transition: { duration: 1.2, times: [0.3, 0.5, 0.7] }
  }
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const CATEGORY_DATA: Record<string, { desc: string, img: string, num: string }> = {
  'ALL PIECES': { 
    desc: 'Our complete archive of artisanal furniture and objects.', 
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    num: '01'
  },
  'SEATING': { 
    desc: 'Ergonomic forms met with the finest Belgian textiles.', 
    img: 'https://images.unsplash.com/photo-1594913785162-e6786b42dea3?auto=format&fit=crop&q=80&w=800',
    num: '02'
  },
  'TABLES': { 
    desc: 'Functional monoliths carved from rare stone and solid oak.', 
    img: 'https://images.unsplash.com/photo-1577147448553-73f1c8346f04?auto=format&fit=crop&q=80&w=800',
    num: '03'
  },
  'LIGHTING': { 
    desc: 'A study in shadow and luminosity through natural fibers.', 
    img: 'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?auto=format&fit=crop&q=80&w=800',
    num: '04'
  },
  'DECOR': { 
    desc: 'Subtle accents that define the character of a room.', 
    img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800',
    num: '05'
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeCategory, setActiveCategory] = useState<string>('ALL PIECES');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = (targetPage: Page, product: Product | null = null, category: string = 'ALL PIECES') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentPage(targetPage);
      setSelectedProduct(product);
      setActiveCategory(category);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 550);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const filteredProducts = activeCategory === 'ALL PIECES' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => {
        if (activeCategory === 'TABLES') return p.category === 'Dining' || p.category === 'Bedroom';
        return p.category.toUpperCase() === activeCategory;
      });

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div variants={pageVariants} key="home-page" className="bg-cream">
            <Hero onDiscover={() => triggerTransition('collection')} />
            
            <section className="py-40 md:py-60 px-6 bg-white flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="max-w-4xl"
              >
                <span className="text-gold text-[10px] tracking-[0.6em] font-bold uppercase mb-12 block">Philosophy</span>
                <h2 className="serif text-4xl md:text-7xl font-light text-charcoal leading-[1.1] mb-12 tracking-tight">
                  We believe in the resonance of <span className="italic">quiet spaces</span> and the honesty of raw materials.
                </h2>
                <div className="w-12 h-[1px] bg-gold/40 mx-auto mb-12"></div>
                <p className="text-black/40 text-sm md:text-base tracking-[0.2em] font-light max-w-xl mx-auto leading-relaxed">
                  The Galleria is a study in subtraction. Every curve is intentional and every piece is designed to endure for generations.
                </p>
              </motion.div>
            </section>

            <section className="bg-cream py-20 overflow-hidden">
               <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  <div className="lg:col-span-7 relative z-10 lg:-mr-32">
                    <motion.div 
                       initial={{ opacity: 0, scale: 1.1 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 2 }}
                       className="aspect-[4/5] md:aspect-video lg:aspect-square bg-neutral-200 overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2400" 
                        className="w-full h-full object-cover grayscale-[0.2]"
                        alt="Statement piece"
                      />
                    </motion.div>
                  </div>
                  <div className="lg:col-span-5 px-6 pt-12 lg:pt-0 relative z-20">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="bg-white/80 backdrop-blur-md p-8 md:p-16 lg:p-24 shadow-xl border border-white/20"
                    >
                      <span className="text-gold text-[10px] tracking-[0.5em] font-bold uppercase mb-6 block">Featured Work</span>
                      <h3 className="serif text-4xl md:text-6xl font-light mb-8 leading-tight text-charcoal">The <span className="italic">Eleia</span> <br/> Armchair</h3>
                      <p className="text-black/60 text-sm tracking-widest leading-loose mb-10 font-light">
                        A masterful blend of sculpted oak and hand-woven linen. The Eleia represents our commitment to organic minimalism.
                      </p>
                      <button 
                        onClick={() => triggerTransition('product', PRODUCTS[0])}
                        className="text-[10px] tracking-extrawide font-bold uppercase border-b border-charcoal/20 pb-2 hover:border-gold hover:text-gold transition-all text-charcoal"
                      >
                        Inquire Piece
                      </button>
                    </motion.div>
                  </div>
               </div>
            </section>

            {/* Materiality Showcase - Tightened padding-bottom to 0 */}
            <section className="bg-white pt-32 md:pt-48 pb-0 px-6">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                  <div className="max-w-lg">
                    <span className="text-gold text-[10px] tracking-[0.6em] font-bold uppercase mb-8 block">Materiality</span>
                    <h2 className="serif text-5xl md:text-7xl font-light tracking-tight text-charcoal">Nature's <br/><span className="italic">Dialect</span></h2>
                  </div>
                  <p className="text-black/40 text-xs tracking-[0.4em] font-light uppercase mt-8 md:mt-0">Sourced responsibly</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                  {[
                    { title: 'Carrara Marble', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', desc: 'Deep-veined stone from Tuscan quarries.' },
                    { title: 'Raw Silk', img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800', desc: 'Hand-spun fibers that capture light.' },
                    { title: 'Aged Oak', img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800', desc: 'Century-old timber, smoke-cured.' }
                  ].map((mat, i) => (
                    <motion.div key={mat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: i * 0.2 }} className="group cursor-crosshair">
                      <div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-8 relative">
                        <img src={mat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt={mat.title} />
                      </div>
                      <h4 className="serif text-2xl font-light mb-2 text-charcoal">{mat.title}</h4>
                      <p className="text-[10px] tracking-widest text-black/50 uppercase font-medium">{mat.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Archive Collection - Adjusted top padding to clean transition from white to cream */}
            <section className="bg-cream pt-24">
              <div className="px-6 md:px-12 pb-12 flex flex-col md:flex-row justify-between items-baseline border-t border-black/5">
                <div className="pt-12">
                  <h3 className="text-[10px] tracking-[0.5em] font-bold text-gold uppercase mb-6">Archive Pieces</h3>
                  <p className="serif italic text-3xl md:text-5xl text-charcoal/80 font-light">The Collection</p>
                </div>
                <button onClick={() => triggerTransition('collection')} className="mt-8 md:mt-0 text-[10px] tracking-extrawide font-bold border-b border-gold pb-3 hover:text-gold uppercase text-charcoal">
                  View All Pieces
                </button>
              </div>
              <AsymmetricGrid products={PRODUCTS.slice(2, 6)} onProductClick={(p) => triggerTransition('product', p)} />
            </section>

            <Footer />
          </motion.div>
        );

      case 'collection':
        const catInfo = CATEGORY_DATA[activeCategory] || CATEGORY_DATA['ALL PIECES'];
        return (
          <motion.div variants={pageVariants} key="collection-page" className="pt-24 md:pt-32 bg-cream min-h-screen">
            <header className="px-6 md:px-12 mb-20 relative">
              <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden h-full w-full">
                <AnimatePresence mode="wait">
                  <motion.div key={activeCategory + '-watermark'} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 0.03, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1.2 }} className="text-[20vw] font-bold serif whitespace-nowrap leading-none absolute -right-20 -top-10 text-charcoal">
                    {activeCategory}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative z-10">
                <div className="lg:col-span-8">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-[10px] tracking-[0.5em] font-bold mb-4 block uppercase">
                    Archive / {catInfo.num}
                  </motion.span>
                  <div className="overflow-hidden min-h-[140px] md:min-h-[180px]">
                    <AnimatePresence mode="wait">
                      <motion.h1 key={activeCategory} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.8 }} className="text-6xl md:text-[8rem] lg:text-[10rem] serif font-light leading-[0.9] text-charcoal">
                        {activeCategory === 'ALL PIECES' ? 'The Collection' : activeCategory}
                      </motion.h1>
                    </AnimatePresence>
                  </div>
                  <motion.p key={activeCategory + '-desc'} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.4 }} className="text-sm md:text-base tracking-widest font-light mt-8 max-w-md text-black">
                    {catInfo.desc}
                  </motion.p>
                </div>
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
                  <div className="flex items-center space-x-8 text-[10px] tracking-extrawide font-bold opacity-50 overflow-x-auto pb-6 w-full lg:w-auto">
                    {Object.keys(CATEGORY_DATA).map((cat) => (
                      <button key={cat} onClick={() => setActiveCategory(cat)} className={`${activeCategory === cat ? 'text-gold border-b border-gold' : 'hover:text-gold text-charcoal'} pb-2 transition-all whitespace-nowrap`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </header>
            <AsymmetricGrid products={filteredProducts} onProductClick={(p) => triggerTransition('product', p)} />
            <Footer />
          </motion.div>
        );

      case 'atelier':
        return (
          <motion.div variants={pageVariants} key="atelier-page" className="pt-48 bg-white min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-40">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                  <div>
                    <span className="text-gold text-[10px] tracking-extrawide mb-8 block uppercase font-bold">Heritage</span>
                    <h1 className="text-7xl md:text-[10rem] serif font-light mb-16 leading-[0.85] text-charcoal">The <br/><span className="italic ml-8 md:ml-24">Soul</span></h1>
                    <p className="text-black/70 leading-loose text-xl font-light mb-12 max-w-md">Luxury is defined by what is omitted.</p>
                  </div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 2 }} className="h-[600px] md:h-[800px] overflow-hidden bg-neutral-100">
                    <img src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Craftsmanship" />
                  </motion.div>
               </div>
            </div>
            <Footer />
          </motion.div>
        );

      case 'product':
        return selectedProduct ? (
          <motion.div variants={pageVariants} key={`product-${selectedProduct.id}`}>
            <ProductDetail product={selectedProduct} onBack={() => triggerTransition('collection', null, activeCategory)} />
            <Footer />
          </motion.div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-charcoal selection:bg-gold selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div key="curtain" initial="initial" animate="animate" exit="exit" variants={curtainVariants} className="fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center pointer-events-none">
            <motion.span variants={logoVariants} className="text-white text-4xl tracking-[0.6em] font-light serif text-center">
              <span className="text-gold italic block text-xl mb-4">The</span> GALLERIA
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <Header onNavigate={(p) => triggerTransition(p as Page)} currentPage={currentPage} />
      <main className="relative z-0">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </main>
    </div>
  );
};

export default App;
