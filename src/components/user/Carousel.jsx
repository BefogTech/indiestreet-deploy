'use client'
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/7399418/pexels-photo-7399418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5865148/pexels-photo-5865148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToIndex = (i) => {
    setIndex(i);
  };

  return (
    <div className="relative w-full h-[35rem]">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img src={img} alt={`Image ${i + 1}`} className="w-full h-[35rem] object-cover" />
        </div>
      ))}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 mb-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className={`w-7 h-2.5 bg-white rounded-full transition-colors duration-300 focus:outline-none ${
              i === index ? '!bg-black' : '!bg-[#d5d5d577]'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
