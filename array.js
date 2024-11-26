// arrray

const myArray = [0, 1, 2, 3, 4, 5];

const cars = ["bmw", "audi"];

const myArray1 = new Array(1, 2, 3);

console.log(myArray[0]);
console.log(cars[1]);
console.log(myArray1[2]);

//--------- Array Methos -------

//myArray.push(6);
//myArray.push(7);
//myArray.pop();

//myArray.unshift(9);
//myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

/* onst newArray = myArray.join(); // chnage in type

console.log(typeof newArray);
console.log(myArray); */

//  slice -- splice

console.log("A", myArray);

const mynn1 = myArray.slice(1, 3);
console.log(mynn1);
console.log("B", myArray);

const mynn2 = myArray.splice(1, 3);
console.log("c", myArray);
console.log(mynn2);

const heros1 = ["thor", "ironman", 95];
const heros2 = ["superman", "flash", false];

// heros1.push(heros2);

// const allheros = heros1.concat(heros2);
// console.log(allheros);

// --- spread

const allnew_heros = [...heros1, ...heros2];

console.log(allnew_heros);

// ---------

const arrray = [1, 2, 3, [5, 4, 6], 4, 8, 9, [4, 8, 9, 6]];

const real_array = arrray.flat(Infinity);

console.log(real_array);

// -- Data Scraping time usuing --

console.log(Array.isArray("virani")); // ----important to learn

console.log(Array.from("virani")); // ----important to learn

console.log(Array.from({ name: "virani" })); // intersting case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // ----important to learn
