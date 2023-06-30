function oddLengths(arr) {
  let oddLengthArray = arr.map(str => str.length).filter(len => len % 2 !== 0);
  return oddLengthArray;
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]