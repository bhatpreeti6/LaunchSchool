let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newFlintstones = Object.entries(flintstones);
let barney = newFlintstones.filter(arr => arr[0] === 'Barney').shift();
console.log(barney);
