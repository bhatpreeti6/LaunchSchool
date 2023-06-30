function wordSizes(line) {
  let ansObj = {};
  if (!line) return ansObj;
  let lenArray = getLengths(line);
  /*for (let index = 0; index < lenArray.length; index++) {
    let key = lenArray[index];
    if (Object.keys(ansObj).includes(key)) {
      ansObj[key] += 1;
    } else ansObj[key] = 1;
  }*/
  lenArray.forEach(key => {
    if (Object.keys(ansObj).includes(key)) ansObj[key] += 1;
    else ansObj[key] = 1;
  });

  return ansObj;
}

function getLengths(line) {
  let wordsArr = line.split(' ');
  return wordsArr.map(word => word.replace(/[^A-Za-z]/g, '').length.toString());
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle didd;le, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));
console.log(wordSizes("Whatifthe"));
console.log(wordSizes('   '));                                            // {}