const path = require("path");

// console.log(path);

//give absolute path
const absolutepath = path.resolve(
  __dirname,
  "content",
  "subcintent",
  "subfile.txt"
);
console.log(absolutepath);

// get the base file
const base = path.basename(absolutepath);
console.log(`The base file is ${base}`);

// we need this because the path may be different in my local machine
// than yours ., that is seperator can be different , so hardcoding wont work
