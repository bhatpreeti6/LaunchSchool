function doubleOddIndices(numbers) {
  let newNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    if (index % 2 === 1) {
      newNumbers.push(numbers[index] * 2);
    } else newNumbers.push(numbers[index]);
  }
  return newNumbers;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));