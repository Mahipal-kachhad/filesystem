const fs = require("fs");

// fs.writeFile("fs.txt", "mahipal kachhad", (err) => {
//   if (err) throw err;
//   else console.log("added");
// });

// fs.rm("fs.txt", (err) => {
//   if (err) throw err;
//   else console.log("removed");
// });

fs.readFile("fs.txt","utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
