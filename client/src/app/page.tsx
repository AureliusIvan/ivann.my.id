'use server'

import type {Metadata} from 'next'

import dynamic from 'next/dynamic';
import {Title} from '@/components/ui/title';
import {InProgressSection} from "@/components/section/in-progress";
import PostSection from "@/components/section/post";

const GameScreen = dynamic(() => import('@/components/game/game-screen'), {
  ssr: true,
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Aurelius Ivan Wijaya - Developer`,
    openGraph: {
      description: "I am Ivan, a software engineer who loves to write about web development, technology, and life.",
      type: 'website',
      emails: ['aureliusivanwijaya@gmail.com'],
      countryName: 'Indonesia',
      siteName: 'Aurelius Ivan Wijaya',
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
            mt-10 min-h-[20vh] w-full
            '
        >
          <Title size={"large"}>
            {/*(on development) <br/>*/}
            Hi. I&#39;m Ivan.<br/>
            a developer.
          </Title>


          <p className={"text-center font-light animate"}>
            I loves to write about web development, <br/>
            technology, and life.
          </p>

        </section>

        {/* Game Section */}
        <section
        >

          <GameScreen/>

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


        {/* In Progress */}
        <section
            className="w-full flex flex-col items-center
            justify-center gap-4 m-4"
        >
          <Title size={"medium"}>
            Project
          </Title>

          (on development)

          <InProgressSection/>

        </section>

        {/* Awards Section */}
        <section>

          <Title>
            Awards
          </Title>

          (on development)

        </section>
      </main>

  )
}


export default Home;