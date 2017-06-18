import React from 'react'
import appState from './index.js'

function winState (winner) {
  let gameOver = appState.gameOver
  if (!gameOver) {
    if (winner === 'winner_red') {
      appState.rPlayerWinCount += 1
      console.log(appState.rPlayerWinCount)
    }
    if (winner === 'winner_yellow') {
      appState.yPlayerWinCount += 1
      console.log(appState.yPlayerWinCount)
    }
  }
  appState.gameOver = true
}

function CurrentPlayer () {
  if (appState.turn === 'r') {
    return (
      <div className='current-player'>
        <h3>Current Player</h3>
        <p>Red</p>
      </div>
    )
  } else if (appState.turn === 'y') {
    return (
      <div className='current-player'>
        <h3>Current Player</h3>
        <p>Yellow</p>
      </div>
    )
  } else if (appState.gameOver) {
    return (
      <div className='current-player'>
        {Winner()}
      </div>
    )
  }
}

function Winner () {
  if (winState('winner_red')) {
    return <h3>Winner Red!</h3>
  } else if (winState('winner_yellow')) {
    return <h3>Winner Yellow!</h3>
  }
}

function Header () {
  return (
    <div className='header'>
      <div className='red-player'>
        <p>Red</p>
        {appState.rPlayerWinCount}
      </div>
      {CurrentPlayer()}
      <div className='yellow-player'>
        <p>Yellow</p>
        {appState.yPlayerWinCount}
      </div>
    </div>
  )
}

export {Header,
        winState}
