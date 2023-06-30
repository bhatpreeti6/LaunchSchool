function timeOfDay(number) {
  let sign = Math.sign(number);
  const MINUTESINHOUR = 60;


  let relativeHours = Math.abs(number) / MINUTESINHOUR;

  let absoluteTime = calculateAbsoluteTime(relativeHours, sign);

  let hour = Math.floor(absoluteTime);

  let minutes = Math.round((absoluteTime - hour) * MINUTESINHOUR);

  return updateFormat(hour) + ':' + updateFormat(minutes);
}

function calculateAbsoluteTime(relativeHours, sign) {
  const HOURSINDAY = 24;
  if (relativeHours > HOURSINDAY) {
    relativeHours %= HOURSINDAY;
    if (sign === -1) relativeHours = HOURSINDAY - relativeHours;
  } else if (sign === -1 && relativeHours < HOURSINDAY) {
    relativeHours = HOURSINDAY - relativeHours;
  }

  return relativeHours;
}
function updateFormat(number) {
  if (number < 10) return '0' + number;
  return number;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(-4231));
