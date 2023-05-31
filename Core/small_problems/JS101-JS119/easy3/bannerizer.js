function logInBox(line,maxWidth)  {
  if (maxWidth && maxWidth < 4) {
    console.error('The maximum width cannnot be less than 4!');
    return;
  } else if (maxWidth && maxWidth < (line.length + 4)) {
    line = line.slice(0,(maxWidth - 4));
  }
  let stringLen = line.length;
  let horizontalLine = `+${'-'.repeat(stringLen + 2)}+`;
  let emptyLine = `|${' '.repeat(stringLen + 2)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(`| ${line} |`);
  console.log(emptyLine);
  console.log(horizontalLine);

}

logInBox('Hello World! amazing day!', 20);
logInBox('Hello World! amazing day!',2);