/*function factorial(number) {
  let result = 1;
  for (let count = 1; count <= number; count++) {
    result *= count;
  }
  return result;
}*/

function factorial(number) {
  if (number === 1) return 1;
  let result = number * factorial(number - 1);
  return result;
}

console.log(factorial(5));