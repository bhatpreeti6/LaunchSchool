function hexadecimalToInteger(string) {
  let sum = 0;
  const DIGITS = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  }
  let arrayOfnum = string.split('').map(char => DIGITS[char.toUpperCase()]);
  console.log(arrayOfnum);
  lengthOfArr = arrayOfnum.length;
  arrayOfnum.forEach((element,index) => {
    sum += (element * (16 ** (lengthOfArr - 1 - index)));

  });
  console.log(sum);
  return sum;

}
hexadecimalToInteger('4D9f') === 19871;