/*function crunch(line) {
  let charArray = line.split('');
  let index = 1;
  while (index < charArray.length) {
    if (charArray[index] === charArray[index - 1]) {
      charArray.splice(index,1);
      continue;
    }
    index += 1;
  }
  return charArray.join('');
}*/

function crunch(line) {
  let crunchStr = '';
  let index = 0;
  while (index <= line.length - 1) {
    if (line[index] !== line[index + 1]) {
      crunchStr += line[index];
    }
    index += 1;
  }
  return crunchStr;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('all'));                          // "a"
console.log(crunch(''));                           // ""