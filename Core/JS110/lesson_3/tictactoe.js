const readline = require('readline-sync');
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const WINNING_COMBOS = [['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
];

function prompt(string) {
  console.log('==>' + string);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function displayBoard(board) {
  console.clear();
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}
function initializeBoard() {
  let board = {};
  for (let count = 1; count < 10; count++) {
    board[count] = ' ';
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(array, delim = ', ', endSep = 'or') {
  let newStr = '';
  if (array.length <= 2) {
    newStr = array.join(' ' + endSep + ' ');
  } else {
    newStr = array.slice(0,-1).join(delim) + delim  + ' ' + endSep + ' ' + array.slice(-1);
  }
  return newStr;
}
function playerChoosesSquare(board) {
  prompt(`Please choose square between ${emptySquares(board).join()}`);
  let square = readline.question();
  while (!emptySquares(board).includes(square)) {
    prompt("Sorry this is not valid. Please choose again:");
    square = readline.question();
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesBoard(board) {

  let square = Math.ceil(Math.random() * 9);
  while (true) {
    if (emptySquares(board).includes(String(square))) break;
    square = Math.ceil(Math.random() * 9);
  }

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  let winner = '';
  WINNING_COMBOS.forEach(array => {
    let valAtPosition = [];
    array.forEach(key => {
      valAtPosition.push(board[key]);
    });
    if (valAtPosition.every(value => value === '0')) winner = '0';
    else if (valAtPosition.every(value => value === 'X')) winner = 'X';
  });
  return winner ? winner : false;
}
function boardFull(board) {
  return !Object.values(board).some(value => value === ' ');
}

function displayResult(winMark) {
  if (winMark === COMPUTER_MARKER) prompt('Computer Wins');
  else if (winMark === HUMAN_MARKER) prompt('You win');
  else prompt("It's a tie!");
}

while (true) {

  let board = initializeBoard();
  while (true) {

    playerChoosesSquare(board);
    displayBoard(board);
    if (someoneWon(board) || boardFull(board)) break;
    prompt('Computer is choosing now');
    sleep(1000);
    computerChoosesBoard(board);
    displayBoard(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  let winMark = someoneWon(board);
  displayResult(winMark);

  prompt('Do you like to play again?(y/n)');
  let choice = readline.question().toLowerCase()[0];
  if (choice !== 'y') break;
}
prompt('Thanks for playing TicTacToe!');