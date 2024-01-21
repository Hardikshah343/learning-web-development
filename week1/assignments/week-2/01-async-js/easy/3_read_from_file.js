const fs = require("fs");

console.log("Reading from md file of the same task");

fs.readFile("hello.txt", "utf8", (err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log("Read the file and data is :", data);
});

console.log("End of program!");

for(i=0; i < 1000000000;i++) {}