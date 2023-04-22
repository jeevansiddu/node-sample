console.log("Hello and hii");
console.log("First");
setTimeout(() => {
  // this callback will alays go into offloading state as it is a callback funtioc and three executed first
  // when there is chance it gets offloaded and then when its time callback is called

  console.log("Done wait 4 sec");
}, 0);
console.log("Three");
const fs = require("fs");
//or
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         // console.log(data);
//         resolve(data);
//       }
//     });
//   });
// };

// getText("content/subcintent/subfile.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//using async and await

const start = async () => {
  try {
    const first = await readFilePromise(
      "content/subcintent/subfile.txt",
      "utf8"
    );
    console.log(first);
    await writeFilePromise(
      "content/subcintent/combine.txt",
      `this is good ${first}`
    );
  } catch (e) {
    console.log(e);
  }
};

start();
