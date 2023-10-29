import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation } from 'swiper/modules';

export function Fotos() {

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