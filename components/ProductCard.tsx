import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ArrowCircleIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="12" cy="12" r="12" fill="#12120D"/>
        <path d="M10 8L14 12L10 16" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-[#F4F4F4]/80 backdrop-blur-sm rounded-3xl p-4 shadow-lg flex items-center space-x-4 w-64 text-left transition-transform duration-300 hover:scale-105"
      aria-label={`View details for ${product.name}`}
    >
      <img src={product.imageUrl} alt={product.name} className="w-16 h-24 object-contain flex-shrink-0" />
      <div className="flex-grow">
        <h3 className="font-bold text-sm text-[#1D1D1B]">{product.name}</h3>
        <p className="font-extrabold text-lg text-[#12120D]">${product.price.toFixed(2)}</p>
        {product.discount && <p className="text-xs text-[#1D1D1B]/70">-{product.discount}%</p>}
      </div>
      <div className="flex-shrink-0">
          <ArrowCircleIcon />
      </div>
    </button>
  );
};

export default ProductCard;