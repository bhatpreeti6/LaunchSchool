const readline = require('readline-sync');
let madlibInput = {
  noun: "dog",
  verb: "walk",
  adjective: "blue",
  adverb: "quickly"
};

madlibInput.noun = readline.question('Enter a noun: ');
madlibInput.verb = readline.question('Enter a verb: ');
madlibInput.adjective = readline.question('Eneter an adjective: ');
madlibInput.adverb = readline.question('Enter an adverb: ');

let story1 = `Do you ${madlibInput.verb} your ${madlibInput.adjective} ${madlibInput.noun} ${madlibInput.adverb}? That's hilarious!`;

console.log(story1);