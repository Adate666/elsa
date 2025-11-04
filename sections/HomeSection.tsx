import React from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types";
import { featuredProducts } from "../data/products";
import MainProductImage from "../assets/Night_Cream.webp";

interface HomeSectionProps {
  onProductClick: (product: Product) => void;
  onExploreClick: () => void;
}

const ScrollDownIcon: React.FC = () => (
  <div className="w-6 h-10 border-2 border-[#1D1D1B] rounded-full flex items-center justify-center p-1">
    <div className="w-1 h-2 bg-[#1D1D1B] rounded-full animate-bounce"></div>
  </div>
);

const HomeSection = React.forwardRef<HTMLElement, HomeSectionProps>(
  ({ onProductClick, onExploreClick }, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className="h-full w-full snap-start relative flex flex-col justify-center items-center pt-48 px-8 md:px-16 pb-16"
      >
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            {/* Left Side: Text and Products */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#12120D]">
                  Cosmetics that
                  <br />
                  Everyone loves!
                </h1>
                <p className="text-[#1D1D1B] max-w-sm">
                  We have a huge collection of cosmetics in our Paris Branch.
                  Our Products are always Quality products.
                </p>
              </div>
              <button
                onClick={onExploreClick}
                className="bg-[#F4C196] text-[#12120D] font-semibold py-4 px-8 rounded-full self-start hover:bg-[#F4C196]/90 transition-all duration-300 hover:scale-105 inline-block"
              >
                Explore Products
              </button>
              <div className="flex flex-wrap gap-4 pt-8">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Main Product Image */}
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#F4F4F4]/50 blur-3xl rounded-full"></div>
              <img
                src={MainProductImage}
                alt="Main cosmetic product"
                className="relative z-10 w-auto h-[60vh] max-h-[500px] object-contain drop-shadow-2xl rounded-xl"
              />{" "}
            </div>
          </div>
        </div>

        {/* Floating Social Links and Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-xs text-[#1D1D1B]">
          <ScrollDownIcon />
          <span>Scroll Down</span>
        </div>
      </section>
    );
  }
);

export default HomeSection;
