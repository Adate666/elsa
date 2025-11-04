import React from 'react';

const ProductsSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="products" className="h-full w-full snap-start flex flex-col items-center justify-center p-8 pt-48 bg-[#F4F4F4]">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[#12120D] mb-4">Our Beauty Products</h2>
        <p className="max-w-2xl text-[#1D1D1B]">
          Discover our curated collection of skincare and makeup essentials. From revitalizing serums to vibrant lip colors, each product is crafted with the finest ingredients to enhance your natural beauty. Explore our full range and find your new favorites.
        </p>
      </div>
    </section>
  );
});

export default ProductsSection;