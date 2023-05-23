const readline = require('readline-sync');

console.log ('What is the bill?');
let billAmount = readline.question();
billAmount = parseFloat(billAmount);
console.log('What is the tip percentage?');
let tipPercent = readline.question();
tipPercent = parseFloat(tipPercent);

let tip = (tipPercent * billAmount) / 100;
let totalAmount = billAmount + tip;

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${totalAmount.toFixed(2)}`);