import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation } from 'swiper/modules';

export function Fotos2() {

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
                    <img id="6" src="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png" alt="slider" />
                </picture>
            </SwiperSlide>
            <SwiperSlide>
                <picture>
                    <img id="6" src="https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png" alt="slider" />
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