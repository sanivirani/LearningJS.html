// ---------- Nullish coalscing Opearators (??) : null undefined   (only for null or undefined)  ---------- //

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;

//val1 = undefined ?? 15;

val1 = null ?? 10 ?? 10;

console.log(val1);

// -------------------------- Terniary Operator ------------------------- //

// condition ? true : false

const iceteePrice = 100;
iceteePrice <= 80 ? console.log("cheap") : console.log("high price");

// flag value is a true & false .
