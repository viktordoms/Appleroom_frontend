import React from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home_slider.scss';


function HomeSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "320px",
        slidesToShow: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };
    return (
            <Slider
                {...settings}
                className='slider-container'>
                <div className='slider__slide'>
                    <img src='images/slider_img_01.webp' alt=''/>
                </div>
                <div className='slider__slide'>
                    <img src='images/slider_img_02.webp' alt=''/>
                </div>
                <div className='slider__slide'>
                    <img src='images/slider_img_03.webp' alt=''/>
                </div>
                <div className='slider__slide'>
                    <img src='images/slider_img_04.webp' alt=''/>
                </div>
                <div className='slider__slide'>
                    <img src='images/slider_img_05.webp' alt=''/>
                </div>
                <div className='slider__slide'>
                    <img src='images/slider_img_06.webp' alt=''/>
                </div>
            </Slider>

    )
}

export default HomeSlider;
