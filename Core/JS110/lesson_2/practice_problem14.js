let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = Object.values(obj).map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return obj.size.toUpperCase();
  }
});

console.log(result);

//console.log(Object.values(obj));