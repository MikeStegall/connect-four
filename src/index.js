import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './board.js'
import connectFourLib from 'connect-four-lib'
import ResetBtn from './ResetBoard.js'
import PlayerInput from './PlayerInput.js'
import {Header} from './Header.js'
import {saveState, getSavedState} from './Events.js'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const initialState = {
  board: connectFourLib.createEmptyBoard(),
  turn: 'y',
  yPlayerWinCount: 0,
  rPlayerWinCount: 0,
  p1Name: '',
  p2Name: '',
  redName: '',
  yellowName: '',
  showPlayerInput: true
}

window.appState = initialState

function StateExplorer (state) {
  const stateJSON = JSON.stringify(state, null, 2)

  return (
    <section id='explorerContainer'>
      <h1>State Explorer</h1>
      <textarea value={stateJSON} />
    </section>
  )
}

function ConnectFour (state) {
  if (window.appState.showPlayerInput) {
    return <section id='gameContainer'>
      {Header()}
      {PlayerInput()}
      {GameBoard(state.board)}
      {ResetBtn()}
      <h6>Desinged by <a href='https://github.com/MikeStegall'>Mike Stegall</a></h6>
    </section>
  }
  if (!window.appState.showPlayerInput) {
    return (
      <section id='gameContainer'>
        {Header()}
        {GameBoard(state.board)}
        {ResetBtn()}
        <h6>Desinged by <a className='link' href='https://github.com/MikeStegall'>Mike Stegall</a></h6>
      </section>
    )
  }
}

// window.appState = initialState

function App (state) {
  let stateExplorerComponent = null
  if (showStateExplorer) stateExplorerComponent = StateExplorer(state)

  return (
    <div id='appContainer'>
      {ConnectFour(state)}
      {stateExplorerComponent}
    </div>
  )
}

getSavedState()
// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  saveState()
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)
