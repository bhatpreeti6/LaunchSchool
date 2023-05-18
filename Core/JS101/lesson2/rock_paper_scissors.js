const readline = require('readline-sync');
const VALID_CHOICES = [['rock', 'r'],
  ['paper', 'p'],
  ['scissors', 'sc'],
  ['lizard', 'l'],
  ['spock','sp']];


function winner(choice, compChoice) {
  if (choice === compChoice) return 'It\'s a tie';
  switch (choice) {
    case 'rock':
      if (compChoice === 'lizard' || compChoice === 'scissors') return 'You win';
      else return 'Computer Wins';
    case 'scissors':
      if (compChoice === 'paper' || compChoice === 'lizard') return 'You Win';
      else return 'Computer Wins';
    case 'paper':
      if (compChoice === 'rock' || compChoice === 'spock') return 'You win';
      else return 'Computer wins';
    case 'lizard':
      if (compChoice === 'paper' || compChoice === 'spock') return 'You Win';
      else return 'Computer Wins';
    case 'spock':
      if (compChoice === 'rock' || compChoice === 'scissors') return 'You win';
      else return 'Computer wins';
  }
}

function prompt(message) {
  console.log(`==> ${message}`);
}

function userPrompt(message) {
  console.log(`   ${message}`);
}

function readChoice() {
  prompt('\nEnter your choice:');
  VALID_CHOICES.forEach (arr => {
    userPrompt(`${arr.join(' or ')}`);
  });
  let choice = readline.question().toLowerCase();
  while (!VALID_CHOICES.flat().includes(choice)) {
    prompt('That is not a valid choice. Please choose again');
    choice = readline.question().toLowerCase();
  }
  VALID_CHOICES.forEach(arr => {
    if (choice === arr[1]) {
      choice = arr[0];
    }
  });
  return choice;
}

function displayBestOfFive() {
  let computerWins = 0;
  let userWins = 0;
  for (let count = 1; count < 6; count += 1) {
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex][0];
    let userChoice = readChoice();
    let gameWinner = winner(userChoice, computerChoice);
    prompt(`You chose ${userChoice}, computer chose ${computerChoice}. ${gameWinner}`);
    if (gameWinner.split(' ')[0] === 'You') userWins += 1;
    else if (gameWinner.split(' ')[0] === 'Computer') computerWins += 1;
    if ([userWins,computerWins].includes(3)) break;
  }
  prompt(`Score is User: ${userWins}  Computer: ${computerWins}`);
  if (userWins > computerWins) prompt ('\nYou are the grand Winner!!!');
  else if (userWins < computerWins) prompt('\nComputer is the grand Winner!!!');
  else prompt ('\nIts a tie! No one is the grand winner');
}

while (true) {
  console.clear();
  prompt('WELCOME TO ROCK PAPER SCISSORS LIZARD SPOCK!!!');
  displayBestOfFive();
  prompt('Do you want to play again? (y/n)');
  let playAgain = readline.question();
  while (playAgain.toLowerCase() !== 'y' && playAgain.toLowerCase() !== 'n') {
    prompt('Please select "y" or "n"');
    playAgain = readline.question();
  }
  if (playAgain.toLowerCase() === 'n') break;
}
