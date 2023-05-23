let title = "Flintstone Family Members";
let len = title.length;
let spaces = Math.round((40 - len) / 2);
console.log(spaces);
console.log(title.padStart(spaces + len));