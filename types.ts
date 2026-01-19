
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  dimensions?: string;
  material?: string;
  featured?: boolean;
  size?: 'normal' | 'large' | 'tall';
}

export type Page = 'home' | 'collection' | 'atelier' | 'product';
