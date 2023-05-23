let munstersDescription = "The Munsters are creepy and spooky.";
/*let munstersArr = munstersDescription.split(' ');
let newString = '';
munstersArr.forEach(word => {
  let newArr = word.split('');
  newArr.forEach(char => {
    if (/[A-Z]/.test(char)) {
      newString = newString + char.toLowerCase();
    } else {
      newString = newString + char.toUpperCase();
    }
  });
  newString += ' ';
});

console.log(newString);*/
console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}));
