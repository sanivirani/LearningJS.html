// object decalre in two type ---[1].singleton   [2].literals

//---------object literals-----------

const mysym = Symbol("key1");

const JsUsre = {
  name: "sani",
  "full name": "sanivirani",
  [mysym]: "mykey1", // ------symbol must be access in squre breacket --.
  age: 23,
  location: "Ahemdabad",
  email: "saninnc@gamil.com",
  iSloggedIn: false,
  lastLoggedIn: ["Monday", "sturaday"],
};

// . notetion to value acess

console.log(JsUsre.email); // . time no need to string acess

console.log(JsUsre["email"]);

console.log(JsUsre["full name"]);

console.log(JsUsre[mysym]); //--- interview quation

// -------- values are change ------

JsUsre.email = "sanivirani034@gmail.bing";
//Object.freeze(JsUsre); // ------------------------- not to be achange
JsUsre.email = "sanivirani034@gmail.com";
console.log(JsUsre);

// --------- function -------

JsUsre.greeting = function () {
  console.log("hello sani virani");
};

JsUsre.greetingtwo = function () {
  console.log(`hello sani virani95,${this.name}`);
};

console.log(JsUsre.greeting);
console.log(JsUsre.greetingtwo());

//------------- object singlton (conustructor helps)----------

// const tinderUser = new Object();  // ---------------  singleton object

const tinderUser = {}; //  ----------------  non singleton object

tinderUser.id = "1272";
tinderUser.name = "sani";
tinderUser.isLohggrdIn = false;

//  console.log(tinderUser);

const regularuser = {
  email: "saniicodc@.com",
  fullname: {
    userfullname: {
      firstname: "sani",
      lastname: "virani",

      fathername: "janakbhai",
      secondname: "premjibhai",
      surname: "virani",
    },
  },
};

// console.log(regularuser.fullname.userfullname.surname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj, obj1 };
// const obj3 = Object.assign({}, obj1, obj2);  //....empty object useful to try.

const obj3 = { ...obj1, ...obj2 }; // ------------ must be use this --------//
console.log(obj3);

// use for that time data base value // ---- Most Important Topic --- espacially database --.

const users = [{}, {}, {}];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ---- please defined object --------//
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// value dors not exit //

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // --- Result in  boolean --//

// -------------------   Object De-structuring   ---------------------- //

const car = {
  carname: "tata",
  model: "safari",
  carprice: "15.lakh",
};

// console.log(car.carname); // basic way to print //

// +++++++++++++++++++++++++ synactical sugar  as your mind  +++++++++++++++++++++++ //

// const { carname } = car;
const { carname: name } = car; // .... this is a object de-structure .... //

console.log(name);

/*
// ----------- React method -------------//

const navbar = (props.company) => {};  * every time not write this props.companay
               ({company}) ............. De-Struturing.

navbar((company = "sani")); */

// --------------- json --------------//

// {
//    "name": "sani",       // ........object is a json has a no name ...//
//    "fname":"virani",

// }

// Array Api //

[{}, {}, {}];
