import React from 'react'
import './index.css'
import GamePieces from './GamePieces.js'

function GameColumns (gameBoard) {
  let gameColumnArr = gameBoard.map(function (item, index) {
    return <div className='game-column'> {GamePieces(item, index)}</div>
  })
  return gameColumnArr
}

export default GameColumns
