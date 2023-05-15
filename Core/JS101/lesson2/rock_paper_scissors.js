const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper' , 'scissors'];

function displayWinner(choice,compChoice) {
  if ((choice === 'rock' && compChoice === 'scissors') ||
     (choice === 'paper' && compChoice === 'rock') ||
     (choice === 'scissors' && compChoice === 'paper')) {
    prompt('You win!!!');
  } else if ((choice === 'scissors' && compChoice === 'rock') ||
                (choice === 'rock' && compChoice === 'paper') ||
                (choice === 'paper' && compChoice === 'scissors')) {
    prompt('Computer Wins');
  } else {
    prompt('Its a tie');
  }

}

function prompt(message) {
  console.log(`==> ${message}`);
}

function readChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice. Please enter again');
    choice = readline.question();
  }
  return choice;
}


let playAgain;

do {
  console.clear();
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  let userChoice = readChoice();
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  displayWinner(userChoice,computerChoice);
  prompt('Do you want to play again? (y/n)');
  playAgain = readline.question();
  while (playAgain.toLowerCase() !== 'y' && playAgain.toLowerCase() !== 'n') {
    prompt('Please select "y" or "n"');
    playAgain = readline.question();
  }
} while (playAgain.toLowerCase() === 'y');
