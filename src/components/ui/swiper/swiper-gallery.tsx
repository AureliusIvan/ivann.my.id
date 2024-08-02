'use client'
// swiper gallery
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './swiper.scss';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect } from 'react';

gsap.registerPlugin(useGSAP);

interface DataProps {
  thumbnail: string
}

interface SwiperGalleryProps {
  data: DataProps[]
}

export function SwiperGallery({ data }: SwiperGalleryProps) {

  const handleMouseEnter = (index: number) => {
    gsap.to(`.swiper-slide:nth-child(${index + 1})`, {
      scale: 1.1,
      duration: 0.5
    })
  }

  const handleMouseLeave = (index: number) => {
    gsap.to(`.swiper-slide:nth-child(${index + 1})`, {
      scale: 1,
      duration: 0.5
    })
  }

  useGSAP(() => {
    data.forEach((data: DataProps, index) => {
      gsap.from(`.swiper-slide:nth-child(${index + 1})`, {
        duration: 1,
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500,
        z: Math.random() * 1000 - 500,
        opacity: 0,
        scale: 0,
        zIndex: 10,
        delay: index * 0.1
      })
    }
    )
  })


  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={5}
      spaceBetween={50}
      autoplay={{ delay: 500, disableOnInteraction: false }}
      navigation
      pagination
      className='overflow-visible w-full h-full'
    >
      {
        data.map((data: DataProps, index) => (
          <SwiperSlide
            key={index}
          >
            <Image
              // onClick={() => setOnDisplay(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className='rounded-lg transition-transform duration-500 ease-in-out
              cursor-pointer overflow-visible'
              priority
              src={data.thumbnail}
              alt="Post Image"
              width={380}
              height={200}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}