//Ask the user for first number
//Ask the user second number
//Ask the operation
//Perform the operation
//output
//bonus
const inputs = require('./calculator_messages.json');
const LANG = 'es';
function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalid(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}
const readline = require('readline-sync');
prompt(inputs[LANG].welcome);
let repeat = 'n';
do {
  prompt(inputs[LANG].question1);
  let number1 = readline.question();

  while (isInvalid(number1)) {
    prompt(inputs[LANG].invalidnumber);
    number1 = readline.question();
  }
  prompt(inputs[LANG].question2);
  let number2 = readline.question();
  while (isInvalid(number2)) {
    prompt(inputs[LANG].invalidnumber);
    number2 = readline.question();
  }
  prompt(inputs[LANG].operation);
  let operator = readline.question();
  while (!['1','2','3','4'].includes(operator)) {
    prompt(inputs[LANG].invalidops);
    operator = readline.question();
  }
  let output;
  switch (operator) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
  }
  console.log(`Output is ${output}`);
  prompt(inputs[LANG].repeatop);
  repeat = readline.question();
} while (repeat.toLowerCase() === 'y' || repeat.toLowerCase() === 'yes');
