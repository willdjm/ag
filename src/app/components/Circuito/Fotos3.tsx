import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation } from 'swiper/modules';

export function Fotos3() {

return (

<section className="py-20">
<div className="grid max-w-xl ">
    <div className="rounded-lg overflow-hidden">
        <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
        >
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="slider" />
                </picture>
            </SwiperSlide>
        </Swiper>
    </div>
</div>
</section>

)
}