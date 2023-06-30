let statement = "The Flintstones Rock";
//1. get a string
//2. create an array with all the letters in the string
//3. remove any repeating letters from the array and store it in another array
//4. iterate through the above array elements one by one
  //5. start an iteration on the orig array element
    //6. compare the element on line 4 to the element in the above array
    //7. if the elements are equal then increment the counter to 1
  //8.assingn the object with key as the elmement to the counter
  //9. reset the counter to 1
  //10. Repeat steps 4 to 9

let array = statement.split('').filter(letter => letter !== ' ');
let countObj = {};
let newArr = [];

array.forEach(char => {
  if (!newArr.includes(char)) newArr.push(char);
});


let count = 0;

newArr.forEach(char => {
  array.forEach(letter => {
    if (char === letter) count += 1;
  });
  countObj[char] = count;
  count = 0;
});

console.log(countObj);

