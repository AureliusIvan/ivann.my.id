'use server'

import dynamic from 'next/dynamic'
import {Suspense} from "react";
const Environment = dynamic(() => import('@/components/game/environment'), { ssr: false })

const GameScreen = async () => (
    <section
        className="game-screen w-full overflow-x-hidden isolate z-10 relative"
    >
        <Suspense  fallback={<div>Loading...</div>}>
        <Environment>
            {/*  might be character here */}
        </Environment>
        </Suspense>
    </section>
);

export default GameScreen