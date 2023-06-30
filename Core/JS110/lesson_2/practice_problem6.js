let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munsterArray = Object.entries(munsters);
console.log(munsterArray);

for (let index = 0; index < munsterArray.length; index++) {
  let name = munsterArray[index][0];
  let age = munsterArray[index][1].age;
  let gender = munsterArray[index][1].gender;
  console.log(`${name} is a ${age}-year-old ${gender}`);
}