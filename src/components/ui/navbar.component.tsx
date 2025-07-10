'use client'

import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toogle'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { MonoglyphicFont } from "@/app/font/font"
import { useState, useEffect } from 'react'

interface NavbarRouteTypes {
    path: string
    name: string
}

function Navbar({routes}: Readonly<{ routes: NavbarRouteTypes[] }>) {
    const pathname = usePathname()
    const currentPath = pathname.split('/')[1]
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        
        handleScroll() // Set initial state
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent hydration mismatch by using consistent initial state
    const shouldShowScrolledState = isMounted && isScrolled

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            shouldShowScrolledState
                ? "backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50" 
                : "bg-transparent"
        )}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand Section */}
                    <Link 
                        href="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <span className={cn("text-white text-lg font-bold", MonoglyphicFont.className)}>
                                I
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <h1 className={cn(
                                "text-xl font-bold text-neutral-900 dark:text-neutral-100",
                                "group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                "transition-colors duration-200",
                                MonoglyphicFont.className
                            )}>
                                Ivan Wijaya
                            </h1>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 -mt-1">
                                Software Engineer
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Navigation Links */}
                        <div className="flex items-center gap-6">
                            {routes.map((route, index) => (
                                <NavLink 
                                    key={index}
                                    path={route.path}
                                    name={route.name}
                                    isActive={route.path === currentPath}
                                />
                            ))}
                            
                            {/* Additional quick links */}
                            <a
                                href="#footer"
                                className={cn(
                                    "text-sm font-medium text-neutral-600 dark:text-neutral-400",
                                    "hover:text-blue-600 dark:hover:text-blue-400",
                                    "transition-colors duration-200",
                                    MonoglyphicFont.className
                                )}
                            >
                                Contact
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <DarkModeToggle />
                            
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium",
                                    "bg-gradient-to-r from-blue-600 to-purple-600",
                                    "text-white hover:from-blue-700 hover:to-purple-700",
                                    "transition-all duration-200 hover:scale-105",
                                    "shadow-lg hover:shadow-xl",
                                    MonoglyphicFont.className
                                )}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            <svg 
                                className={cn(
                                    "w-6 h-6 transition-transform duration-200", 
                                    isMounted && isMobileMenuOpen && "rotate-90"
                                )} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {isMounted && isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMounted && (
                    <div className={cn(
                        "md:hidden overflow-hidden transition-all duration-300 ease-out",
                        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                        <div className="py-4 space-y-4 border-t border-neutral-200 dark:border-neutral-700">
                            {routes.map((route, index) => (
                                <Link
                                    key={index}
                                    href={`/${route.path}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 rounded-lg text-base font-medium",
                                        route.path === currentPath
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                            : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                        "transition-colors duration-200",
                                        MonoglyphicFont.className
                                    )}
                                >
                                    {route.name}
                                </Link>
                            ))}
                            
                            <a
                                href="#footer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-base font-medium",
                                    "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                    "transition-colors duration-200",
                                    MonoglyphicFont.className
                                )}
                            >
                                Contact
                            </a>
                            
                            <div className="px-4 pt-2">
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "block text-center px-4 py-3 rounded-full text-sm font-medium",
                                        "bg-gradient-to-r from-blue-600 to-purple-600",
                                        "text-white",
                                        "transition-all duration-200",
                                        MonoglyphicFont.className
                                    )}
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

function NavLink({path, name, isActive}: NavbarRouteTypes & {isActive: boolean}) {
    return (
        <Link
            href={`/${path}`}
            className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                "group overflow-hidden",
                isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                MonoglyphicFont.className
            )}
        >
            {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
            )}
            <span className="relative z-10 flex items-center gap-2">
                {isActive && (
                    <span className="text-xs opacity-60">~/</span>
                )}
                {name.toLowerCase()}
                {isActive && (
                    <span className="w-1 h-4 bg-blue-500 dark:bg-blue-400 rounded animate-pulse" />
                )}
            </span>
        </Link>
    )
}

export { Navbar }
export default Navbar
export type { NavbarRouteTypes }