import React from 'react'
import appState from './index.js'
import connect4Lib from 'connect4-lib'
import ResetBtn from './ResetBoard.js'

function winState (winner) {
  // let gameOver = appState.gameOver
  if (connect4Lib.gameStatus(appState.board).status !== 'in_progress') {
    if (winner === 'winner_red') {
      appState.rPlayerWinCount += 1
    }
    if (winner === 'winner_yellow') {
      appState.yPlayerWinCount += 1
    }
  }
  // appState.gameOver = true
}

function CurrentPlayer () {
  if (connect4Lib.gameStatus(appState.board).status === 'in_progress') {
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
    }
  } else if (connect4Lib.gameStatus(appState.board).status !== 'in_progress') {
    return (
      <div className='current-player'>
        {Winner()}
      </div>
    )
  }
}

function Winner () {
  if (connect4Lib.gameStatus(appState.board).status === 'winner_red') {
    return (
      <div>
        <h3>Winner Red!</h3>
        {ResetBtn()}
      </div>
    )
  } else if (connect4Lib.gameStatus(appState.board).status === 'winner_yellow') {
    return (
      <div>
        <h3>Winner Yellow!</h3>
        {ResetBtn()}
      </div>
    )
  } else if (connect4Lib.gameStatus(appState.board).status === 'tie') {
    return (
      <div>
        <h3>It Is A Tie!</h3>
        {ResetBtn()}
      </div>
    )
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
