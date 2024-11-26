"use strict"; // treat all js code as newer version

// alert(9 + 9); we are using node js not show output , show in  browser

// console.log(

//   3 + 3

//   );  code readability is should be high -- log (3+3)

let name = "sani";
let age = 23;
let isloggIn = false;

// ========= datatype ====== //

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null  => stand alone value  // empty value
// undefined => value not assign
// symbol => unique

// object

// ============= convert (typeof) ========== //

// let score = "sani";

let score = "95";

// const {score} = req.body  --- how to find datatype

console.log(typeof score); // find a value are which type
// console.log(typeof (score));  finde a vlaue as method

let valueInNumber = Number(score); // you know 100% operations are numbers so
console.log(typeof valueInNumber);

// let car = "tata2012";
let car = null;

console.log(car);

let newvalueInNumber = Number(car);
console.log(newvalueInNumber);

// ================== End ============================ //

// ******************  conversion ************************* //

// "95" => 95
// "95abc" => NaN // not a number // type data type
// true => 1; false=> 0 //  in boolean
// "sani"=>true
// ""=>false

// convert in boolean

let isloggedIn = "sani";

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "sani" => true

// ==================================================

// convert in string //

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// ********************* Operations ***************** //

let value = 3;
let nagValue = -value;
console.log(nagValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); // power
console.log(2 / 3);
console.log(2 % 3); // remider usefull in cryptography

// ---------- concat -------------//

let str1 = "sani";
let str2 = "virani";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "1"); // first [1 + 2 = 3] then second ["1"] ans => 31

// ------------------------ concat end -------------------//

// console.log((3 +4) * 5 % 3);
console.log(3 + ((4 * 5) % 3));

console.log(+true); // true is a own bollean
console.log(+"");

// important //

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

// prefix & postfix //

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// ************** Comparison ***************** //

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 != 1);

console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // 0  avoid this
console.log(null == 0); //0
console.log(null >= 0);

console.log(undefined == 0); // 0
console.log(undefined > 0); // avoid this

console.log("2" == 2);

//strik check - check data type
console.log("2" === 2);


//----- null data type is object -- // console.log(typeof undefined);

