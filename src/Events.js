import connectFourLib from 'connect-four-lib'

function saveState () {
  window.localStorage.state = JSON.stringify(window.appState)
}

function getSavedState () {
  let local = window.localStorage.state
  window.appState = safelyParseJSON(local)
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
  window.appState.p1Name = ''
  window.appState.p2Name = ''
  window.appState.redName = ''
  window.appState.yellowName = ''
  window.appState.showPlayerInput = true
}

function nextGame () {
  window.appState.board = connectFourLib.createEmptyBoard()
}

function winState (winner) {
  if (connectFourLib.gameStatus(window.appState.board).status !== 'in_progress') {
    if (winner === 'winner_red') {
      window.appState.rPlayerWinCount += 1
    }
    if (winner === 'winner_yellow') {
      window.appState.yPlayerWinCount += 1
    }
  }
}

function onChange (evt) {
  if (evt.target.name === 'player1') {
    window.appState.p1Name = evt.target.value
  }
  if (evt.target.name === 'player2') {
    window.appState.p2Name = evt.target.value
  }
}

function onKeyPress (key) {
  if (key.charCode === 13) {
    setPlayerNames()
  }
}

function setPlayerNames () {
  if (window.appState.p1Name.length > 0) {
    window.appState.redName = window.appState.p1Name
  } else {
    window.appState.redName = 'Red'
  }
  if (window.appState.p2Name.length > 0) {
    window.appState.yellowName = window.appState.p2Name
  } else {
    window.appState.yellowName = 'Yellow'
  }
  window.appState.showPlayerInput = false
}

export {
  saveState,
  getSavedState,
  gameReset,
  nextGame,
  winState,
  onChange,
  onKeyPress,
  setPlayerNames
}
