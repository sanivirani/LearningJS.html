// {} inside is scope. genrally scope mean were you access your variables 

// two type of scope Local and Global 

// Local Scope is only in your function like a block of code

/* Global Scope is use in whole page */


// lifetime variable of a variable

// Scope of a variable

// var c = 300;

let a = 500;

if (true) {
  let a = 10;
  const b = 20;
  console.log("sani:", a);
}

// console.log(a);

// -------------- Nested Scope ----------------

function one() {
  const username = "sani";

  function two() {
    const lastname = "virani";
    console.log(username);
  }

  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "sani";
  if (username === "sani") {
    const lastname = " virani";
    console.log(username + lastname);
  }
  // console.log(lastname);
}
// console.log(username);

// +++++++++++++++++++++++++ intereting ++++++++++++++++

// that type function

/* console.log(addone(5));

function addone(num) {
  return num + 1;
}
*/

function addone(num) {
  return num + 1;
}
addone(5);

// that type function

const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
