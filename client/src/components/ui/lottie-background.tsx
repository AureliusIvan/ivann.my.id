// lottie-background
"use client"
import React, {useEffect, useRef} from 'react'
import lottieBg from "@/static/lotties/day-night.json";
import lottie from "lottie-web";

const LottieBackground = ({
                            children
                          }: { children: React.ReactNode }
) => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottieBg,
        rendererSettings: {
          imagePreserveAspectRatio: 'xMidYMax slice',
          progressiveLoad: true,
          className: 'w-screen h-screen',
        },
      });
      animation.setSpeed(0.5)
    }
  }, []);
  return (
      <>
        <section
            ref={containerRef}
            className="md:w-screen w-screen fixed z-0 transform-gpu origin-bottom block md:hidden"
        />
        {children}
      </>
  )
}

export {LottieBackground}