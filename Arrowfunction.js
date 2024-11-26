const user = {
  username: "sani",
  age: 23,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "same";
// user.welcomeMessage();

// console.log(this);

function sani() {
  let username = "sanivirani";
  console.log(this.username);
}
sani();

const sani = function () {
  let username = "sani";
  console.log(this.username);
};

const sani = () => {
  let username = "sani";
  console.log(this);
};

sani();

// basic syntex () => {}

/* const addTwo = (num1, num2) => {     // curley bracket use to written return keyword
    return num1 + num2
}  */

// implesite return

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // not written return keyword

const addTwo = (num1, num2) => ({ username: "sani" });

console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5, 6];

// myArray.forEach(functoin(){}) correct syntext
