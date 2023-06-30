function swapName(name) {
  let nameArray = name.split(' ');
  let newName = [];
  let lastName = nameArray.slice(-1);
  newName.push(lastName + ',');
  for (let index = 0; index < nameArray.length - 1; index++) {
    newName.push(nameArray[index]);
  }

  return newName.join(' ');
  //return name.split(' ').reverse().join(', ');
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"