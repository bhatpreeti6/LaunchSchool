function century(year) {
  let century = parseInt(year / 100,10);
  if (year % 100 !== 0) {
    century += 1;
  }
  let appendWord = appendToCentury(century);
  return String(century) + appendWord;
}

function appendToCentury(cent) {
  let lastTwo = cent % 100;
  if (lastTwo <= 13 && lastTwo >= 11) {
    return 'th';
  } else if (lastTwo % 10 === 1) {
    return 'st';
  } else if (lastTwo % 10 === 2) {
    return 'nd';
  } else if (lastTwo % 10 === 3) {
    return 'rd';
  } else return 'th';

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(10115));       //"102nd"