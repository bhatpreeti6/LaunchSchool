function logInBox(line,maxWidth = line.length + 4)  {
  if (validateMaxWidth(maxWidth)) {
    console.error('Error!The maximum width should be greater than 4');
    return;
  }

  let stringLen = getLineWidth(line.length,maxWidth);

  printHorizontal(stringLen);
  printEmpty(stringLen);
  wrapText(line,stringLen);
  printEmpty(stringLen);
  printHorizontal(stringLen);
}

function wrapText(line,maxLineLength) {
  let newString = '';

  do {
    newString = line.slice(0,(maxLineLength)).trimStart();
    printLine(newString + ' '.repeat(maxLineLength - newString.length));
    line = line.slice(maxLineLength);
  } while (maxLineLength < line.length);

  if (line) {
    printLine(line + ' '.repeat(maxLineLength - line.length));
  }

}
function getLineWidth(length,maxWidth) {
  return maxWidth && (maxWidth < (length + 4)) ? (maxWidth - 4) : length;
}
function printHorizontal(len) {
  console.log(`+${'-'.repeat(len + 2)}+`);
}

function printEmpty(len) {
  console.log(`|${' '.repeat(len + 2)}|`);
}

function printLine(line) {
  console.log(`| ${line} |`);
}

function validateMaxWidth(maxWidth) {
  return maxWidth <= 4;
}

logInBox('To boldly go where no one has gone before.', 20);
logInBox('To boldly go where no one has gone before.');