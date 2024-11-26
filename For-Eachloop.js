const coding = ["js", "ruby", "c", "java", "php"];

// call back function

// coding.forEach(function (Val) {
//   console.log(Val);
// });

// Arrow function

coding.forEach((item) => {
  console.log(item);
});

const cars = ["Bmw", "Audi", "TATA", "Honda"];

function printme(cars) {
  console.log(cars);
}

cars.forEach(printme); // call back function

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// array object (data base important)

const myCars = [
  {
    carname: "bmw",
    modal: "m4",
  },

  {
    carname: "audi",
    modal: "r8",
  },

  {
    carname: "tata",
    modal: "tiago",
  },
];

// for each does not return value

myCars.forEach((item) => {
  console.log(item.carname);
});

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5);  // basic of filter
// console.log(newNums);

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

const newNums = []; // using for each

myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});

console.log(newNums); // array is empty

// ---------------- basic book array ---------------//

const books = [
  { title: "Book one", genre: "Fication", Publish: 1981, edition: 2004 },
  { title: "Book two", genre: "Non-Fication", Publish: 2001, edition: 2008 },
  { title: "Book three", genre: "History", Publish: 1981, edition: 2004 },
  { title: "Book four", genre: "Non-Fication", Publish: 1999, edition: 2007 },
  { title: "Book five", genre: "Fication", Publish: 2010, edition: 2019 },
  { title: "Book six", genre: "Science", Publish: 1999, edition: 2010 },
  { title: "Book seven", genre: "History", Publish: 2018, edition: 1996 },
  { title: "Book eight", genre: "Fication", Publish: 2011, edition: 2016 },
  { title: "Book nine", genre: "History", Publish: 1981, edition: 2004 },
  { title: "Book ten", genre: "Math", Publish: 2005, edition: 1989 },
];

// const userBooks = books.filter((bk) => bk.genre === "Fication");

const userBooks = books.filter((bk) => {
  return bk.Publish >= 1981 && 2020;
});

console.log(userBooks);
