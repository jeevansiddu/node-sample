//modules-- large projects split into modules
// every file is module by default
const sayHi = (name) => {
  console.log(`HIII ${name}`);
};
function sayhi(name) {
  console.log(`HII ${name}`);
}
const printHello = () => {
  console.log("Hello world");
};
printHello();
//local
let john = "john"; // not shared

//global
let jeevan = "jeevan";
let rishi = "rishi";
// sayhi("john");
// console.log(module);
module.exports = { sayHi, jeevan, rishi };
//export it as object so extract these object using dot method value

// module.exports= sayHi ; then use it   // export one object then may be use this method
// const sayhi = require(./folder name);

// available global module => OS, PATH, FS , HTTP
