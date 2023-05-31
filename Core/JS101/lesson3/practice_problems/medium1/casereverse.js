let munstersDescription = "The Munsters are creepy and spooky.";
let munstersArr = munstersDescription.split('');
let reverseArr = munstersArr.map(letter => {
  return /[A-Z]/.test(letter) ? letter.toLowerCase() : letter.toUpperCase();
});

console.log(reverseArr.join(''));
/*console.log(munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}));*/
