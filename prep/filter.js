let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function returnNumber(arr, number) {
  return arr.filter(num => num === number);
}

function checkNumber(arr, number) {

  if (returnNumber(arr,number).length !== 0) {
    console.log(`Number ${number} present`);
  } else console.log (`Number ${number} not present`);

}

checkNumber(numbers1,4);
checkNumber(numbers2,4);
checkNumber(numbers3,4);