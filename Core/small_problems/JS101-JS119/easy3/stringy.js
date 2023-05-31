function stringy(num) {
  let resultString = '';
  for (let count = 0; count < num; count += 1) {
    resultString += (count % 2 === 0) ? '1' : '0';
  }
  return resultString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"