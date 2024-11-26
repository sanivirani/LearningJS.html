function sayMyName() {
  console.log("s");
  console.log("a");
  console.log("n");
  console.log("i");
}

// sayMyName();

/*  function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
} */

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result; // after return exicute end

  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result", result);

// empty string is suppose a false value
// empty undefined false value

/* function loginUserMessage(username) {
  if (username === undefined) {
    console.log("enter a user name");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("sanivirani"))

console.log(loginUserMessage());
*/

function loginUserMessage(username = "same") {
  // defualt value sanme as pass

  if (!username) {
    console.log("enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("sanivirani"))

console.log(loginUserMessage("virani")); // pass a value overwrite value
