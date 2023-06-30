function swap(line) {
  let wordsArr = line.split(' ');
  /*for (let index = 0; index < wordsArr.length; index++) {
    let word = wordsArr[index];
    if (word.length === 1) continue;
    let firstChar = word[0];
    let lastChar = word[word.length - 1];
    word = lastChar + word.slice(1,word.length - 1) + firstChar;
    wordsArr[index] = word;
  }*/
  let swapArray = wordsArr.map(word => {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1,word.length - 1) + word[0];
    } else return word;
  });
  return swapArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"