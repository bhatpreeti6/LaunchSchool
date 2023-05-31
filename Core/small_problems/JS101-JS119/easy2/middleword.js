function middleWord(line = ' ') {
  line = line.toString();
  let wordsArray = line.split(' ');
  if ([0,1].includes(wordsArray.length)) {
    return line;
  } else if (wordsArray.length % 2 === 0) {
    return wordsArray[(wordsArray.length / 2) - 1] + ' ' + wordsArray[wordsArray.length / 2];
  } else return wordsArray[(wordsArray.length - 1) / 2];
}

console.log(middleWord("Once upon a time"));
console.log(middleWord('Hello'));
console.log(middleWord("In the middle"));
console.log(middleWord(2));
console.log(middleWord(245));