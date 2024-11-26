// Immediately Invoked Functon Expressions (IIFE)

(function car() {
  // named IIFE

  console.log(`price`);
})();

// simple IIFE
((name) => {
  console.log(`car price ${name}`);
})("mustang");

// ------------- javascript execution -----------

/* 
1] Global exceution => this

2] Memory Phase =>

 val1->undefined
 val2->undefined
 addnew ->defination
 result1 ->undefined
 result2 ->undefined
 

3] Execution Phase
val1 <- 10
val2 <- 5
addnew -> new variable enviroment + execution thread

Memory Phase

val1 -> undefined
val1 -> undefined

*/
