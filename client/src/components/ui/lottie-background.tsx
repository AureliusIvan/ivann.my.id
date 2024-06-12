// lottie-background
"use client"

import {ReactNode} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

const LottieBackground = (
    {children}: { children: ReactNode }
) => {
  useGSAP(() => {
    gsap.fromTo('#app-background', {
      opacity: 1,
    }, {
      opacity: 0,
      ease: 'power3',
      duration: 4,
      repeat: -1,
      yoyo: true,
      repeatDelay: 5,
    })
  })

  return (
      <div className={"isolate z-0 relative"}>
        <Image
            alt={'background'}
            src={'/image/bg/image_5.png'}
            id={'app-background'}
            className="w-full h-full fixed object-cover transform-gpu duration-300 z-[-4]"
            width={1920}
            height={1080}
            priority
        />
        <Image
            alt={'background'}
            src={'/image/bg/image_4.png'}
            id={'app-overlay'}
            className="w-full h-full fixed object-cover transform-gpu duration-300 z-[-5]"
            width={1920}
            height={1080}
        />
        <Image
            id={'app-background'}
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-1] md:hidden'
            src={'/image/bg/image_1.png'}
            alt={'background'}
            width={1920}
            height={1080}
            priority
            fetchPriority={"high"}
            loading={"eager"}
        />
        <Image
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-2] md:hidden'
            src={'/image/bg/image_0.png'}
            alt={'background'}
            width={1920}
            height={1080}
            loading={"lazy"}
        />
        {children}
      </div>
  )
}

export {LottieBackground}