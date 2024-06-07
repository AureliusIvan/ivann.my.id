'use client'

import Link from 'next/link'
import {DarkModeToggle} from './dark-mode-toogle'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from "react";

interface NavbarRouteTypes {
  path: string
  name: string
}

function Navbar({routes}: Readonly<{ routes: NavbarRouteTypes[] }>) {
  const [currentRoute, setCurrentRoute] = useState<Number>(0)

  useEffect(() => {
    // console.log('currentRoute', currentRoute)
  }, [currentRoute])

  const handleRouteChange = (index: number) => {
    // setCurrentRoute(index)
    // console.log('currentRoute', index)
  }

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
                  handleRouteChange(index)
                  return (
                      <Link
                          className='hover:text-gray-300 font-bold bg-gray-700 px-[0.3rem] rounded-md transform-gpu transition-transform'
                          key={index} href={`/${page.path}`}>

                              <span className={"font-light"}>

                                user:/

                                </span>

                        {page.name.toLowerCase()}
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
export type {NavbarRouteTypes}