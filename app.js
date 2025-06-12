const fs = require("fs");

fs.writeFile("fs.txt", "mahipal kachhad", (err) => {
  if (err) throw err;
  else console.log("added");
});

