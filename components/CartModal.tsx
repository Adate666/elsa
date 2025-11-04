
import React from 'react';
import type { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onCheckout: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onCheckout }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div onClick={onClose} className="fixed inset-0 bg-[#12120D]/60 z-50 flex justify-center items-center p-4">
      <div onClick={(e) => e.stopPropagation()} className="bg-[#F4F4F4] rounded-3xl shadow-2xl w-full max-w-lg p-8 relative flex flex-col max-h-[80vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#1D1D1B] hover:text-[#12120D]" aria-label="Close cart">
          <CloseIcon className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-extrabold text-[#12120D] mb-6">Your Cart</h2>
        
        {cartItems.length === 0 ? (
            <p className="text-center text-[#1D1D1B]">Your cart is empty.</p>
        ) : (
            <>
                <div className="overflow-y-auto flex-grow pr-2 no-scrollbar">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between mb-4 border-b border-[#1D1D1B]/10 pb-4">
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg"/>
                            <div className="flex-grow mx-4">
                                <p className="font-bold text-[#12120D]">{item.name}</p>
                                <p className="text-sm text-[#1D1D1B]">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 bg-transparent border border-[#F4C196] rounded-full font-bold flex items-center justify-center text-[#F4C196] hover:bg-[#F4C196]/10 transition">-</button>
                                <span className="font-semibold w-4 text-center text-[#12120D]">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 bg-transparent border border-[#F4C196] rounded-full font-bold flex items-center justify-center text-[#F4C196] hover:bg-[#F4C196]/10 transition">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 border-t border-[#1D1D1B]/10 pt-4">
                    <div className="flex justify-between items-center font-bold text-xl text-[#12120D]">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button onClick={onCheckout} className="w-full mt-4 bg-[#F4C196] text-[#12120D] font-semibold py-3 px-6 rounded-full hover:bg-[#F4C196]/90 transition-colors">
                        Confirm Purchase
                    </button>
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default CartModal;