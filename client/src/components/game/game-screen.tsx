'use server'

import {Character} from '@/components/game/character'
import Environment from '@/components/game/environment'

const GameScreen = async () => (
    <section
        className="game-screen w-full overflow-x-hidden isolate z-10 relative"
    >
        <Environment>
            {/*<Character/>*/}
        </Environment>
    </section>
);

export default GameScreen