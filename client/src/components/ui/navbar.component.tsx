// Navbar Component
import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toogle'

interface NavbarRouteTypes {
  path: string
  name: string
}

function Navbar({ routes }: Readonly<{ routes: NavbarRouteTypes[] }>) {
  return (
    <nav
      className='flex justify-center space-x-4 py-4 bg-gray-800 text-white'
    >
      {
        routes.map((page, index) => (
          <Link key={index} href={`/${page.path}`}>
            {page.name}
          </Link>
        ))
      }
      <DarkModeToggle />
    </nav>
  )
}

export { Navbar }
export type { NavbarRouteTypes }