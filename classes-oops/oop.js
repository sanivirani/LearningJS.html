// onject

const user = {
  username: "sani",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};

// this keyword meance current contex

console.log(user.username);

// console.log(user.getUserDetails());
// console.log(this);

function user(username, loginCount, isloggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new user("sani", 8, true);
const userTwo = new user("falcon", 95, false);
console.log(userOne.constructor);
// console.log(userTwo);

// use new keyword first fall create empty object call - instance
// constructor function call by new keyword
// this keyword inject
// return function value
