'use client'
// Navbar Component
import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toogle'
import { usePathname } from 'next/navigation'
interface NavbarRouteTypes {
  path: string
  name: string
}

function Navbar({ routes }: Readonly<{ routes: NavbarRouteTypes[] }>) {
  let currentPath = usePathname().split('/')[1]
  return (
    <nav
      className='flex justify-center items-center space-x-4 py-4  bg-transparent'
    >
      {
        routes.map((page, index) => {
          if (page.path === currentPath) {
            return (
              <Link
                className='hover:text-gray-300 text-green-400'
                key={index} href={`/${page.path}`}>
                {page.name}
              </Link>
            )
          }
          return (
            <Link
              className='hover:text-gray-300'
              key={index} href={`/${page.path}`}>
              {page.name}
            </Link>
          )
        })
      }
      <DarkModeToggle />
    </nav>
  )
}

export { Navbar }
export type { NavbarRouteTypes }