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

function stringToSignedInteger(string) {
  let sign = string[0];
  if (sign === '+' || sign === '-') {
    string = string.substring(1);
  }
  let integer = stringToInteger(string);
  integer = sign === '-' ? -integer : integer;
  return integer;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true