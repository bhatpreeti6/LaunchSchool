function repeater(string) {
  console.log(string.split('').map(char => char + char).join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

