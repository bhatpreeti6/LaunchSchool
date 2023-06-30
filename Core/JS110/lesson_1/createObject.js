function createObject(array) {
  let obj = {};
  array.forEach((element,index) => {
    obj[element] = index;
  });
  return obj;
}
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
console.log(createObject(flintstones));
