import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel flex items-center justify-center">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left w-8 h-8 text-blue-400 bg-white cursor-pointer" />
      {data.map((item, idx) => {
        return (
          <picture key={idx}>
          <img
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide w-80 h-64 md:w-[32rem] md:h-[24rem] rounded-2xl" : "slide slide-hidden hidden"}
          />
          </picture>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right w-8 h-8 text-blue-400 bg-white cursor-pointer "
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
