import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) => {
  return (
    <div className="space-y-4 p-4">
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => onSelectProduct(product)}
          className="w-full bg-dark-darker p-4 rounded-lg hover:bg-opacity-80 transition-all
                     border border-gray-700 hover:border-primary
                     flex flex-col items-start text-left"
        >
          <div className="flex justify-between w-full items-start">
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <span className="text-primary font-medium">{product.price} ₽</span>
          </div>
          <p className="text-gray-400 mt-2">{product.description}</p>
        </button>
      ))}
    </div>
  );
};

export default ProductList; 