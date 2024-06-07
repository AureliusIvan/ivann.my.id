'use server'

import dynamic from 'next/dynamic'
import {Suspense} from "react";

const Environment = dynamic(() => import('@/components/game/environment'), {ssr: false})

const GameScreen = async () => (
    <section
        className="game-screen overflow-x-hidden isolate z-10 relative min-w-[100vw] min-h-[10rem] w-full h-full "
    >
      <Suspense fallback={
        <div
            className={"min-w-[100vw] min-h-[10rem] w-full h-full bg-gray-700 bg-opacity-20"}
        >
          loading...
        </div>
      }>
        <Environment>
          {/*  might be character here */}
        </Environment>
      </Suspense>
    </section>
);

export default GameScreen