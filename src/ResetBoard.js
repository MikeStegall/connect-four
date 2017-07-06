import React from 'react'
import {gameReset} from './Events.js'

function ResetBtn () {
  return (
    <div className='reset-btn-holder'>
      <button className='new-game-btn' onClick={gameReset}>Reset Game</button>
    </div>)
}

export default ResetBtn
