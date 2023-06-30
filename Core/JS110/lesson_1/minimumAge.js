let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minimumAge = Object.values(ages).reduce((minAge,currAge) => {
  return minAge < currAge ? minAge : currAge;
});

console.log(minimumAge);