import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

export function Caroucel() {

const [slidePreview, setSlidePreview] = useState(4)

useEffect(() => {

function handleResize() {
  if (window.innerWidth < 720) {
    setSlidePreview(2);
  }
  else {
    setSlidePreview(5);
  }
}
handleResize();

window.addEventListener("resize", handleResize)

return () => {

  window.removeEventListener("resize", handleResize)
}
}, [])

return (

<section className="bg-emerald-50 ">
  <Swiper className=" flex items-center justify-center"
    loop={true}
    slidesPerView={slidePreview}
    grabCursor={true}
    autoplay
    speed={200}
  >
    <SwiperSlide key='1'>
      <picture>
        <img src="./Rectangle6.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='2'>
      <picture>
        <img src="./Rectangle5.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='3'>
      <picture>
        <img src="./Rectangle4.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='4'>
      <picture>
        <img src="./Rectangle3.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='5'>
      <picture>
        <img src="./Rectangle2.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='6'>
      <picture>
        <img src="./Rectangle6.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='7'>
      <picture>
        <img src="./Rectangle5.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='8'>
      <picture>
        <img src="./Rectangle4.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='9'>
      <picture>
        <img src="./Rectangle3.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='10'>
      <picture>
        <img src="./Rectangle6.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='11'>
      <picture>
        <img src="./Rectangle5.svg" alt="" className="object-cover w-full h-full" />

      </picture>
    </SwiperSlide>
    <SwiperSlide key='12'>
      <picture>
        <img src="./Rectangle4.svg" alt="" className="object-cover w-full h-full" />
      </picture>
    </SwiperSlide>
  </Swiper>
</section>
)
}




