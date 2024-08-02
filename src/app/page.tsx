'use server'

import type {Metadata} from 'next'

import {Title} from '@/components/ui/title';
import {ProjectSection} from "@/components/section/project";
import PostSection from "@/components/section/post";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Aurelius Ivan Wijaya - Developer`,
    openGraph: {
      description: "I am Ivan, a software engineer who loves to write about web development, technology, and life.",
      type: 'website',
      emails: ['aureliusivanwijaya@gmail.com'],
      countryName: 'Indonesia',
      siteName: 'Aurelius Ivan Wijaya',
    },
    robots: {
      follow: true,
      index: true,
    }
  }
}


async function Home() {
  return (
      <main
          className='flex flex-col items-center justify-center
            w-full h-full gap-4 p-6 relative'
      >

        {/* Hero Section */}
        <section
            className='
            flex flex-col items-center justify-center gap-4
            mt-10 min-h-[30vh] w-full'
        >
          <Title size={"large"}>
            The Boring Web
          </Title>
          <span>
            by Ivan
          </span>

          {/*  download cv*/}
          <a
              title={"Download CV"}
              href={'/cv.pdf'}
              target={"_blank"}
              className="
              border
              text-center font-bold
              bg-black text-white py-2 px-4
              dark:bg-black relative cursor-pointer md:hover:bg-neutral-800"
          >
            Download CV
          </a>
        </section>

        {/* Post Section */}
        <section
            className="w-full flex flex-col
            items-center justify-center gap-4"
        >
          <Title size={"medium"}>
            Recent Post
          </Title>

          <PostSection/>

        </section>


        {/*In Progress */}
        <section
            className="w-full flex flex-col items-center
            justify-center gap-4 m-4"
        >
          <Title size={"medium"}>
            Project
          </Title>

          (on development 🛠️)

          <ProjectSection/>

        </section>

      </main>

  )
}


export default Home;