// import React te from './index.js'
import connectFourLib from 'connect-four-lib'

function saveState () {
  window.localStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  let local = window.localStorage.state
  window.appState = safelyParseJSON(local)
  console.log(window.appState.board)
}

function safelyParseJSON (local) {
  try {
    return JSON.parse(local)
  } catch (e) {
    return window.appState
  }
}

function gameReset () {
  window.localStorage.clear()
  window.appState.board = connectFourLib.createEmptyBoard()
  window.appState.rPlayerWinCount = 0
  window.appState.yPlayerWinCount = 0
  window.appState.turn = 'y'
}

function nextGame () {
  window.appState.board = connectFourLib.createEmptyBoard()
}

export {
  saveState,
  getSavedState,
  gameReset,
  nextGame
}
