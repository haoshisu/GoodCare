import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../swiper/swiperComponent.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                initialSlide={2}
            >
                    <SwiperSlide>
                        <a href="/Service" target="_blank"><img src={require('../../asset/images/Home/swiper1.png')} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://1966.gov.tw/LTC/cp-6457-69925-207.html" target="_blank"><img src={require('../../asset/images/Home/swiper2.jpg')} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/map" target="_blank"><img src={require('../../asset/images/Home/swiper3.jpg')} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.youtube.com/watch?v=hxgI7g-cl4Q" target="_blank"><img src={require('../../asset/images/Home/swiper4.jpg')} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/Service" target="_blank"><img src={require('../../asset/images/Home/swiper5.png')} /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/Service" target="_blank"><img src={require('../../asset/images/Home/swiper6.png')} /></a>
                    </SwiperSlide>
            </Swiper>
        </>
    );
}
