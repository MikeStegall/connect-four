import React from 'react'
import './index.css'
import GamePieces from './GamePieces.js'
import appState from './index.js'
import {gameStatus} from 'connect4-lib'

function changeTurns () {
  if (appState.turn === 'y') {
    appState.turn = 'r'
  } else {
    appState.turn = 'y'
  }
}

function changeColors (index) {
  let row = appState.board[index]
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
    console.log('Winner Red')
  } else if (game === 'winner_yellow') {
    console.log('Winner Yellow')
  } else if (game === 'tie') {
    console.log('tie')
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
