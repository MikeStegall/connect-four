import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './board.js'
import connect4Lib from 'connect4-lib'
import NewGameBtn from './NewGame.js'
import {Header} from './Header.js'
import './index.css'

const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

const initialState = {
  board: connect4Lib.EMPTY_BOARD,
  turn: 'y',
  yPlayerWinCount: 0,
  rPlayerWinCount: 0
}

let appState = initialState

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
  return (
    <section id='gameContainer'>
      {Header()}
      {GameBoard(state.board)}
      {NewGameBtn()}
    </section>
  )
}

window.appState = initialState

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

// ---------------------------------------------------------
// Render Loop
// ---------------------------------------------------------

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)

export default appState
