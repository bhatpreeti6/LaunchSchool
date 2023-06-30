function isRealPalindrome(string) {
  string = string.split('').filter(char => char.match(/[A-Za-z0-9]/g) ).join('').toLowerCase();
  console.log(string);
  let newStr = string.split('').reverse().join('');
  return (newStr === string);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false