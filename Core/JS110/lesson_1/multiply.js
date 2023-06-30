function multiply(numbers, num) {
  let newNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    newNumbers.push(numbers[index] * num);
  }
  return newNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]