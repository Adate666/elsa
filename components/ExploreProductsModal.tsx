
import React from 'react';
import type { Product } from '../types';

interface ExploreProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ExploreProductsModal: React.FC<ExploreProductsModalProps> = ({ isOpen, onClose, products, onAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-[#12120D]/60 z-50 flex justify-center items-center p-4">
      <div onClick={(e) => e.stopPropagation()} className="bg-[#F4F4F4] rounded-3xl shadow-2xl w-full max-w-4xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#1D1D1B] hover:text-[#12120D]" aria-label="Close explore products">
          <CloseIcon className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-extrabold text-[#12120D] mb-8 text-center">Explore Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl p-4 flex flex-col items-center text-center border border-[#1D1D1B]/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-40 mb-4 flex items-center justify-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-md text-[#12120D] flex-grow">{product.name}</h3>
              <p className="font-extrabold text-lg text-[#1D1D1B] my-2">${product.price.toFixed(2)}</p>
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-[#F4C196] text-[#12120D] font-semibold py-2 px-4 rounded-full hover:bg-[#F4C196]/90 transition-colors text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsModal;