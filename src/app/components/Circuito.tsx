import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ParceriasStyles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


export function Circuito() {

return (

<section id="Contact" className="flex justify-center flex-col lg:h-screen items-center">
<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-16 py-10'>
<div className="grid w-full justify-items-center justify-center items-center">

<div className="flex flex-col items-center lg:justify-center lg:items-center gap-10 w-full lg:mb-0 lg:w-full max-w-3xl px-6">
<h3 className="lg:text-3xl text-2xl text-blue-500 text-center">Circuito próprio de provas e desafios</h3>
<p className="text-center lg:text-center mb-5">
Veja algumas das provas e desafios promovidos pela Águia Assessoria Esportiva:
</p>
</div>


<div className="grid md:flex lg:justify-center lg:items-center gap-10 px-8">
<button className="flex max-w-lg p-5 px-16 py-6 items-center justify-center bg-blue-400 shadow-md w-full">
<picture>
<img src="./imagem1.svg" alt="" />
</picture>
</button>
<button className="flex max-w-lg  py-2.5 p-3 px-16 items-center justify-center bg-blue-400 shadow-md w-full">
<picture>
<img src="./logo-desafio-aguia-run1.svg" alt="" className="h-24" />
</picture>
</button>
<button className="flex max-w-lg p-5 px-16 py-6 items-center justify-center bg-blue-400 shadow-md w-full">
<picture>
<img src="./desafio-20231.svg" alt="" />
</picture>
</button>
</div>

<div className='w-full flex items-center justify-center'>
<Swiper
effect={'flip'}
grabCursor={true}
pagination={true}
navigation={true}
modules={[EffectFlip, Pagination, Navigation]}
>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
</SwiperSlide>
</Swiper>
</div>

</div>
</div>
</section>
);
}
