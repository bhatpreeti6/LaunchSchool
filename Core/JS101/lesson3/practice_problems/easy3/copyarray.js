let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1;
arr2[0].first = 42;
arr2[2] = 50;
console.log(arr1);