'use client'
// Game Object Class with GSAP

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface GameObjectProps {
  children: React.ReactNode
}

export function GameObject({ children }: GameObjectProps) {
  const boxRef = useRef(null);

  useGSAP(() => {
    // let tween = gsap.to(".game-object", { rotation: 360, duration: 5, ease: "elastic" });
    // gsap.from('.game-object', {
    //   duration: 1,
    //   x: Math.random() * 1000 - 500,
    //   y: Math.random() * 1000 - 500,
    //   z: Math.random() * 1000 - 500,
    //   opacity: 0,
    //   scale: 0,
    //   zIndex: 10,
    // })
  })

  const handleClick = () => {
    // GSAP animation for jump
    gsap.to(boxRef.current, {
      duration: 0.5,
      x: '+=50',
      y: '-=100',
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(boxRef.current, {
          duration: 0.5,
          y: '+=100',
          ease: 'bounce.out'
        });
      }

      // kill the animation

    });
  };

  // const handleClick = () => {
  //   tween.play();
  // }


  // handle click event


  return (
    <div
      ref={boxRef}
      onClick={handleClick}
      className='game-object z-[100] isolate'>
      {children}
    </div>
  )
}