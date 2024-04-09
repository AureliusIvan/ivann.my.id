'use client'
// Game Screen Component

import React from 'react'
import { Character } from './character'
import Environment from './environment'

function GameScreen() {

  return (
    <div className="game-screen w-full overflow-x-hidden isolate z-10 relative">
      <Environment>
        <Character />
      </Environment>
    </div>
  )
}

export default GameScreen