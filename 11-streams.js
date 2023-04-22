//streams
//4 types - writeable , readable , Duplex , Transform

// setting up a large file once
// const fs = require("fs");

// for (let i = 0; i < 10000; i++)
//   fs.writeFileSync("./content/bigfile.txt", `Hello evenyone ${i}\n`, {
//     flag: "a",
//   });

const fs = require("fs");
const http = require("http");

// default buffer size = 64kb

// const stream = fs.createReadStream("./content/bigfile.txt", "utf8");
// stream.on("data", (result) => {
//   // data is the inbuilt event inside the stream
//   console.log(result);
// });

// stream.on("error", (err) => {
//   console.log("hiiii ");
// });

http
  .createServer((req, res) => {
    const stream = fs.createReadStream("./content/bigfile.txt", "utf8");
    // reading n form of stream so memory is saved
    // using the event open
    stream.on("open", () => {
      stream.pipe(res);
      // pipe changes from readsteam to write stream
      // we are also writing data in stream
    });
    stream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
