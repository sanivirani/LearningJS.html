const name = "sanivirani";
const virani = 95;

console.log(name + virani + "@");

// console(name + virani + value);

console.log(`hello my name ${name}amd my name is sanivirani95`); // best way to write

const gamename = new String("sanivirani-95-svj");

console.log(gamename[0]);
console.log(gamename._proto_);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt("5"));
console.log(gamename.indexOf("s")); // position

const cat = gamename.substring(0, 4); // last value not include
console.log(cat);

const nir = gamename.slice(-2, 3); // reverse to start
console.log(nir);

const str = "    bull       "; // maily - input form remove (spaces)
console.log(str);
console.log(str.trim());

const url = "https://svj.com/sani%20virani"; // replace any value
console.log(url.replace("%20", "-"));

console.log(url.includes("sundar")); // ask any

console.log(gamename.split("-")); // convert in array
