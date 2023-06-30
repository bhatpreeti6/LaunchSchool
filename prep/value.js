function getDigits(num) {
  let placeDigit = 1;
  while (num) {
    let remainder = num % 10;
    console.log(`${placeDigit}s place is ${remainder}`);
    num = Math.floor(num / 10);
    placeDigit *= 10;
  }
}

getDigits(10357);