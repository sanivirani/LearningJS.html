// for of loop

// ["","",""]
// [{},{},{}]

// Array loop

const arr = ["sani", 2, 3, "virani", 5];

for (const val of arr) {
  console.log(val);
}

// String loop

const greeting = "hellosani";
for (const greet of greeting) {
  console.log(`Each char is ${greet}`);
}

// Maps  --- are iterable

/*
const map = new Map();
map.set("IN", "India");
map.set("Fr", "france");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
} */

const myObj = {
  game1: "NFS",
  game2: "GTA5",
};

for (const [key, value] of myObj) {
  console.log(key, ":-", value);
}

const myObj1 = {
  name: "sani",
  lname: "virani",
  age: 23,
  from: "hirana",
};

// for in loop

for (const key in myObj1) {
  console.log(`${key} shortcut is for ${myObj1[key]}`);
}

// for in loop for array

const programming = ["c++", "java", "php", "python"];

for (const key in programming) {
  console.log(programming[key]);
}

// map is not iterable

const map = new Map();
map.set("IN", "India");
map.set("Fr", "france");

for (const key in map) {
  console.log(key);
}
