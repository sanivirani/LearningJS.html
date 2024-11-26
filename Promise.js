const promiseOne = new Promise(function (resolve, reject) {
  // do an aync task
  // db calls, cryptography, network
  setTimeout(function () {
    console.log("async task is comlte");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promis consumed");
});

// resolve directly connection is .then

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log();
    resolve({ username: "sani", lname: "virani" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "sani", password: "1272" });
    } else {
      reject("ERROR:something wrong");
    }
    console.log();
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;

  // chaining previous data same be next value data
  // .then and .catch method
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved and rejected"));

// -------------- async and await ---------------- //

// async problem is a directly not haddle error

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "1272" });
//     } else {
//       reject("ERROR:js went wrong");
//     }
//   }, 1000);
// });

// ------ promis is evatualcompletion object ----//

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

// consumePromiseFive();

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1272" });
    } else {
      reject("ERROR:js went wrong");
    }
  }, 1000);
});

/* --- both methods are same depends on you which one are to you use ---*/

// try and catch method

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = fetch("https://jasonplaceholder.typicode.come/users");
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUser();

// -------------------- fetch method ------------------------ //

// fetch is a global fetch method start the proccess of fetching a resource from the network,returning a promise which is fulfiled once the response is available

// fetch () global function

// fetch is network based request

fetch(" https://api.github.com/users/hiteshchodhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error)); // error handle

/* interview quetion : for [promise] espesially { level2 (senior) software devloper }

    throw request by promise and return 404 error so when the error back (...reolve or reject... ) so  return as a < respones >

   /// when error that time request not pass on browser ///   */
  