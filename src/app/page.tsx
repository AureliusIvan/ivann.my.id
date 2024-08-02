'use server'

import type {Metadata} from 'next'

import {Title} from '@/components/ui/title';
import {ProjectSection} from "@/components/section/project";
import PostSection from "@/components/section/post";
import {cn} from "@/lib/utils";
import {MonoglyphicFont} from "@/app/font/font";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


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
            <span className={cn(MonoglyphicFont.className, `tracking-wide opacity-40`)}>
            ;
            </span>
          </Title>

          <HoverCard>
            <HoverCardTrigger
                className={cn(MonoglyphicFont.className, `tracking-wide cursor-pointer opacity-80 hover:opacity-60 underline`)}
            >
              by @Ivan
            </HoverCardTrigger>
            <HoverCardContent
                className={cn(MonoglyphicFont.className, `tracking-wide text-opacity-80 no-underline font-light`)}
            >
              A Software Engineer who loves to write about web development, technology, and life.
            </HoverCardContent>
          </HoverCard>

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
            <span className={'opacity-60'}>
            ;
            </span>

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
            <span className={'opacity-60'}>
            ;
            </span>
          </Title>

          (on development 🛠️)

          <ProjectSection/>

        </section>

      </main>

  )
}


export default Home;