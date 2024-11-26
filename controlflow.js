// if

const isUserLogedin = true;
const tempreture = 41;
if (tempreture === 50) {
  console.log("less than 50");
} else {
  console.log("tempreture is high");
}

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

// ------------- shorthand notation --------------

// const balance = 1000;

// if (balance > 500) console.log("test");
if (balance > 500) console.log("test");

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
}

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromeEmail = true;

if (userLoggedIn && debitcard && 2 == 5) {
  console.log("allow");
}
if (loggedInFromGoogle || loggedInFromeEmail) {
  console.log("logged in");
}
