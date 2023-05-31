const readline = require('readline-sync');

function retire(age,retireAge) {
  const date = new Date();
  console.log(date);
  console.log(`It's ${date.getFullYear()}. You will retire in ${date.getFullYear() + (retireAge - age)}.`);
  console.log(`You have only ${retireAge - age} years work to go!`);

}

console.log("What is your age?");
let age = Number(readline.question());

console.log("At what age would you like to retire?");
let retireAge = Number(readline.question());
while (retireAge < age) {
  console.log("Retirement age should be greater than your current age");
  retireAge = Number(readline.question());
}

retire(age,retireAge);

