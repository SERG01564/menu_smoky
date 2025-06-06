export interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  ingredients: string[];
  category: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
} 