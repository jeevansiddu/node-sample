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

const lodash = require("lodash");
const items = [1, [2, [3, [4, [5, 6]]]]];
const newitem = lodash.flattenDeep(items);
console.log(newitem);
