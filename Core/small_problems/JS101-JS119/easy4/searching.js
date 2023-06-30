const rlSync = require('readline-sync');

function getNumber() {
  console.log('Enter a number');
  return rlSync.question();
}

let numArr = [];
for (let index = 1; index < 6; index++) {
  numArr.push(getNumber());
}

let sixthNum = getNumber();

if (numArr.includes(sixthNum)) {
  console.log(`The number ${sixthNum} appears in ${numArr.join(',')}`);
} else console.log(`The number ${sixthNum} does not appear in ${numArr.join(',')}`);
console.log(numArr);
console.log(numArr.reverse());
console.log(numArr);