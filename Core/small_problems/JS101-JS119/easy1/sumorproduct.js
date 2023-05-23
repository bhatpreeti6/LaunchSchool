const readline = require('readline-sync');

console.log('Please enter an integer greater that 0:');
let number = parseInt(readline.question(),10);

while (!number || number < 0) {
  console.log('Please enter a valid integer greater than 0');
  number = parseInt(readline.question(),10);
}

console.log('Enter "s" to compute the sum "p" to compute the product:');
let choice = readline.question();
while (!['s','p'].includes(choice)) {
  console.log('Please enter valid choice (s or p)');
  choice = readline.question();
}
let numberArr = [];
for (let num = 1; num <= number; num += 1) {
  numberArr.push(num);
}

if (choice === 's') {
  const sum = numberArr.reduce(
    (accumutator,currentval) => accumutator + currentval,
    0
  );
  console.log(`The sum of integers between 1 and ${number} is ${sum}`);
} else {
  const product = numberArr.reduce(
    (accumulator,currentval) => accumulator * currentval,
    1
  );
  console.log(`The product of integers between 1 and ${number} is ${product}`);
}

