"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    const id = setTimeout(() => setCurrentIndex(next), 3000);
    return () => clearTimeout(id);
  }, [currentIndex, images]);
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt=""
          initial={{ opacity: 0, x: 300 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Animate to the center
          exit={{ opacity: 0, x: -300 }} // Exit to the left
          transition={{ duration: 0.275 }}
          className="w-full object-cover"
        />
      </AnimatePresence>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 flex">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
        ></div>
      ))}
    </div> */}
    </div>
  );
};

export default CarouselSection;
