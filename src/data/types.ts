export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  type: string;
  image: string;
  price: number;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colorPair: { primary: string; secondary: string };
  heroImage: string;
  products: Product[];
}
