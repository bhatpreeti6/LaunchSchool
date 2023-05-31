function triangle(num) {
  let counter = 1;
  let str;
  for (num; num > 0; num--) {
    str = '*'.repeat(counter).padStart(num + counter, ' ');
    console.log(str);
    counter += 1;
  }
}

triangle(5);
triangle(9);
triangle(3);

