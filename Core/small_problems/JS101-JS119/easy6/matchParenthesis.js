function isBalanced(string) {
  let array = [];
  for (let char of string) {
    if (char === '(') array.push(char);
    else if (char === ')') {
      if (!array.includes('(')) return false;
      else array.pop();
    }
  }
  return !(array.length);

}



console.log(isBalanced("What (is)) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What (((is))) up(") === false);

