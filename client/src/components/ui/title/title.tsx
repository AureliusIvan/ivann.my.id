'use client'
// Title Component
import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Dancing_Script as Font } from "next/font/google";
import { cn } from '@/lib/utils';


const font = Font({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
})


gsap.registerPlugin(useGSAP);

export async function Title({ title }: { title: string }) {

  // split the title into array of letters
  // const words = title.split(' ')
  const letters = title.split('')

  useGSAP(() => {
    letters.forEach((letter, index) => {
      gsap.from(`.box${index}`, {
        duration: 1,
        x: Math.random() * 1000 - 500,
        y: Math.random() * 1000 - 500,
        z: Math.random() * 1000 - 500,
        opacity: 0,
        scale: 0,
        delay: index * 0.1
      })
    }
    )

    // flip the letters every 1 second
    setInterval(() => {
      // letters.forEach((letter, index) => {
      //   gsap.to(`.box${index}`, {
      //     duration: 1,
      //     rotationY: Math.random() * 360,
      //     rotationX: Math.random() * 360,
      //     rotationZ: Math.random() * 360,
      //     delay: index * 0.1
      //   })
      // }
      // )
      // gsap.to('.box1', {
      //   duration: 1,
      //   rotationY: Math.random() * 360,
      //   rotationX: Math.random() * 360,
      //   rotationZ: Math.random() * 360,
      // })
    }, 1000)
  })

  return (
    <h1
      className={cn('text-secondaryLight  text-4xl font-bold text-center box flex z-[1] isolate relative overflow-hidden', font.variable)}
    >
      {/* {title} */}
      {letters.map((word, index) => {
        return (
          <div key={index}
            className={cn(`box${index}`, font.variable)}
          >
            {word}
          </div>
        )
      })}
    </h1>
  )
}