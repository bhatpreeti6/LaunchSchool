const numberOfSections = [8, 4, 4, 4, 12];
const charArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function generateRandomChar() {
  let randomNum = Math.floor(Math.random() * charArray.length);
  //console.log(randomNum);
  return charArray[randomNum];
}

function createUUID() {
  let resultStr = '';
  numberOfSections.forEach(num => {
    for (let index = 1; index <= num; index++) {
      resultStr += generateRandomChar();
      //console.log(resultStr);
    }
    resultStr += '-';

  });

  return resultStr.slice(0,-1);
}

console.log(createUUID());


