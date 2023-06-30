function reverseWords(string) {
  const MIN_LENGTH = 5;
  return string.split(' ').map(word => {
    if (word.length >= MIN_LENGTH) return word.split('').reverse().join('');
    else return word;
  }).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch Scho'));            // "hcnuaL loohcS"