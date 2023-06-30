function countOccurrences(array) {
  let numOfOccuranceObj = {};
  for (let index = 0; index < array.length; index++) {
    let key = array[index];
    if (numOfOccuranceObj[key.toLowerCase()]) {
      numOfOccuranceObj[key.toLowerCase()] += 1;
    }
    else numOfOccuranceObj[key.toLowerCase()] = 1;
  }

  logOccurrences(numOfOccuranceObj);
}
function logOccurrences(obj) {
  let objKeys = Object.keys(obj);
  for (let key of objKeys) {
    console.log(key + ' => ' + obj[key]);
  }

}

let vehicles = ['car', 'car', 'truck', 'Car', 'SUV', 'truck',
               'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
/*car => 4
truck => 3
SUV => 1
motorcycle => 2*/