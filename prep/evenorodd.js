function evenOrOdd(number) {
  if (parseInt(number) !== number) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(43);
evenOrOdd(2.34);