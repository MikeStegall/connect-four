import React from 'react'
import appState from './index.js'

function gameReset () {
  appState.turn = 'y'
  appState.board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ]
  appState.yPlayerWinCount = 0
  appState.rPlayerWinCount = 0
}

function NewGameBtn () {
  return (
    <div className='reset-btn-holder'>
      <button className='reset-btn' onClick={gameReset}>New Game</button>
    </div>)
}

export default NewGameBtn
