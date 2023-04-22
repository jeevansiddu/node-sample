// npm  global command comes by default

//local Dependency- use it in only that project
// npm i <packagename>

//global dependancy
// npm install -g <packagename>

//package.json - manifest file(stores imp info about projects)
// to install package.json
// npm init -> (step by step process)
// npm init -y -> (creates by everything default)

// when you want to publish package name should be uinque

// when we create dependancy all info for that dependancy will be stored in the node_modules folder
// we store the dependencies in the package.json

// when you clone a repository when you type npm install the npm will download all the dependencies which are present in the package.json file and put a new node_modules

// i devdepency we will add folders used for linting formatting etc

// to run command in scripts we use npm name of command

// run command for nodemon is npm run dev

const lodash = require("lodash");
const items = [1, [2, [3, [4, [5, 6]]]]];
const newitem = lodash.flattenDeep(items);
console.log(newitem);
