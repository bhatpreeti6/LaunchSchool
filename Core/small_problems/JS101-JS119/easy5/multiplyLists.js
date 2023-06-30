function multiplyList(array1, array2) {
  let length = array1.length;
  let resultArray = [];
  for (let index = 0; index < length; index++) {
    resultArray.push(array1[index] * array2[index]);
  }
  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
