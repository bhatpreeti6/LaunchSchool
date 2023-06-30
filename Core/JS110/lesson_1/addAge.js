let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

/*let totalAge = Object.values(ages).reduce((sum,age) => {
  return sum + age;
},0);*/

let totalAge = 0;
Object.values(ages).forEach(age => totalAge += age);

console.log(totalAge);