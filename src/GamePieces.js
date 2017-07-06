/* global appState */
import React from 'react'
import './index.css'
import connectFourLib from 'connect-four-lib'

function GamePieces (columns, indexRow) {
  let className
  let winnerCoord = connectFourLib.gameStatus(appState.board).coordinates
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
      <div key={index}
        className={className} />
    )
  })
  return gamePiecesArr
}

export default GamePieces
