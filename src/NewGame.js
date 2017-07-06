import React from 'react'
import {nextGame} from './Events.js'

function NextGameBtn () {
  return (
    <div className='reset-btn-holder'>
      <button className='new-game-btn' onClick={nextGame}>Next Game</button>
    </div>)
}

export default NextGameBtn
