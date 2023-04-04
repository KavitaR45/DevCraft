import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,EffectFade,Navigation,Pagination} from 'swiper';
SwiperCore.use([Autoplay,EffectFade,Navigation,Pagination]);

export default function Slider({ children, config, }) {
    var props = {
        spaceBetween: 100, autoplay:true,loop: true,slidesPerView: 3,centeredSlides: true,speed:800,...config,
        
    }
    return (
            <Swiper pagination={true} navigation={true} {...props} >
                {children.map((X, i) =>  <SwiperSlide key={'SwiperJS' + i}>{X}</SwiperSlide>)}
            </Swiper>
    );
};


