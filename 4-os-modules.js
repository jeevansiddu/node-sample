const { log } = require("console");
const os = require("os");
// console.log(os);

// info about current user

const user = os.userInfo();
console.log(user);

// method for system uptime
console.log(`The system uptime is ${os.uptime}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
