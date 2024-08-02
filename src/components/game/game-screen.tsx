'use server'

import dynamic from 'next/dynamic'
import {Suspense} from "react";

const Environment = dynamic(() => import('@/components/game/environment'),{})

const GameScreen = async () => (
    <section
        id={'game-screen'}
        className="isolate z-10 relative min-h-[10rem] w-full h-fit"
    >
      <Suspense fallback={
        <div
            className={"min-w-[100vw] min-h-[10rem] w-full h-full bg-opacity-20"}
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