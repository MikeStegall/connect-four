import React from 'react'
import './index.css'
import appState from './index.js'
import connect4Lib from 'connect4-lib'

function GamePieces (columns, indexRow) {
  let className
  let winnerCoord = connect4Lib.gameStatus(appState.board).coordinates
  let gamePiecesArr = columns.map(function (piece, index) {
    if (piece === null) className = 'piece'
    if (piece === 'r') className = 'red'
    if (piece === 'y') className = 'yellow'
    if (winnerCoord) {
      winnerCoord.forEach(function (coord) {
        if (coord[0] === indexRow && coord[1] === index) {
          className += ' winner'
        }
      })
    }
    return (
      <div className='game-piece'>
        <div key={index}
          className={className} />
      </div>
    )
  })
  return gamePiecesArr
}

export default GamePieces
