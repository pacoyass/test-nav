"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
  EffectCoverflow,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCards,
  EffectCreative,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Slider() {
  return (
    <div className="swiper-container h-[70svh]">
      <Swiper
        effect="fade"
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={1}
        autoplay={{ delay: 2000 }}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Zoom,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={0}
        slidesPerView={"auto"}
        navigation
        fadeEffect={{
          crossFade: false,
        }}
        // creativeEffect={{
        //   limitProgress: 1,
        //   next: {
        //     translate: ['50%', 0, 0],
        //     rotate: [0, -45, 0],
        //     opacity: 1,
        //     scale: 1,
        //     shadowPerProgress:true,
        //     limitProgress:2,
        //     origin: 'right bottom',
        //   },
        //   perspective: true,
        //   prev: {
        //     translate: ['-50%', 0, 0],
        //     rotate: [0, 45, 0],
        //     opacity: 1,
        //     scale: 1,
        //     shadowPerProgress:true,
        //     limitProgress:2,
        //     origin: 'left bottom',
        //   },
        //   progressMultiplier: 1,
        //   shadowPerProgress: false
        // }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //  breakpoints={{
        //   320:{
        //     navigation: {
        //       enabled:false,
        //       disabledClass:"hiddenNav"
        //     },
        //   },
        //   640: {
        //     navigation: {
        //       enabled: true,

        //     },
        //   }
        //  }}
        className=" swiper-wrapper shadow-2xl"
        style={{
          "--swiper-navigation-color": "rgb(226 232 240)",
          "--swiper-navigation-size": " 28px",
          "--swiper-navigation-top-offset": "50%",
          "--swiper-navigation-sides-offset": "20px",

          '--swiper-scrollbar-border-radius': '14px',
          '--swiper-scrollbar-top': 'auto',
          '--swiper-scrollbar-bottom':' 2px',
          '--swiper-scrollbar-left': 'auto',
          '--swiper-scrollbar-right':' 4px',
          '--swiper-scrollbar-sides-offset':'1%',
          '--swiper-scrollbar-bg-color': 'rgba(156, 163, 175, 1)',
          '--swiper-scrollbar-drag-bg-color': 'rgba(55, 65, 81, 0.8)',
          '--swiper-scrollbar-size':' 4px',
        }}
      >
        <div className="swiper-slide ">
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-1.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-1"
              style={{ width: "100%", height: "100%" }}
            />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-2.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-2"
              style={{ width: "100%", height: "100%" }}
            />


          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-3.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-3"
              style={{ width: "100%", height: "100%" }}
            />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-4.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-4"
              style={{ width: "100%", height: "100%" }}
            />
 
          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-5.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-5"
              style={{ width: "100%", height: "100%" }}
            />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide relative flex flex-col justify-center items-center pb-2">
            <Image
              src="/slide-6.jpg"
              width={1500}
              height={1024}
              priority
              alt="slider-6"
              style={{ width: "100%", height: "100%" }}
            />

          </SwiperSlide> 
        

        </div>
      </Swiper>
    </div>
  );
}