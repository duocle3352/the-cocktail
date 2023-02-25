import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import images from '~/assets/images';
import './Slider.css';

function Slider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="slider-wrapper"
        >
            {images.banners.map((banner, index) => (
                <SwiperSlide key={index} className="w-full">
                    <img src={banner} alt="banner" className="w-full h-full object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
