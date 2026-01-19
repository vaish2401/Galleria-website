import { Product } from './types';
import img1 from './assets/img1.jpg'; // This imports your local image

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Aurelius Lounge',
    category: 'Seating',
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200',
    description: 'A sculptural masterpiece carved from single-source Italian walnut, upholstered in premium bouclé fabric.',
    size: 'large',
    material: 'Walnut & Bouclé',
    dimensions: 'W 85cm x D 90cm x H 75cm'
  },
  {
    id: '2',
    name: 'Minimalist Alabaster Table',
    category: 'Dining',
    price: '$6,850',
    image: img1, // Correctly using the imported local image
    description: 'Floating aesthetics meet timeless stone. The translucent alabaster top rests on a brushed brass pedestal.',
    size: 'tall',
    material: 'Alabaster & Brass'
  },
  {
    id: '3',
    name: 'Monolith Nightstand',
    category: 'Bedroom',
    price: '$1,900',
    image: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?cs=srgb&dl=pexels-medhat-ayad-122846-447592.jpg&fm=jpg',
    description: 'Brutalist inspiration softened for the modern sanctuary. Hand-finished charcoal concrete with gold inlay.',
    size: 'normal'
  },
  {
    id: '4',
    name: 'Silk-Lined Pendant',
    category: 'Lighting',
    price: '$2,150',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200',
    description: 'Diffuse warmth through layers of hand-spun raw silk. A statement of light and texture.',
    size: 'normal'
  },
  {
    id: '5',
    name: 'Velvet Curvature Sofa',
    category: 'Seating',
    price: '$12,400',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    description: 'An expansive curve designed for social intimacy. Wrapped in Belgian velvet of the highest grade.',
    size: 'large'
  },
  {
    id: '6',
    name: 'Abstract Obsidian Vase',
    category: 'Decor',
    price: '$850',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=1200',
    description: 'Sharp geometric cuts in volcanic glass, creating a play of light and shadow.',
    size: 'normal'
  }
];