import React from 'react'
import './index.css'

function GamePieces (columns, indexRow) {
  let className
  let gamePiecesArr = columns.map(function (piece, index) {
    if (piece === null) className = 'piece'
    if (piece === 'r') className = 'red'
    if (piece === 'y') className = 'yellow'
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
