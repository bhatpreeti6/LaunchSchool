const readline = require('readline-sync');
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const INITIAL_MARKER = ' ';
const WINNING_COMBOS = [['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
];
const WINNING_COUNT = 3;
const FIRST_MOVER = 'Computer';
const TOTAL_GAMES = 5;

function prompt(string) {
  console.log('==>' + string);
}

function chooseFirstMover() {
  let currentPlayer = FIRST_MOVER;

  if (FIRST_MOVER === 'choose') {
    prompt('Please choose who makes first move:');
    prompt('1. You    2. Computer');
    let choice = readline.question();

    while (!['1', '2'].includes(choice)) {
      prompt('Invalid choice. Please choose again:');
      choice = readline.question();
    }
    currentPlayer = choice === '1' ? 'Player' : 'Computer';
  }

  return currentPlayer;
}

function displayBoard(board) {
  console.clear();
  console.log(`Your sign is ${HUMAN_MARKER}. Computer's sign is ${COMPUTER_MARKER}`);
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
    board[count] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delim = ', ', endSep = 'or') {
  let newStr = '';

  if (array.length <= 2) {
    newStr = array.join(' ' + endSep + ' ');
  } else {
    newStr = array.slice(0,-1).join(delim) + delim  + endSep + ' ' + array.slice(-1);
  }

  return newStr;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Computer') computerChoosesSquare(board);
  else playerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Computer' ? 'Player' : 'Computer';
}

function playerChoosesSquare(board) {
  prompt(`Please choose square between ${joinOr(emptySquares(board))}`);
  let square = readline.question();

  while (!emptySquares(board).includes(square)) {
    prompt("Sorry this is not valid. Please choose again:");
    square = readline.question();
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square = findAtRiskSquare(board, COMPUTER_MARKER);

  if (!square) {
    square = findAtRiskSquare(board, HUMAN_MARKER);
  }

  if (!square) {
    square = board['5'] === INITIAL_MARKER ? 5 : null;
  }

  if (!square) {
    let boardSize = Object.keys(board).length;
    square = Math.ceil(Math.random() * boardSize);
    while (true) {
      if (emptySquares(board).includes(String(square))) break;
      square = Math.ceil(Math.random() * boardSize);
    }
  }

  board[square] = COMPUTER_MARKER;
}

function findAtRiskSquare(board, playersign) {
  for (let index = 0; index < WINNING_COMBOS.length; index++) {
    let array = WINNING_COMBOS[index];
    let values = [];

    for (let count = 0; count < array.length; count++) {
      let key = array[count];
      values.push([key, board[key]]);
    }

    let playerMarkCount = values.filter(val => val[1] === playersign).length;
    let emptyMarkCount = values.filter(val => val[1] === INITIAL_MARKER).length;

    if (playerMarkCount === 2 && emptyMarkCount === 1) {
      return values.filter(val => val[1] === INITIAL_MARKER).flat()[0];
    }
  }
  return null;

}

function someoneWon(board) {
  let winner;

  WINNING_COMBOS.forEach(combo => {
    let valuesAtSquare = [];
    combo.forEach(key => {
      valuesAtSquare.push(board[key]);
    });

    if (valuesAtSquare.every(value => value === COMPUTER_MARKER)) {
      winner = COMPUTER_MARKER;
    } else if (valuesAtSquare.every(value => value === HUMAN_MARKER)) {
      winner = HUMAN_MARKER;
    }

  });
  return winner;
}

function boardFull(board) {
  return !Object.values(board).some(value => value === ' ');
}

function displayResult(winMark) {
  if (winMark === COMPUTER_MARKER) prompt('Computer Wins\n\n');
  else if (winMark === HUMAN_MARKER) prompt('You win\n\n');
  else prompt("It's a tie!\n\n");
}

function updateScore(winMark, userWins, computerWins) {
  if (winMark === HUMAN_MARKER) userWins += 1;
  else if (winMark === COMPUTER_MARKER) computerWins += 1;
  return [userWins, computerWins];
}

function displayBestOfFive(humanWins,computerWins) {
  if (humanWins > computerWins) prompt('You won best of five!!!\n\n');
  else if (computerWins > humanWins) prompt('Computer won best of five!!!\n\n');
  else prompt('Its a tie! No one won best of five.\n\n');
}

function displayScore(computerWins, userWins) {
  prompt('SCOREBOARD');
  prompt(`YOUR WINS : ${userWins}  COMPUTER WINS : ${computerWins}\n\n`);

}

function isYesOrNo(choice) {
  const validChoices = ['y', 'yes', 'n', 'no'];
  return validChoices.includes(choice);
}

function playAgain() {
  prompt('Do you like to play again?(y/n)');
  let choice = readline.question().toLowerCase();

  while (!isYesOrNo(choice)) {
    prompt ('Enter a valid choice (y/n)');
    choice = readline.question().toLowerCase();
  }

  return choice[0];
}


console.clear();
prompt('LETS PLAY TICTACTOE!!!');
prompt('Player who wins best of five will be the grand winner.');
prompt('Please enter to continue');
readline.question();
console.clear();

while (true) {
  let computerWins = 0;
  let userWins = 0;
  let numOfGames = 1;

  while (numOfGames <= TOTAL_GAMES) {
    let board = initializeBoard();
    let currentPlayer = chooseFirstMover();
    displayScore(computerWins,userWins);

    while (true) {
      displayBoard(board);
      prompt(`\nGame number ${numOfGames}\n\n`);
      prompt(`Current Player is ${currentPlayer}`);
      chooseSquare(board, currentPlayer);
      displayBoard(board);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    let winMark = someoneWon(board);
    [userWins, computerWins] = updateScore(winMark, userWins, computerWins);

    displayResult(winMark);
    displayScore(computerWins,userWins);

    prompt('Please enter to continue');
    readline.question();
    console.clear();

    if (userWins === WINNING_COUNT || computerWins === WINNING_COUNT) break;
    numOfGames += 1;
  }

  displayScore(computerWins,userWins);
  displayBestOfFive(userWins,computerWins);

  if (playAgain() !== 'y') break;
}

prompt('Thanks for playing TicTacToe!');