"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Header.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Header from './Header';

export default function Section() {
  return (
    
        <div className="h-[100vh] relative">
            <div className="absolute z-10 w-full top-8 ">
                <Header/>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="./image/bikee.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./image/moto.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./image/bikes.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./image/biker.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./image/mVfu30.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
    
  )
}
