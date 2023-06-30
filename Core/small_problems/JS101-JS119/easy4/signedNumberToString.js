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

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  switch (sign) {
    case -1:
      return '-' + integerToString(-num);
    case 0:
      if (1 / sign === 1 / 0) return integerToString(num);
      else return '-' + integerToString(-num);
    case 1:
      return '+' + integerToString(num);
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(-0) === "-0");
console.log(signedIntegerToString(0) === "0");