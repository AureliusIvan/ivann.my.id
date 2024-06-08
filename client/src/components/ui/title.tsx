'use server'

import {ReactNode} from 'react'
import {cn} from "@/lib/utils";


interface TitleProps {
  children?: ReactNode,
  animate?: "typing",
  size?: "small" | "medium" | "large"
}

const Title = async ({children, animate, size}: TitleProps) => {
  const animation: string = `overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 animate-${animate}`
  const fontsize: string = size === "small" ? "text-2xl" : size === "medium" ? "text-3xl" : "text-3xl md:text-[4rem]"
  return (
      <div className={"w-max"}>
        <h1
            className={cn(
                'w-max font-bold text-white text-center text-4xl',
                animate && animation,
                size ? fontsize : "text-4xl",
                "leading-[2rem] md:leading-[4.5rem] tracking-tighter"
            )}
        >
          {children}
        </h1>
      </div>
  )
}

export {Title}