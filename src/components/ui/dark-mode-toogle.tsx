"use client"

import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DarkModeToggle() {
  const {setTheme} = useTheme()

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
              className='bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-110'
              variant="ghost" size="icon">
            <Sun
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0
                        text-amber-500 hover:text-amber-600 transition-all duration-300"/>
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100
                        text-blue-400 hover:text-blue-300"/>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[140px] backdrop-blur-md">
          <DropdownMenuItem 
            onClick={() => setTheme("light")}
            className="cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          >
            <Sun className="mr-2 h-4 w-4 text-amber-500" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme("dark")}
            className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <Moon className="mr-2 h-4 w-4 text-blue-400" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme("system")}
            className="cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <svg className="mr-2 h-4 w-4 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
