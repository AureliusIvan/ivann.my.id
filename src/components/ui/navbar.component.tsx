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
          flex justify-center items-center gap-4
          bg-transparent p-4 relative z-10 
          w-full h-16 
          tracking-wide 
          border-b-0 dark:border-textPrimaryDark border-black`, // Updated border color
                MonoglyphicFont.className)
            }
        >

            {
                routes.map((page, index) => {
                        if (page.path === currentPath) {
                            return (
                                <Link
                                    className='
                          dark:hover:text-accentDark font-bold // Updated hover text color
                          bg-blue-50 bg-opacity-20
                          dark:bg-neutral-800 px-[0.3rem] // Updated active link background
                          border-2 dark:border-textPrimaryDark border-black // Updated border color
                          transform-gpu transition-transform
                          flex flex-row'
                                    key={index}
                                    href={`/${page.path}`}>

                                    <h4 className={"font-light"}>
                                        root:/
                                    </h4>

                                    <h4
                                        className={"animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-textPrimaryDark "} // Updated border color for typing animation
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
            <DarkModeToggle/>
        </nav>
    )
}

function UrlLink({path, name}: NavbarRouteTypes) {
    return (
        <Link
            className={"hover:text-gray-300 dark:hover:text-accentDark font-bold"} // Updated hover text color for dark mode
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