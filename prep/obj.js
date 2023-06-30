let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arrKey = Object.keys(obj).map(key => key.toUpperCase());
console.log(arrKey);
console.log(obj);

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);