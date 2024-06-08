"use server"

import Link from 'next/link'

export default async function NotFound() {
  return (
      <section
          className='
          text-center text-4xl font-bold min-h-[90vh] flex flex-col justify-center items-center
          '

      >
        <h2>Oops! Not Found</h2>

        <Link
            href="/"
            className={"text-blue-500 hover:text-blue-700 cursor-pointer"}
        >
          go to home
        </Link>
      </section>
  )
}