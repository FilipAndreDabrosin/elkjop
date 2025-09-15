"use client";
import Image from "next/image";
import { useRef } from "react";
import { Rating, Typography } from "@material-tailwind/react"
import { Product } from "../types/Product";

type ProductCarouselProps = {
  products: Product[];
  title?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* Funksjon for scrolling i produktkarusellen */
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Dette er hvor mye man scroller per klikk, kan justeres etter produktkortets bredde.
      const newScrollPosition = scrollRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <h1 className="mt-5 ml-5 mb-6 md:text-3xl font-bold font-[Montserrat]">
        {(title)}
      </h1>
      <div className="bg-white">
        <div className="relative mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div key={product.id} className="group relative flex-none w-72 border rounded-lg border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="aspect-square w-full overflow-hidden rounded-t-lg group-hover:opacity-75">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 p-4"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 mr-2">
                      <div className="mb-2">
                        {/* @ts-ignore */}
                        <Rating 
                          value={Math.floor(product.rating)} 
                          readonly 
                          className="flex items-center gap-1"
                          placeholder=""
                        />
                        {/* @ts-ignore */}
                        <Typography color="gray" className="text-xs">
                            {product.rating} av 5
                        </Typography>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                      {product.price}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductCarousel;