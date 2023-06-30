let array = [0,4,8,5,1,0];
let num;
for (let index = 0; index < array.length - 1; index++) {
  num = array[index];
  for (let index2 = index + 1; index2 < array.length; index2++) {
    if (array[index2] < num) {
      num = array[index2];
      array[index2] = array[index];
      array[index] = num;
    }
  }
}
console.log(array);