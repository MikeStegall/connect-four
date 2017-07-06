/* global appState */
import React from 'react'
import connectFourLib from 'connect-four-lib'
import NewGameBtn from './NewGame.js'

function winState (winner) {
  if (connectFourLib.gameStatus(appState.board).status !== 'in_progress') {
    if (winner === 'winner_red') {
      appState.rPlayerWinCount += 1
    }
    if (winner === 'winner_yellow') {
      appState.yPlayerWinCount += 1
    }
  }
}

function CurrentPlayer () {
  if (connectFourLib.gameStatus(appState.board).status === 'in_progress') {
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
  } else if (connectFourLib.gameStatus(appState.board).status !== 'in_progress') {
    return (
      <div className='current-player'>
        {Winner()}
      </div>
    )
  }
}

function Winner () {
  if (connectFourLib.gameStatus(appState.board).status === 'winner_red') {
    return (
      <div>
        <h3>Winner Red!</h3>
        {NewGameBtn()}
      </div>
    )
  } else if (connectFourLib.gameStatus(appState.board).status === 'winner_yellow') {
    return (
      <div>
        <h3>Winner Yellow!</h3>
        {NewGameBtn()}
      </div>
    )
  } else if (connectFourLib.gameStatus(appState.board).status === 'tie') {
    return (
      <div>
        <h3>It Is A Tie!</h3>
        {NewGameBtn()}
      </div>
    )
  }
}

function Header () {
  return (
    <div className='header'>
      <div className='red-player'>
        Red
        <br />
        {appState.rPlayerWinCount}
      </div>
      {CurrentPlayer()}
      <div className='yellow-player'>
        Yellow
        <br />
        {appState.yPlayerWinCount}
      </div>
    </div>
  )
}

export {Header,
        winState}
