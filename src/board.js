import React from 'react'
import './index.css'
import GameColumns from './Columns.js'

function GameBoard (gameBoard) {
  return (
    <div className='game-board'>
      {GameColumns(gameBoard)}
    </div>)
}

export default GameBoard
