// (...num1) this is Rest Opretor
// rest opretor is all values are one bunddle

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(100, 300, 500, 1500)); // (...num1) works

// Object to Function

const user = {
  username: "sani",
  prices: 95,
};
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sani",
  price: 5999,
});

// use Array to Function

const myNewAray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[3];
}
// console.log(returnSecondValue(myNewAray));

console.log(returnSecondValue([200, 600, 800, 1200])); // your choice ex.use var or direct pass
