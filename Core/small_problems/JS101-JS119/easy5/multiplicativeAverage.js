function multiplicativeAverage(array) {

  let result = array.reduce((product, number) => product * number, 1);
  return ((result / array.length).toFixed(3));

}

console.log(typeof multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"