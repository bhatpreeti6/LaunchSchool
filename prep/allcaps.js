function allCaps(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));