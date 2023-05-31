function centerOf(string) {
  let wordsArray = string.split('');
  let arrLength = wordsArray.length;
  if (arrLength % 2 !== 0) {
    return '"' + wordsArray[Math.floor(arrLength / 2)] + '"';
  } else return '"' + wordsArray[(arrLength / 2) - 1] + wordsArray[(arrLength / 2)] + '"';
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('xls'));                 // "x"