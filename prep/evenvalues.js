let myArray = [1, 3, 6, 11, 4, 2,4, 9, 17, 16, 0];

let evenArray = myArray.filter(val => val % 2 === 0);
//console.log(evenArray);

let newArray = myArray.map(num => {
  return (num % 2 === 0) ? 'even' : 'odd';
});

console.log(newArray)
let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray2.forEach(arr => {
  arr.forEach(num => {
    if (num % 2 === 0) console.log(num);
  });
});