'use client'
// Game Object Class with GSAP

import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface GameObjectProps {
    children: React.ReactNode
}

export function GameObject({children}: GameObjectProps) {
    const boxRef = useRef(null);
    const handleClick = () => {
        // GSAP animation for jump
        gsap.to(boxRef.current, {
            duration: 0.5,
            x: '+=30',
            y: '-=50',
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(boxRef.current, {
                    duration: 1,
                    y: '+=50',
                    ease: 'bounce.out'
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