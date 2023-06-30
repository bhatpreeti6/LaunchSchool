function integerToString(num) {
  const NUMBERS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };
  return getArrayOfChar(num,NUMBERS).reverse().join('');
}

function getArrayOfChar(num,NUMBERS) {
  let numArray = [];
  do {
    let remainder = num % 10;
    numArray.push(NUMBERS[remainder]);
    num = Math.floor(num / 10);
  } while (num > 0);
  //console.log(numArray);
  return numArray;
}

console.log(integerToString(4321));    // "4321"
console.log((4321).toString());
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"