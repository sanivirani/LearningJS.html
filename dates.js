// dates convret method

let myDate = new Date();

/* 
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset()); */

console.log(typeof myDate); // date is object

// let myCreatedDate = new Date(2023, 0, 31);  // own cereated date

//let myCreatedDate = new Date(2023, 0, 3, 2);

//let myCreatedDate = new Date("2023-01-14");

let myCreatedDate = new Date("01-15-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleString("default", {
  weekday: "long",
});
