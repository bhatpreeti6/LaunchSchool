/*function sequence(num) {
  let result = [];
  for (let count = 1; count <= num; count++) {
    result.push(count);
  }
  return result;
}*/

function sequence(num) {
  let array = [];
  array.length = num;
  let result = [...array].map((num,index) => index + 1);

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]