document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.gameBoard div')
  const statusDisplay = document.querySelector('#status')
  const restartButton = document.querySelector('#restart')
  let currentPlayer = 1
  statusDisplay.innerHTML = `Current Player: ${currentPlayer}`
  const column0 = [
    squares[35],
    squares[28],
    squares[21],
    squares[14],
    squares[7],
    squares[0]
  ]
  const column1 = [
    squares[36],
    squares[29],
    squares[22],
    squares[15],
    squares[8],
    squares[1]
  ]
  const column2 = [
    squares[37],
    squares[30],
    squares[23],
    squares[16],
    squares[9],
    squares[2]
  ]
  const column3 = [
    squares[38],
    squares[31],
    squares[24],
    squares[17],
    squares[10],
    squares[3]
  ]
  const column4 = [
    squares[39],
    squares[32],
    squares[25],
    squares[18],
    squares[11],
    squares[4]
  ]
  const column5 = [
    squares[40],
    squares[33],
    squares[26],
    squares[19],
    squares[12],
    squares[5]
  ]
  const column6 = [
    squares[41],
    squares[34],
    squares[27],
    squares[20],
    squares[13],
    squares[6]
  ]
  const columns = [
    column0,
    column1,
    column2,
    column3,
    column4,
    column5,
    column6
  ]

  const winCombos = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 117, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 24]
  ]
  function checkWin() {
    for (let z = 0; z < winCombos.length; z++) {
      const square0 = squares[winCombos[z][0]]
      const square1 = squares[winCombos[z][1]]
      const square2 = squares[winCombos[z][2]]
      const square3 = squares[winCombos[z][3]]
      if (
        square0.classList.contains('playerOne') &&
        square1.classList.contains('playerOne') &&
        square2.classList.contains('playerOne') &&
        square3.classList.contains('playerOne')
      ) {
        playerDisplay.innerHTML = 'Player 1 is victorious!'
      }
      if (
        square0.classList.contains('playerTwo') &&
        square1.classList.contains('playerTwo') &&
        square2.classList.contains('playerTwo') &&
        square3.classList.contains('playerTwo')
      ) {
        playerDisplay.innerHTML = 'Player 2 is victorious!'
      }
    }
  }
  squares.forEach((square) => {
    square.classList.add('empty')
  })
  restartButton.addEventListener('click', () => {
    resetBoard()
  })
  function resetBoard() {
    squares.forEach((square) => {
      square.classList.remove('claimed')
    })
  }
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
      if (currentPlayer == 1) {
        squares[i].classList.add('claimed')
        squares[i].classList.add('playerOne')
        squares[i].classList.remove('empty')
        currentPlayer = 2
        statusDisplay.innerHTML = `Current Player: ${currentPlayer}`
      } else if (currentPlayer == 2) {
        squares[i].classList.add('.claimed')
        squares[i].classList.add('playerTwo')
        squares[i].classList.remove('empty')
        currentPlayer = 1
        statusDisplay.innerHTML = `Current Player: ${currentPlayer}`
      }
    })
    checkWin()
  }
})
