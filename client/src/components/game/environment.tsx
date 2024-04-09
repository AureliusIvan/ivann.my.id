// Game Environment Component
'use client'
import React from 'react'
import '@/components/game/styling/environment.scss'
import backgroundImage from '@/static/images/background-candyland.webp'
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



function Environment(
  { children }: { children: React.ReactNode }
) {


  useGSAP(() => {
    // loop the background unlimited
    gsap.to('#game-background', {
      duration: 10,
      x: 1000,
      repeat: -1,
      ease: 'none'
    })
  })

  return (
    <div className="game-environment w-full h-full relative ">

      <Image
        id='game-background'
        src={backgroundImage}
        alt="background"
        className="w-auto h-[5rem] absolute bottom-0 left-0 z-[0]"
      />


      {children}
    </div>
  )
}

export default Environment