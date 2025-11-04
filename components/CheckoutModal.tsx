
import React, { useState } from 'react';
import CountryCodeModal from './CountryCodeModal';
import type { Country } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [isCountryModalOpen, setCountryModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({ name: 'France', code: '+33', flag: '🇫🇷' });
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify will handle the form submission directly
  }

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setCountryModalOpen(false);
  }

  const inputStyles = "w-full px-4 py-3 bg-white text-[#12120D] border border-[#1D1D1B]/20 rounded-lg shadow-sm placeholder-[#1D1D1B]/70 focus:outline-none focus:ring-2 focus:ring-[#F4C196]";

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-[#12120D]/60 z-50 flex justify-center items-center p-4">
        <div onClick={(e) => e.stopPropagation()} className="bg-[#F4F4F4] rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-[#1D1D1B] hover:text-[#12120D]" aria-label="Close checkout">
            <CloseIcon className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-extrabold text-[#12120D] mb-4">Delivery Information</h2>
          <p className="text-[#1D1D1B] mb-6 text-sm">Please provide your contact details. We will call you to arrange payment and delivery.</p>
          
          <form name="delivery" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="form-name" value="delivery" />
            <div>
              <label htmlFor="checkout-name" className="sr-only">Full Name</label>
              <input type="text" id="checkout-name" required placeholder="Full Name" className={inputStyles} />
            </div>
            <div>
              <label htmlFor="checkout-email" className="sr-only">Email Address</label>
              <input 
                type="text"
                inputMode="email"
                id="checkout-email" 
                required 
                placeholder="Email Address" 
                className={inputStyles} 
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                title="Please enter a valid email address (e.g., name@domain.com)." />
            </div>
            <div>
              <label htmlFor="checkout-phone" className="sr-only">Phone Number</label>
              <div className="flex w-full">
                  <button 
                    type="button" 
                    onClick={() => setCountryModalOpen(true)}
                    className="flex items-center space-x-2 px-4 py-3 bg-white border border-r-0 border-[#1D1D1B]/20 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4C196]"
                  >
                      <span>{selectedCountry.flag}</span>
                      <span className="text-sm text-[#12120D]">{selectedCountry.code}</span>
                  </button>
                  <input type="tel" id="checkout-phone" required placeholder="Phone Number" className={`${inputStyles} rounded-l-none`} pattern="\d*" title="Please enter only numbers." />
              </div>
            </div>
            <div>
              <label htmlFor="checkout-address" className="sr-only">Delivery Address</label>
              <textarea id="checkout-address" required placeholder="Delivery Address" rows={3} className={inputStyles}></textarea>
            </div>
            <button type="submit" className="w-full bg-[#F4C196] text-[#12120D] font-semibold py-3 px-6 rounded-full hover:bg-[#F4C196]/90 transition-colors">
              Place Order
            </button>
          </form>
        </div>
      </div>
      
      <CountryCodeModal 
        isOpen={isCountryModalOpen}
        onClose={() => setCountryModalOpen(false)}
        onSelect={handleSelectCountry}
      />
    </>
  );
};

export default CheckoutModal;