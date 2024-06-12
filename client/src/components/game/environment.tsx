'use client'

import React, {useEffect} from 'react'
import gsap from 'gsap';
import lottie from 'lottie-web';
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
  useEffect(() => {
    // lottie.loadAnimation({
    //   // @ts-ignore
    //   container: document.getElementById('game-background'),
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   animationData: UfoLottie,
    // }).stop()
  }, [])
  let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 5,
    ease: 'power3',
  })

  useGSAP(() => {
    tl.to('#game-background', {
      x: '100vw',
      duration: 10,
      repeatDelay: 5,
    })
  })

  return (
      <section
          className="game-environment w-full h-full relative
            overflow-x-hidden overflow-visible
            isolate z-10 px-4 py-4 min-w-[100vw] min-h-[10rem]"
      >

        <GameObject>
          <div
              id={'game-background'}
              className="w-[1rem] h-[1rem] absolute object-cover transform-gpu duration-300 z-[-4]"
          />

          {/*{children}*/}

        </GameObject>
      </section>
  )
}

export default Environment