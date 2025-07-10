'use client'

import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toogle'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import { MonoglyphicFont } from "@/app/font/font";

interface NavbarRouteTypes {
    path: string
    name: string
}

function Navbar({routes}: Readonly<{ routes: NavbarRouteTypes[] }>) {
    let currentPath: string = usePathname().split('/')[1]
    return (
        <nav
            className={cn(`
          flex justify-center items-center gap-6  // Increased gap for items
          bg-transparent p-4 relative z-10 
          w-full h-16 
          tracking-wide 
          border-b border-neutral-200 dark:border-neutral-700`, // Consistent subtle bottom border
                MonoglyphicFont.className)
            }
        >

            {
                routes.map((page, index) => {
                        if (page.path === currentPath) {
                            return (
                                <Link
                                    className='
                          text-neutral-900 dark:text-neutral-100 // Base text colors
                          hover:text-blue-600 dark:hover:text-blue-400 // Consistent hover colors
                          font-semibold // Adjusted font weight
                          bg-neutral-100 dark:bg-neutral-800
                          px-3 py-1 // Adjusted padding
                          border border-neutral-300 dark:border-neutral-600 // Subtle border
                          rounded-md // Added rounded corners
                          transform-gpu transition-all duration-150 ease-in-out
                          flex flex-row items-center gap-1' // Align items and add gap
                                    key={index}
                                    href={`/${page.path}`}>

                                    <h4 className={"font-light opacity-75"}> {/* Softer prefix */}
                                        root:/
                                    </h4>

                                    <h4
                                        className={"animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-neutral-900 dark:border-r-neutral-100"} // Typing animation border color matches text
                                    >
                                        {page.name.toLowerCase()}
                                    </h4>
                                </Link>
                            )
                        }
                        return (
                            <UrlLink
                                key={index}
                                path={page.path}
                                name={page.name.toLowerCase()}
                            />
                        )
                    }
                )
            }
            <DarkModeToggle/> {/* Ensure DarkModeToggle is styled if necessary, or stands out appropriately */}
        </nav>
    )
}

function UrlLink({path, name}: NavbarRouteTypes) {
    return (
        <Link
            className={"font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 ease-in-out"}
            href={`/${path}`}
            key={path}
        >
            {name}
        </Link>
    )
}


export { Navbar }
export default Navbar
export type { NavbarRouteTypes }