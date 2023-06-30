function isPalindromicNumber(num) {
  let str = num.toString();
  console.log(str);
  let reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(2));           // true
console.log(isPalindromicNumber(5));            // true