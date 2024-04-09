'use server'

import React from 'react';
import Image from 'next/image';
import { cn, randomColor } from '@/lib/utils';


interface GalleryCardProps {
  image: string;
  title: string;
  description?: string;
}

export default async function GalleryCard({
  image,
  title,
  description
}: GalleryCardProps) {

  const color = randomColor()
  return (
    <div
      title={title}
      className={cn(
        // position relative
        `relative z-0`,
        'hover:scale-105 transition-transform duration-500',
        'hover:shadow-2xl hover:z-10',
        'cursor-pointer',
      )}

    >
      <Image
        className='filter brightness-125 rounded-3xl w-[300px] h-[300px]'
        src={image}
        alt={title}
        width={300}
        height={300}
        priority
        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
      />
      <span
        className={cn(`absolute top-[-10px] left-[-10px] text-primaryDark p-2 w-fit text-center rounded-3xl capitalize pr-5`,
        )}
        style={{
          backgroundColor: color
        }}
      >
        &#128204; {title}
      </span>
    </div>
  )
}