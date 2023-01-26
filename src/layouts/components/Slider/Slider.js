import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import images from '~/assets/images';

function Slider() {
    return (
        <div>
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
                className="mySwiper w-[90%] rounded-3xl overflow-hidden"
            >
                {images.banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <img src={banner} alt="banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
