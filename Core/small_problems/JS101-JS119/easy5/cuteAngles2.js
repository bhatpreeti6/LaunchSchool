function dms(num) {
  const DEGREESYM = '\xB0';
  const MINUTESINDEGREE = 60;
  const SECONDSINMINUTES = 60;

  let degree = Math.floor(num);
  let remainingMinutes = (num - degree).toFixed(3) * MINUTESINDEGREE;
  let minutes = Math.floor(remainingMinutes);
  let seconds = Math.floor((remainingMinutes - minutes) * SECONDSINMINUTES);

  let anglesArray = [String(degree), String(minutes), String(seconds)];
  let newArray =  prependZero(anglesArray);

  updateDegreeRange(newArray);
  return `${newArray[0]}${DEGREESYM}${newArray[1]}'${newArray[2]}"`;
}

function updateDegreeRange(array) {
  let degree = Number(array[0]);
  const FULLCIRCLE = 360;
  if (Math.sign(degree) === -1) {
    while (degree < 0) {
      degree += FULLCIRCLE;
    }
  } else {
    while (degree > FULLCIRCLE) {
      degree -= FULLCIRCLE;
    }
  }
  array[0] = String(degree);
}
function prependZero(arr) {

  for (let index = 1; index < arr.length; index++) {
    let str = arr[index];
    if (str.length < 2) {
      str = '0' + str;
    }
    arr[index] = str;
  }
  return arr;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // -1°00'00"
console.log(dms(400.56));  // 400°00'00"
console.log(dms(-40.45));  // -40°00'00"
console.log(dms(319.55));
console.log(dms(-4200)); // 420°00'00"