
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import CartIcon from './components/CartIcon';
import ProductDetailModal from './components/ProductDetailModal';
import ExploreProductsModal from './components/ExploreProductsModal';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';

import type { Product, CartItem } from './types';
import { allProducts } from './data/products';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // State Management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isExploreModalOpen, setExploreModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Section Refs for scrolling
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = [
    { id: 'home', ref: homeRef },
    { id: 'about', ref: aboutRef },
    { id: 'products', ref: productsRef },
    { id: 'contact', ref: contactRef },
  ];

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6,
      }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleNavClick = (id: string) => {
    const section = sectionRefs.find(s => s.id === id);
    section?.ref.current?.scrollIntoView({
        behavior: 'smooth',
    });
  };
  
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000); // Hide toast after 3 seconds
  };

  // Cart Logic
  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Close modals on add
    setSelectedProduct(null);
    setExploreModalOpen(false);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };
  
  const handleCheckout = () => {
      setCartModalOpen(false);
      setCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    showToast("Your order will be processed and you will be contacted shortly.");
    setCheckoutModalOpen(false);
    setCart([]);
    setTimeout(() => {
      handleNavClick('home');
    }, 3000); // Navigate to home after 3 seconds
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <main className="w-full max-w-screen-xl h-[90vh] bg-primary-light rounded-3xl shadow-2xl overflow-hidden relative">
        <Header activeSection={activeSection} onNavClick={handleNavClick} />
        <div ref={scrollContainerRef} className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
          <HomeSection 
            ref={homeRef} 
            onProductClick={setSelectedProduct} 
            onExploreClick={() => setExploreModalOpen(true)}
          />
          <AboutSection ref={aboutRef} />
          <ProductsSection ref={productsRef} />
          <ContactSection ref={contactRef} onShowToast={showToast} />
          <Footer />
        </div>

        {/* Modals and Overlays */}
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            onAddToCart={handleAddToCart}
          />
        )}
        
        <ExploreProductsModal 
            isOpen={isExploreModalOpen}
            onClose={() => setExploreModalOpen(false)}
            onAddToCart={handleAddToCart}
            products={allProducts.slice(2, 6)} // Show next 4 products
        />

        <CartModal
          isOpen={isCartModalOpen}
          onClose={() => setCartModalOpen(false)}
          cartItems={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />

        <CheckoutModal 
            isOpen={isCheckoutModalOpen}
            onClose={() => setCheckoutModalOpen(false)}
            onConfirm={handleConfirmOrder}
        />

        <CartIcon 
          itemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onClick={() => setCartModalOpen(true)}
        />
        
        {toastMessage && <Toast message={toastMessage} />}
      </main>
    </div>
  );
};

export default App;
