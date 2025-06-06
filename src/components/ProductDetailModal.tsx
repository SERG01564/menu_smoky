import React from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-darker rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <p className="text-gray-300 mb-4">{product.fullDescription}</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Состав:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="text-xl font-bold text-primary">
          {product.price} ₽
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal; 