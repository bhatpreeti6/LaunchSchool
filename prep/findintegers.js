function findIntegers(array) {
  try {
    return array.filter(element => Number.isInteger(element));
  } catch (error) {
    console.log(`Error ${error.name} : ${error.message} occured`);
  } finally {
    console.log('End');
  }
}
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(3);
console.log(integers); // => [1, 3, -4]
 