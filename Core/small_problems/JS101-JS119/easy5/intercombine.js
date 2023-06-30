function interleave(array1, array2) {
  let newArr = [];
  //let newArr2 = array1.concat(array2);

  let newLen = array1.length + array2.length;
  
  //console.log(newArr2);
  /*for (let index = 0; index < newLen; index++) {
    let sourceIndex = Math.floor(index / 2);
    if (index % 2 === 0) {
      newArr.push(array1[sourceIndex]);
    } else newArr.push(array2[sourceIndex]);
  }*/

  array1.forEach((element,index) => {
    newArr.push(element,array2[index]);
  });

  let resultArr = array1.concat(array2).map((element,index) => {
    let sourceIndex = Math.floor(index / 2);
    if (index % 2 === 0) return array1[sourceIndex];
    else return array2[sourceIndex];
  });

  console.log(resultArr);
  return newArr;

}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]