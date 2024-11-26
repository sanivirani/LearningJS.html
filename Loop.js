// ---- noramally called loops ...  but industy called (iterations)  ---//

// basic for loop -----------( important ).

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  //  console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop value${i}`); // concat using `` backtict

  for (let j = 1; j < 10; j++) {
    //  console.log(`inner loop value ${j} and inner loop ${i}`); // concat
    //  console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["BMW", "TATA", "AUDI"];
// console.log(myArray.length);

// index <= myArray.length; (avoid = to)

for (let index = 0; index < myArray.length; index++) {
  // (index++) important to change condition

  const element = myArray[index];
  // console.log(element);
}

//------- break and continue keyword -----//

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5`);
    break;
  }
  // console.log(`value of i is ${index}`);
}

// -------- continue ----------//

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5`);
    continue;
  }
  // console.log(`value of i is ${index}`);
}
