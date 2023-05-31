function randomAge(min, max) {
  if (min > max) {
    let newMin = max;
    max = min;
    min = newMin;
  }
  let teddyAge = Math.floor(Math.random() * (max - min + 1) + min);
  return teddyAge;
}
console.log(`Teddy is ${randomAge(10,15)} years old`);