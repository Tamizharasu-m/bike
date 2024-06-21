"use client"

import React, {useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import './Section1.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Section1() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: true,
            },
          }
        );
      }, []);

    return (
        <div className='container mx-auto h-[100vh] flex items-center bg-blue-500 rounded-tr-[50px] rounded-tl-[50px] rounded-br-[50px] rounded-bl-[50px] truncate'>
            <div className='max-w-xs mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
                <h2 ref={textRef} className='text-4xl text-center capitalize mb-[40px] font-bold font-mono'>bike details</h2>
                <Swiper
                    effect={'cards'}
                    navigation={true}
                    grabCursor={true}
                    modules={[EffectCards, Navigation]}
                    className="mySwiper swiper1"
                >

                    <SwiperSlide className="relative swiper1-slide">
                        <div className="text-center ">
                            <img className="img1" src="./image/suzuki.png" />
                            <h4 className="pt-[40px] uppercase text-xl">suzuki</h4>
                            <div className='absolute bottom-0 left-0 right-0'><button className='bg-blue-500 w-[320px] h-[60px] uppercase text-lg font-sans tracking-widest'>enquire</button></div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="relative swiper1-slide">
                        <div className="text-center ">
                            <img className="img1" src="./image/r15.avif" />
                            <h4 className="pt-[40px] uppercase text-xl">yamaha r15 v4</h4>
                            <div className='absolute bottom-0 left-0 right-0'><button className='bg-blue-500 w-[320px] h-[60px] uppercase text-lg font-sans tracking-widest'>enquire</button></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative swiper1-slide">
                        <div className="text-center ">
                            <img className="img1" src="./image/royal.webp" />
                            <h4 className="pt-[40px] uppercase text-xl">royal enfield</h4>
                            <div className='absolute bottom-0 left-0 right-0'><button className='bg-blue-500 w-[320px] h-[60px] uppercase text-lg font-sans tracking-widest'>enquire</button></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative swiper1-slide">
                        <div className="text-center ">
                            <img className="img1" src="./image/honda.jpg" />
                            <h4 className="pt-[40px] uppercase text-xl">honda activa</h4>
                            <div className='absolute bottom-0 left-0 right-0'><button className='bg-blue-500 w-[320px] h-[60px] uppercase text-lg font-sans tracking-widest'>enquire</button></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="relative swiper1-slide">
                        <div className="text-center ">
                            <img className="img1" src="./image/splendorr.webp" />
                            <h4 className="pt-[40px] uppercase text-xl">hero splendor</h4>
                            <div className='absolute bottom-0 left-0 right-0'><button className='bg-blue-500 w-[320px] h-[60px] uppercase text-lg font-sans tracking-widest'>enquire</button></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}





