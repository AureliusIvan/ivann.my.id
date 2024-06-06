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

        {
          routes.map((page, index) => {

            if (page.path === currentPath) {
              return (
                  <Link
                      className='hover:text-gray-300 font-bold '
                      key={index} href={`/${page.path}`}>

                              <span className={"font-light"}>

                                user:/

                                </span>

                    {page.name.toLowerCase()}
                  </Link>
              )
            }
            return (
                <Link
                    className='hover:text-gray-300 global-border'
                    key={index} href={`/${page.path}`}>
                  {page.name.toLowerCase()}
                </Link>
            )
          })
        }

        <DarkModeToggle/>
      </nav>
  )
}

export {Navbar}
export type {NavbarRouteTypes}