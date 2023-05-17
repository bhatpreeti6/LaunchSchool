const readline = require('readline-sync');
const VALID_CHOICES = [['rock', 'r'],
  ['paper', 'p'],
  ['scissors', 'sc'],
  ['lizard', 'l'],
  ['spock','sp']];

let playAgain;

function winner(choice,compChoice) {
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

function readChoice() {
  prompt('Choose one:');
  VALID_CHOICES.forEach (arr => {
    prompt(`${arr.join(' or ')}`);
  });
  let choice = readline.question();
  while (!VALID_CHOICES.flat().includes(choice)) {
    prompt('That is not a valid choice. Please choose again');
    choice = readline.question();
  }
  VALID_CHOICES.forEach(arr => {
    if (choice === arr[1]) {
      choice = arr[0];
    }
  });
  return choice;
}


do {
  console.clear();
  prompt('WELCOME TO ROCK PAPER SCISSORS LIZARD SPOCK!!!');
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex][0];
  let userChoice = readChoice();
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  prompt(winner(userChoice,computerChoice));
  prompt('Do you want to play again? (y/n)');
  playAgain = readline.question();
  while (playAgain.toLowerCase() !== 'y' && playAgain.toLowerCase() !== 'n') {
    prompt('Please select "y" or "n"');
    playAgain = readline.question();
  }
} while (playAgain.toLowerCase() === 'y');
