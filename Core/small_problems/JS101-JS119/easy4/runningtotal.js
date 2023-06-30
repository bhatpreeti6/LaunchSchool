function runningTotal(array) {
  //let totalArr = array[0] ? [array[0]] : [];
  //let totalArr = [];
  //let length = array.length;
  /*for (let index = 1; index < length; index++) {
    let newVal = totalArr[index - 1] + array[index];
    totalArr[index] = newVal;
    //console.log(newVal);
  }*/
  /*array.forEach((element,index) => {
    totalArr[index] = 0;
    for (let newInd = 0; newInd <= index; newInd++) {
      totalArr[index] += array[newInd];
    }
  });*/
  let sum = 0;
  let totalArr = array.map((num,index) => {
    sum += num;
    return sum;
  });
  return totalArr;

}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []