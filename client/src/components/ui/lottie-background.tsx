// lottie-background
"use client"
import React, {useEffect, useRef} from 'react'
import Image from "next/image";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const LottieBackground = ({
                            children
                          }: { children: React.ReactNode }
) => {
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo('#app-background', {
      opacity: 1,
      backgroundAttachment: 'fixed',
    }, {
      opacity: 0,
      ease: 'power3',
      duration: 3,
      repeat: -1,
      yoyo: true,
      repeatDelay: 4
    })
  })

  return (
      <div className={"isolate z-0 relative"}>
        <div
            ref={imageRef}
            id={'app-background'}
            className={"w-full h-full fixed object-cover transform-gpu duration-300 ease-in-out transition-all z-[-4]"}
            style={{
              backgroundImage: "url('/image/bg/image_5.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transition: 'background-image 0.5s ease-in-out'
            }}
        />
        <div
            id={'app-overlay'}
            className={"w-full h-full fixed object-cover transform-gpu duration-300 ease-in-out transition-all z-[-5]"}
            style={{
              backgroundImage: "url('/image/bg/image_4.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transition: 'background-image 0.5s ease-in-out'
            }}
        />
        <Image
            id={'app-background'}
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-1] md:hidden'
            src={'/image/bg/image_1.png'}
            alt={'background'}
            width={1920}
            height={1080}
        />
        <Image
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-2] md:hidden'
            src={'/image/bg/image_0.png'}
            alt={'background'}
            width={1920}
            height={1080}
        />
        {children}
      </div>
  )
}

export {LottieBackground}