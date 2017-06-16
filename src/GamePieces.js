/* global appState */
import React from 'react'
import './index.css'

function changeTurns () {
  appState.turn = !appState.turn
  return appState.turn
}

function changeColors () {
  console.log(changeTurns())
}

function GamePieces (pieces, indexRow) {
  let gamePiecesArr = pieces.map(function (item, index) {
    return (
      <div className='game-piece'>
        <div key={index}
          onClick={changeColors}
          className='piece' />
      </div>
    )
  })
  return gamePiecesArr
}

export default GamePieces
