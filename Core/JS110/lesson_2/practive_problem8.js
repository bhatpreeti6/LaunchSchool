let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];
Object.values(obj).forEach(arr => {
  arr.forEach(string => {
    string.split('').forEach(char => {
      if (vowels.includes(char)) console.log(char);
    });
  });
});