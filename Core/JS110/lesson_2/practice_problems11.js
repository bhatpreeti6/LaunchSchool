
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  return Object.entries(obj).map(arr => {
    return [arr[0], arr[1] + 1];
  });
});

let resultArr = newArr.map(arr => {
  let newObj = {};
  arr.forEach(values => {
    newObj[values[0]] = values[1];
  });
  return newObj;
});


console.log(resultArr);
console.log(arr);