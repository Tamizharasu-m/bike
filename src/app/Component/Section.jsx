"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Header.css';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';
import Header from './Header';

export default function Section() {
  return (
    
        <div className="h-[100vh] relative">
            <div className="absolute z-10 w-full top-8 ">
                <Header/>
                </div>
                <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image/bikee.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/moto.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/bikes.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/biker.jpg" />
        </SwiperSlide>
      </Swiper>
            </div>
    
  )
}
