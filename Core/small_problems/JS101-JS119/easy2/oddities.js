function oddities(arr) {
  let newArr = [];
  /*for (let index = 0; index < arr.length; index += 2) {
    newArr.push(arr[index]);
  }*/
  arr.forEach((element,index) => {
    if (index % 2 === 0) newArr.push(element);
  });
  return newArr;
}

function evenElements(arr) {
  let newArr = [];
  arr.forEach((element,index) => {
    if (index % 2 !== 0) newArr.push(element);
  });
  return newArr;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenElements([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenElements([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenElements(["abc", "def"])); // logs ['abc']
console.log(evenElements([123])); // logs [123]
console.log(evenElements([])); // logs []