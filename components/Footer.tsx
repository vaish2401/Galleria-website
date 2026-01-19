
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white px-6 md:px-12 py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
          <div className="md:col-span-4">
            <div className="flex flex-col mb-8">
                <span className="text-[10px] tracking-widest font-bold text-gold uppercase">The</span>
                <h2 className="text-3xl tracking-[0.2em] serif font-bold">GALLERIA</h2>
            </div>
            <p className="text-white/50 text-sm leading-loose max-w-sm mb-12">
              Bespoke furniture crafted at the intersection of artisanal tradition and avant-garde minimalism. Since 1984.
            </p>
            <div className="flex space-x-6">
              <Instagram size={18} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Facebook size={18} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-8 uppercase text-gold">EXPLORE</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Collections</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Limited Series</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Atelier</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Journal</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-8 uppercase text-gold">CLIENT CARE</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Inquiry Form</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Shipping</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">Warranty</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest">FAQ</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] font-semibold mb-8 uppercase text-gold">NEWSLETTER</h4>
            <p className="text-sm text-white/50 mb-6 font-light">Join the circle for private viewings and early access.</p>
            <div className="flex border-b border-white/20 pb-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-none outline-none text-xs tracking-widest w-full placeholder:text-white/30"
              />
              <button className="text-[10px] tracking-[0.3em] font-medium text-gold ml-4">JOIN</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-white/30 space-y-4 md:space-y-0 uppercase">
          <p>© 2024 THE GALLERIA INTERIORS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-12">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
