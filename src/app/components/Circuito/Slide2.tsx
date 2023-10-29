import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];


const variants = {
enter: (direction: number) => {
return {
  x: direction > 0 ? 1000 : -1000,
  opacity: 0
};
},
center: {
zIndex: 1,
x: 0,
opacity: 1
},
exit: (direction: number) => {
return {
  zIndex: 0,
  x: direction < 0 ? 1000 : -1000,
  opacity: 0
};
}
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
return Math.abs(offset) * velocity;
};

export const Slide2 = () => {
const [[page, direction], setPage] = useState([0, 0]);
const imageIndex = wrap(0, images.length, page);
const paginate = (newDirection: number) => {
setPage([page + newDirection, newDirection]);
};

return (

<div className="flex items-center justify-center max-w-lg p-5 relative">
  <AnimatePresence initial={false} custom={direction}>
    <motion.img
      key={page}
      src={images[imageIndex]}
      custom={direction}
      animate="center"
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
