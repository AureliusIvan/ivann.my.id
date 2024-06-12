// lottie-background
"use server"

import {ReactNode} from 'react'
import Image from "next/image";
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';

// gsap.registerPlugin(useGSAP);

const LottieBackground = async (
    {children}: { children: ReactNode }
) => {
  // useGSAP(() => {
  //       gsap.fromTo('#app-background', {
  //         opacity: 1,
  //         scale: 1.5,
  //
  //       }, {
  //         opacity: 0,
  //         ease: 'power1',
  //         duration: 1
  //       })
  //     }
  // )

  return (
      <div className={"isolate z-0 relative"}>
        {/*background for dark*/}
        <Image
            alt={'background'}
            src={'/image/bg/image_5.png'}
            id={'app-background'}
            className="w-screen h-screen fixed object-cover z-[-5] scale-100"
            width={1920}
            height={1080}
            priority
        />

        {/*background for light*/}
        <Image
            alt={'background'}
            src={'/image/bg/image_4.png'}
            id={'app-overlay'}
            className="w-screen h-screen fixed object-cover z-[-4] dark:opacity-0 opacity-100 transform-gpu duration-300 transition-all"
            width={1920}
            height={1080}
            priority
        />
        <Image
            id={'app-background'}
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-1] md:hidden'
            src={'/image/bg/image_1.png'}
            alt={'background'}
            width={1920}
            height={1080}
            priority
        />

        <Image
            className='bottom-0 object-bottom w-screen h-screen fixed object-contain transition-all z-[-2] md:hidden'
            src={'/image/bg/image_0.png'}
            alt={'background'}
            width={1920}
            height={1080}
            priority
        />
        {children}
      </div>
  )
}

export {LottieBackground}