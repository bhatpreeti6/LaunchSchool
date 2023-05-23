const readline = require('readline-sync');
const VALID_INPUT = [['meter', 'meters', 'm'], ['feet', 'f']];
console.log('Please select the input type (meters/feet)');
let inputType = readline.question();
while (!VALID_INPUT.flat().includes(inputType)) {
  console.log('Please enter a valid input type feet/meters');
  inputType = readline.question();
}
let index = 0;
while (index < VALID_INPUT.length) {
  if (VALID_INPUT[index].includes(inputType)) {
    inputType = VALID_INPUT[index][0];
  }
  index += 1;
}

console.log(`Enter the length of the room in ${inputType}:`);
let length = readline.question();
length = parseInt(length, 10);
console.log(`Enter the width of the room in ${inputType}:`);
let width = readline.question();
width = parseInt(width, 10);
let area = length * width;

if (inputType === 'meter') {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet)`);
} else {
  console.log(`The area of the room is ${(area).toFixed(2)} square feet (${(area / 10.7639).toFixed(2)} square meters)`);
}