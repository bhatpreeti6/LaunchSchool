function stringToInteger(string) {
  let multiplier = 1;
  let sum = 0;
  for (let index = string.length - 1; index >= 0; index--) {
    let num = string[index].charCodeAt() - 48;
    num *= multiplier;
    sum += num;
    multiplier *= 10;
  }
  return sum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("190130"));