const squares = document.querySelectorAll('.gameBoard div')
const resultDisplay = document.querySelector('#resultSpot')
const playerDisplay = document.querySelector('#playerSpot')
let currentPlayer = 1

function checkWin() {}
squares.forEach((square) => {
  square.classList.add('empty')
})
claimSpaceP1 = () => {
  squares[i].classList.add('claimed')
  squares[i].classList.add('playerOne')
  squares[i].classList.remove('empty')
  currentPlayer = 2
  playerDisplay.innerHTML = `Current Player: ${currentPlayer}`
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (squares[i].classList.contains('empty')) {
      if (currentPlayer == 1) {
        squares[i].classList.add('claimed')
        squares[i].classList.add('playerOne')
        squares[i].classList.remove('empty')
        currentPlayer = 2
        playerDisplay.innerHTML = `Current Player: ${currentPlayer}`
      } else if (currentPlayer == 2) {
        squares[i].classList.add('claimed')
        squares[i].classList.add('playerTwo')
        squares[i].classList.remove('empty')
        currentPlayer = 1
        playerDisplay.innerHTML = `Current Player: ${currentPlayer}`
      }
    }
  })
}
