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
  appState.gameOver = false
}

function ResetBtn () {
  return (
    <div className='reset-btn-holder'>
      <button className='reset-btn' onClick={gameReset}>New Game</button>
    </div>)
}

export default ResetBtn
