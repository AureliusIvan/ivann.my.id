'use client'

import gsap from 'gsap';
import {useRef, ReactNode} from 'react';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface GameObjectProps {
  children: ReactNode
}

export function GameObject({children}: GameObjectProps) {
  const boxRef = useRef(null);
  const handleClick = () => {
    // GSAP animation for jump
    gsap.to(boxRef.current, {
      duration: 0.5,
      x: '+=0',
      y: '-=30',
      ease: 'power1',
      onComplete: () => {
        gsap.to(
            boxRef.current,
            {
              y: '+=30',
              ease: 'circ'
        });
      }
    });
  };

  return (
      <div
          ref={boxRef}
          onTouchMove={(e) => e.preventDefault()}
          onClick={handleClick}
          className='game-object z-[100]'>

        {children}
      </div>
  )
}