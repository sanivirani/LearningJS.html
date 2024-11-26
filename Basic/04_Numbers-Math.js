const score = 500;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3)); // presision value

const cars = 23.1569;

console.log(cars.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // convert

//+++++++++++++++++++++++++++++  Math   ++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); // negative value are convert positive

console.log(Math.round(4.6)); // mostly use

console.log(Math.ceil(4.2)); // top 4.2 => 5
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 8, 9));
console.log(Math.max(4, 6, 8, 9));

console.log(Math.random()); // 0-1 value
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // important
