let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let startLetter = munstersDescription.slice(0,1);
let finalString = startLetter.toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(finalString);
console.log(munstersDescription);
