import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

export const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
];


export const Slide = () => {

const [[page, direction], setPage] = useState([0, 0]);
const imageIndex = wrap(0, images.length, page);
const paginate = (newDirection: number) => {
setPage([page + newDirection, newDirection]);
};

return (

<div className="flex items-center justify-center max-w-lg p-5 relative">
  <AnimatePresence>
    <motion.img
      key={page}
      src={images[imageIndex]}
      />
  </AnimatePresence>
  
  <div 
  className="absolute bg-blue-600 w-10 h-10 flex justify-center items-center cursor-pointer font-bold text-white rounded-full md:-right-16 right-1" 
  onClick={() => paginate(1)}>
    {">"}
  </div>
  <div 
  className="absolute bg-blue-600 w-10 h-10 flex justify-center items-center cursor-pointer font-bold text-white rounded-full md:-left-16 left-1" 
  onClick={() => paginate(-1)}>
    {"<"}
  </div>
</div>
);
};
