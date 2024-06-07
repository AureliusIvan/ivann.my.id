'use client'

import React from 'react'
import gsap from 'gsap';
import Lottie from "lottie-react";
import UfoLottie from "@/static/lotties/ufo-lotties.json";
import {useGSAP} from '@gsap/react';
import {GameObject} from '@/components/game/object'

gsap.registerPlugin(useGSAP);

interface EnvironmentProps {
  children?: React.ReactNode
}

function Environment(
    {children}: Readonly<EnvironmentProps>
) {
  useGSAP(() => {
    // loop the background unlimited
    gsap.to('#game-background', {
      duration: 10,
      x: '100vw',
      repeat: -1,
      ease: 'none',
      startAt: {x: -50}
    })
  })

  return (
      <section
          className="game-environment w-full h-full relative
            overflow-x-hidden overflow-visible
            isolate z-10 px-4 py-4 min-w-[100vw] min-h-[10rem]"
      >
        <GameObject>
          <Lottie
              id='game-background'
              className='w-auto h-[5rem] absolute'
              animationData={UfoLottie}
          />

          {/*{children}*/}

        </GameObject>
      </section>
  )
}

export default Environment