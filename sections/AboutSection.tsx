
import React from 'react';

const AboutSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="h-full w-full snap-start flex flex-col items-center justify-center p-8 pt-48 bg-[#F4F4F4] border-t border-[#1D1D1B]/10">
        <div className="text-center">
            <h2 className="text-4xl font-extrabold text-[#12120D] mb-4">About Elsa</h2>
            <p className="max-w-2xl text-[#1D1D1B]">
                Founded in 2024, Elsa is dedicated to creating high-quality, ethically-sourced cosmetics that empower everyone to feel their best. Our products blend nature and science to deliver visible results and a luxurious experience. We believe in beauty that is kind to your skin and the planet.
            </p>
        </div>
    </section>
  );
});

export default AboutSection;