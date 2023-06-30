function union(arr1, arr2) {
  let combinedArr = [];
  arr1.forEach(element => {
    if (!combinedArr.includes(element)) combinedArr.push(element);
  });
  arr2.forEach(element => {
    if (!combinedArr.includes(element)) combinedArr.push(element);
  });

  return combinedArr;
}

console.log(union([1, 9, 1], []));    // [1, 3, 5, 6, 9]

