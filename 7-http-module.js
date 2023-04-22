// const http = require("http");
// const PORT = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   res.setHeader("Content-Type", "text/html");
//   res.write("Hello Wold");
//   let path = "./";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     default: //page redirection
//       //or
//       // res.setHeader("Location", "./");
//       // res.statuscode = 301;
//       path += "404.html";
//       res.statusCode = 404;
//   }
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });
// server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//sending json objct
// var http = require("http");
// var fs = require("fs");
// console.log("Server will listen at :  127.0.0.1:3000 ");
// http
//   .createServer(function (req, res) {
//     //change the MIME type to 'application/json'
//     res.writeHead(200, { "Content-Type": "application/json" });
//     //Create a JSON
//     let json_response = {
//       status: 200,
//       message: "succssful",
//       result: ["sunday", "monday", "tuesday", "wednesday"],
//       code: 2000,
//     };
//     console.log("Server Running");
//     res.end(JSON.stringify(json_response));
//   })
//   .listen(3000);

// var http = require("http");
// // var fs = require('fs');
// console.log("Server will listen at :  127.0.0.1:3000 ");
// http
//   .createServer((req, res) => {
//     console.log("Port Number : 3000");
//     // Change the MIME type to application/pdf
//     res.writeHead(200, { "Content-Type": "application/pdf" });

//     fs.readFile("firebase_5_jeevan.pdf", (error, data) => {
//       if (error) {
//         res.json({ status: "error", msg: err });
//       } else {
//         res.write(data);
//         res.end();
//       }
//     });
//   })
//   .listen(3000);

//audio
//serve-mp4.js
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
// 	console.log("Port Number : 3000");
// 	// change the MIME type to 'video/mp4'
//     res.writeHead(200, {'Content-Type': 'video/mp4'});
//     fs.exists('video.mp4',function(exists){
// 		if(exists)
// 		{
// 			var rstream = fs.createReadStream('video.mp4');
// 			rstream.pipe(res);
// 		}
// 		else
// 		{
// 			res.send("Its a 404");
// 			res.end();
// 		}
// 	});
// }).listen(3000);

// creating a new console
var ws = require("fs");
const { Console } = require("console");
const output = ws.createWriteStream("./stdout.log");
const errOutput = ws.createWriteStream("./stderr.log");
// custom simple print
const print = new Console(output, errOutput);
//Now we can use it like console
const roll = 839147;
print.log("roll: %d", roll);
print.log("This will be stored in a file");
