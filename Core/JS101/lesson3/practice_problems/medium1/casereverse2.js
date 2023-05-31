let munstersDescription = "The Munsters are crEepy and spooky.";

let munsterArray = munstersDescription.split('');
for (let index = 0; index < munsterArray.length; index++) {
  if (munsterArray[index].match(/[A-Z]/)) {
    munsterArray[index] = munsterArray[index].toLowerCase();
  } else {
    munsterArray[index] = munsterArray[index].toUpperCase();
  }
}

console.log(munsterArray.join(''));