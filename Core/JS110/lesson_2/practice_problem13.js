let arr = [[1, 6, 7], [1, 5, 3], [1, 11, 3]];

let sortedArr = arr.sort((array1, array2) => {
  let sumArr1 = array1.reduce((sum,num) => {
    if (num % 2 === 1) sum += num;
    return sum;
  },0);

  let sumArr2 = array2.reduce((sum,num) => {
    if (num % 2 === 1) sum += num;
    return sum;
  },0);

  if (sumArr1 < sumArr2) return -1;
  else if (sumArr1 > sumArr2) return 1;
  else return 0;
});

console.log(sortedArr);