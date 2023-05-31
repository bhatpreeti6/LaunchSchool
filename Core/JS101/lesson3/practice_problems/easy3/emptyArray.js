let numbers = [1, 2, 3, 4];

//First method
/*while (numbers.length) {
  numbers.pop();
}*/

//second method
/*while (numbers.length) {
  numbers.shift();
}*/

//numbers.length = 0;
numbers.splice(0, numbers.length);


console.log(numbers);