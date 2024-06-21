"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Section3.css';
import { Autoplay,Pagination } from 'swiper/modules';

export default function Section3() {
  return (
    <div className="container mx-auto py-[50px]">
        <div className="max-w-xs mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper swiper2"
      >
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/1.png" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/2.png" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/3.png" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/4.png" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/5.png" alt="" /></SwiperSlide>
        <SwiperSlide className="swiper2-slider"><img className="w-[60%] h-[70px]" src="./image/brand/7.png" alt="" /></SwiperSlide>
        
      </Swiper>
   
        </div>
    </div>
  )
}
