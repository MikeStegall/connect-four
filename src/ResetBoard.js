import React from 'react'
import appState from './index.js'

function gameReset () {
  // appState.turn = 'y'
  appState.board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ]
}

function ResetBtn () {
  return (
    <div className='reset-btn-holder'>
      <button className='new-game-btn' onClick={gameReset}>New Game</button>
    </div>)
}

export default ResetBtn
