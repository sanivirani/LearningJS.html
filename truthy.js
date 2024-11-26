const userEmail = [];

if (userEmail) {
  console.log("user email");
} else {
  console.log("don't have email");
}

/* falsy values :

  false , 0 , -0 , BigInt 0n, "", null, undefined , NaN .

// truthy values :

  "0" ,'false' , " " , [] , {} , function(){} (empty function)  */

if (userEmail.length === 0) {
  console.log("array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// ---------------- true value -----------

/*

false == 0 
 true

false == ''  (empty string)
true

0 == ''
true

*/
