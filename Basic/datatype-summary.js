// data type in three type
// primitive
// type (7) : string, number, boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = false; // boolean type
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid);

const bigNumber = 1276954458975566n;
console.log(bigNumber);

// **********************************************************//

// Reference non primitive : Array , objects , functions

// make you javascript master master in Objects and Web events

const cars = ["bmw", "mercedes", "audi", "tata"];

// {} object
let myobj = {
  name: "sani",
  age: 23,
};

const myfunction = function () {
  console.log("hello sani");
};

console.log(typeof anotherid);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// memory : Stack (primitive) , Heap (non-primitive)

// ----------------- Stack --------------------//

// stack in values are a copy

let mycar = "bmw";

let newcar = mycar;
newcar = "ferrari";

console.log(mycar);
console.log(newcar);

// ----------------- Heap ---------------------//

// heap in values are heap send  refrence (orignal) change

let user = {
  email: "anvirani03@gmail.com",
  upi: "user@ybl",
};

let user2 = user;

user2.email = "sanivirani@.com.";
console.log(user);
