import React, { useState, useEffect } from 'React';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetailModal from './components/ProductDetailModal';
import { Category, Product } from './types';
import { categories, products } from './data/mockData';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        MainButton: {
          text: string;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
        BackButton: {
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
        };
      };
    };
  }
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Инициализация Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      
      // Настройка кнопки "Назад"
      window.Telegram.WebApp.BackButton.onClick(() => {
        if (selectedProduct) {
          setSelectedProduct(null);
        } else if (selectedCategory) {
          setSelectedCategory(null);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Показываем/скрываем кнопку "Назад"
    if (window.Telegram?.WebApp) {
      if (selectedCategory || selectedProduct) {
        window.Telegram.WebApp.BackButton.show();
      } else {
        window.Telegram.WebApp.BackButton.hide();
      }
    }
  }, [selectedCategory, selectedProduct]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory.name
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    if (selectedProduct) {
      setSelectedProduct(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <header className="bg-dark-darker p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">
            {selectedCategory ? selectedCategory.name : 'Меню напитков'}
          </h1>
        </div>
      </header>

      <main className="container mx-auto">
        {selectedCategory ? (
          <>
            <button
              onClick={handleBack}
              className="m-4 text-primary hover:text-primary/80"
            >
              ← Назад к категориям
            </button>
            <ProductList
              products={filteredProducts}
              onSelectProduct={handleProductSelect}
            />
          </>
        ) : (
          <CategoryList
            categories={categories}
            onSelectCategory={handleCategorySelect}
          />
        )}
      </main>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App; 