function halvsies(array) {
  let midIndex = getMiddleIndex(array.length);
  let halvedArr = [[], []];
  halfArray(array,halvedArr,midIndex);
  return halvedArr;
}

function halfArray(array, halvedArr, midIndex) {
  array.forEach((element,index) => {
    let inputIndex = (index <= midIndex) ? 0 : 1;
    halvedArr[inputIndex].push(element);
  });
}
function getMiddleIndex(length) {
  return length % 2 === 0 ? (length / 2) - 1 : Math.floor(length / 2);
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
