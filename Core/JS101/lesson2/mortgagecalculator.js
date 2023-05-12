const readline = require('readline-sync');

function prompt(message) {
  console.log(`==>${message}`);
}

function mortgageCalculator(amount, rate, term) {
  if (rate === 0) {
    return amount / term;
  } else {
    return (amount * (rate / (1 - Math.pow((1 + rate), (-term)))));
  }

}

function fix (number) {
  return Number.parseFloat(number).toFixed(2);
}

function getAmount() {
  prompt('Please enter the loan amount:');
  let loanAmount = readline.question();
  loanAmount = Number(loanAmount.replace(/,/g ,'').replace('$', ''));
  while (!loanAmount) {
    prompt('This doesn\'t seem like a valid amount. Please enter again');
    loanAmount = readline.question();
    loanAmount = Number(loanAmount.replace(/,/g ,'').replace('$', ''));
  }
  return loanAmount;
}

function getRate() {
  prompt('Please enter the Annual Percentage Rate:');
  let annualRate =  Number.parseFloat(readline.question());
  while (!annualRate) {
    if (annualRate === 0) {
      return annualRate;
    }
    prompt('Please enter a valid value for Annual Percentage Rate');
    annualRate = Number.parseFloat(readline.question());

  }
  return annualRate;
}

function getTerm() {
  prompt('Please enter loan duration in months');
  let term = Number(readline.question());
  while (!term) {
    prompt('The loan duration is not valid. Please enter again');
    term = Number(readline.question());
  }
  return term;
}

let calculateAgain = 'y';
while (calculateAgain.toLowerCase() === 'y' || calculateAgain.toLowerCase() === 'yes') {
  console.clear();
  prompt('Welcome to the mortgage calculator!');
  const amount = getAmount();
  const monthlyRate = (getRate() / 12) / 100;
  const termInMonths = getTerm();
  let payment = mortgageCalculator(amount,monthlyRate,termInMonths);
  console.log('The monthly payment is: ' + fix(payment));
  prompt('Would you like to calculate another monthly payment?');
  calculateAgain = readline.question();
}