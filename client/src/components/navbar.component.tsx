// Navbar Component
import React from 'react';
import ApplicationLogo from './applicationLogo.component';
import { Playfair } from 'next/font/google';

const inter = Playfair({ subsets: ["latin"] });

// font playfair


export const Navbar = () => {
  return (
    <div
      className={`w-full h-16 flex justify-between items-center  transition-all duration-300 ease-in-out hover:shadow-2xl
      shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
      sticky top-0 left-0 z-50 px-8 py-4 bg-white border-b border-[#E5E5E5]
      ${inter}`}
    >
      {/* left */}
      <div>
        <ApplicationLogo />
      </div>

      {/* right */}
      <div
        className='text-2xl md:text-3xl font-normal font-playfair text-text1 font-mono cursor-pointer transition-all duration-300 ease-in-out hover:text-primary'
      >
        Menu
      </div>
    </div>
  )
}