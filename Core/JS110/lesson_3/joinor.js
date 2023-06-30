function joinOr(array, delim = ', ', endSep = 'or') {
  let newStr = '';
  if (array.length <= 2) {
    newStr = array.join(' ' + endSep + ' ');
  } else {
    newStr = array.slice(0,-1).join(delim) + delim  + ' ' + endSep + ' ' + array.slice(-1);
  }
  return newStr;
}
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3,7,8], ', ', 'and');  // => "1, 2, and 3"
joinOr([], ',');                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"