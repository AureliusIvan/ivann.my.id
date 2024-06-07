'use server'

import type {Metadata} from 'next'

import {Loading} from '@/components/ui/loading/loading';
import {Title} from '@/components/ui/title';
import {Suspense} from 'react';
import {InProgressSection} from "@/components/section/in-progress";
import GameScreen from '@/components/game/game-screen';


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
  }
}

async function Home() {
  return (
      <main
          className='flex flex-col items-center justify-center
            w-full h-full gap-4 p-6'
      >

        {/* Hero Section */}
        <section
            className='flex flex-col items-center justify-center gap-4'
        >
          <Title>
            {/*(on development) <br/>*/}
            Hi. I&#39;am Ivan.<br/>
            a Developer.
          </Title>

          <GameScreen/>

          <div
              className='flex flex-col items-center justify-center w-full gap-4'
          >
          </div>

        </section>

        {/* Post Section */}
        <section
            className={"w-full flex flex-col items-center justify-center gap-4"}
        >
          <Title>
            Recent Post
          </Title>
          (on development)
          {/* Post List */
          }
          <Suspense fallback={<Loading/>}>
          </Suspense>

        </section>


        {/* Achievement Section */}
        <section>
        </section>

        {/* In Progress */}
        <section
            className={"w-full flex flex-col items-center " +
                "justify-center gap-4 m-4"}
        >
          <Title>
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