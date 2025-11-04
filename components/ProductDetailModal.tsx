
import React from 'react';
import type { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#12120D]/60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F4F4F4] rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1D1D1B] hover:text-[#12120D] transition-colors"
          aria-label="Close product details"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-shrink-0">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full sm:w-48 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 id="product-modal-title" className="text-3xl font-extrabold text-[#12120D] mb-2">{product.name}</h2>
            <div className="flex items-baseline gap-3 mb-4">
                <p className="font-extrabold text-2xl text-[#12120D]">${product.price.toFixed(2)}</p>
                {product.discount && <p className="text-md text-[#1D1D1B]/70 line-through">${(product.price / (1 - product.discount/100)).toFixed(2)}</p>}
            </div>
            <p className="text-[#1D1D1B] text-sm flex-grow mb-6">
              {product.description}
            </p>
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-[#F4C196] text-[#12120D] font-semibold py-3 px-6 rounded-full self-start hover:bg-[#F4C196]/90 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;