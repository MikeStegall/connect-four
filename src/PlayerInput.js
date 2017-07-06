import React from 'react'
import {onChange, onKeyPress, setPlayerNames} from './Events.js'
import './index.css'

function PlayerInput (state) {
  return (
    <div className='player-input-form'>
      <h2>Enter Player Names:</h2>
      <input className='player-input' name='player1' type='text' placeholder='red' onKeyPress={onKeyPress} onChange={onChange} />
      <br />
      <input className='player-input' name='player2' type='text' placeholder='yellow' onKeyPress={onKeyPress} onChange={onChange} />
      <br />
      <input onClick={setPlayerNames} type='submit' className='submit-button' />
    </div>
  )
}

export default PlayerInput
