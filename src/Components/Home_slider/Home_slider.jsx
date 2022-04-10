import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper";

import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/autoplay'

import './home_slider.scss';


function HomeSlider() {
    return (
            <Swiper
                modules={[Navigation,Pagination, Autoplay]}
                autoplay={{
                    delay: 25,
                }}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={35}
                pagination
                navigation
                className='slider-container'>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_01.webp' alt=''/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_02.webp' alt=''/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_03.webp' alt=''/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_04.webp' alt=''/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_05.webp' alt=''/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src='images/slider_img_06.webp' alt=''/>
                </SwiperSlide>
            </Swiper>
    )
}

export default HomeSlider;
