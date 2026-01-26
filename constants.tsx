import { Product } from './types';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Aurelius Lounge',
    category: 'Seating',
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200',
    description: 'A sculptural masterpiece carved from single-source Italian walnut.',
    size: 'large'
  },
  {
    id: '2',
    name: 'Minimalist Alabaster Table',
    category: 'Dining',
    price: '$6,850',
    image: img1,
    description: 'The translucent alabaster top rests on a brushed brass pedestal.',
    size: 'tall'
  },
  {
    id: '3',
    name: 'Monolith Nightstand',
    category: 'Bedroom',
    price: '$1,900',
    image: img2,
    description: 'Hand-finished charcoal concrete with gold inlay.',
    size: 'normal'
  },
  {
    id: '4',
    name: 'Silk-Lined Pendant',
    category: 'Lighting',
    price: '$2,150',
    image: img3,
    description: 'A statement of light and texture.',
    size: 'normal'
  },
  {
    id: '5',
    name: 'Velvet Curvature Sofa',
    category: 'Seating',
    price: '$12,400',
    image: img5,
    description: 'Wrapped in Belgian velvet of the highest grade.',
    size: 'large'
  },
  {
    id: '6',
    name: 'Abstract Obsidian Vase',
    category: 'Decor',
    price: '$850',
    image: img6,
    description: 'Sharp geometric cuts in volcanic glass.',
    size: 'normal'
  }
];