let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruit = {};
  let keys = Object.keys(produce);
  for (let index = 0; index < keys.length; index++) {
    if (produce[keys[index]] === 'Fruit') {
      fruit[keys[index]] = produce[keys[index]];
    }
    }
  
  return fruit;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);