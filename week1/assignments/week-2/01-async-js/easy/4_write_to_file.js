const fs = require("fs");

fs.writeFile("hello.txt", "Wow this is written to file.\n", {
    encoding: "utf-8",
    flag: "a",
    mode: 0o666
},(err)=>{
    if(err)
        console.log(err);
    else {
        console.log("File written successfully.");
    } 
});

fs.readFile("hello.txt", "utf-8", (err, data)=>{
    if(err)
        return console.log(err);
    console.log("Updated Data:", data);
});