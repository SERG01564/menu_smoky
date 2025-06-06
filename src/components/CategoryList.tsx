import React from 'react';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category)}
          className="bg-dark-darker p-6 rounded-xl hover:bg-opacity-80 transition-all
                     border border-gray-700 hover:border-primary
                     flex flex-col items-start text-left"
        >
          <h2 className="text-xl font-semibold text-white mb-2">{category.name}</h2>
          <p className="text-gray-400">{category.description}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryList; 