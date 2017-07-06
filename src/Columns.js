/* global appState */
import React from 'react'
import './index.css'
import GamePieces from './GamePieces.js'
import {gameStatus} from 'connect-four-lib'
import {winState} from './Header.js'

function changeTurns () {
  if (appState.turn === 'y') {
    appState.turn = 'r'
  } else {
    appState.turn = 'y'
  }
}

function changeColors (index) {
  let row = appState.board[index]
  if (gameStatus(appState.board).status !== 'in_progress') return
  for (var i = row.length - 1; i >= 0; i--) {
    if (row[i] === null) {
      row[i] = appState.turn
      winner()
      changeTurns()
      return
    }
  }
}

function winner () {
  let game = gameStatus(appState.board).status
  if (game === 'winner_red') {
    winState('winner_red')
  } else if (game === 'winner_yellow') {
    winState('winner_yellow')
  } else if (game === 'tie') {
  }
}
function GameColumns (board) {
  let gameColumnArr = board.map(function (column, piece) {
    return (
      <div key={piece}
        onClick={changeColors.bind(null, piece)}
        className='game-column'> {GamePieces(column, piece)}
      </div>
    )
  })
  return gameColumnArr
}

export default GameColumns
