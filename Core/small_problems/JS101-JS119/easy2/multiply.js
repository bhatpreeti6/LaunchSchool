const multiply = (number1, number2) => number1 * number2;

function square(number) {
  return multiply(number,number);
}

function power(number,exp) {
  let answer = 1;
  while (exp) {
    answer = multiply(number,answer);
    //console.log(answer);
    exp -= 1;
  }
  return answer;
}

console.log(power(4,4)); // logs true
console.log(power(3,3));
console.log(square(3)); // logs true