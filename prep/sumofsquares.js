function sumOfSquares(arr) {
  return arr.reduce((sum,element) => {
    return sum + (element * element);
  },0);
}
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83