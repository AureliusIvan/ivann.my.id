'use client'

import Link from 'next/link'
import {DarkModeToggle} from './dark-mode-toogle'
import {usePathname} from 'next/navigation'

interface NavbarRouteTypes {
  path: string
  name: string
}

function Navbar({routes}: Readonly<{ routes: NavbarRouteTypes[] }>) {
  let currentPath: string = usePathname().split('/')[1]
  return (
      <nav
          className={
            `flex justify-center items-center  
            bg-transparent gap-4 p-4 relative z-10 w-full h-16`
          }
      >
        <div
            className={"transform-gpu transition-transform hover:scale-110"}
        />

        {
          routes.map((page, index) => {
                if (page.path === currentPath) {
                  return (
                      <Link
                          className='dark:hover:text-gray-300 font-bold bg-blue-50 bg-opacity-20
                          dark:bg-gray-700 px-[0.3rem]
                          rounded-md transform-gpu transition-transform
                          flex flex-row'
                          key={index} href={`/${page.path}`}>

                        <h4 className={"font-light"}>
                          user:/
                        </h4>

                        <h4
                            className={"animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white "}
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
          className={"hover:text-gray-300 global-border"}
          href={`/${path}`}
          key={path}
      >
        {name}
      </Link>
  )
}


export {Navbar}
export default Navbar
export type {NavbarRouteTypes}