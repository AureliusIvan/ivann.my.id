'use server'

import {ReactNode} from 'react'
import {cn} from "@/lib/utils";


interface TitleProps {
    children?: ReactNode,
    animate?: "typing"
}

const Title = async ({children, animate}: TitleProps) => {
    const animation: string = `overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 animate-${animate}`
    return (
        <div className={"w-max"}>
            <h1
                className={cn(
                    'w-max text-4xl font-bold text-white text-center',
                    animate && animation
                )}
            >
                {children}
            </h1>
        </div>
    )
}

export {Title}