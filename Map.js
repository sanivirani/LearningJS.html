const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNumber.map((num) => num + 10);

// const newNums = myNumber.map((num) => {
//   // scope open

//   num + 10;
// });

// chain reaction Array

const newNums = myNumber
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter( (num) => num >= 40)  // filter values are / ... true or false

console.log(newNums);
