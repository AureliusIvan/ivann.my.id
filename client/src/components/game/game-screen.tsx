'use server'

import dynamic from 'next/dynamic'
const Environment = dynamic(() => import('@/components/game/environment'), { ssr: false })

const GameScreen = async () => (
    <section
        className="game-screen w-full overflow-x-hidden isolate z-10 relative"
    >
        <Environment>
        </Environment>
    </section>
);

export default GameScreen