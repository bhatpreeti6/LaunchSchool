const MINUTESINHOUR = 60;
const HOURSINDAY = 24;
const MINUTESINDAY = MINUTESINHOUR * HOURSINDAY;

function afterMidnight(time) {
  let timeArr = time.split(':');
  let minutesAfterMidnight = (timeArr[0] * MINUTESINHOUR) + Number(timeArr[1]);
  return timeArr[0] === '24' ? 0 : minutesAfterMidnight;
}

function beforeMidnight(time) {

  return afterMidnight(time) ? MINUTESINDAY - afterMidnight(time) : 0;

}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));

