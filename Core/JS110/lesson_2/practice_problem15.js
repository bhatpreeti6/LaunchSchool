let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let flag = 1;
let newArr = arr.filter(obj => {
  let values = Object.values(obj);
  //console.log(values);
  values.forEach(arr => arr.forEach(num => {
    //console.log(num);
    if (num % 2 === 1) flag = 0;
  }));
  //console.log(flag);
  if (flag === 1) {
    //console.log('hi');
    return obj;
  }
  flag = 1;
});

console.log(newArr);