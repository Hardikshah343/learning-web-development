const fs = require("fs");

let dataFromFile = "";
let resultString = "";
function readTheFile(filename) {
    let  p = new Promise((resolve) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) {
                console.log("Error",err, "while opening the file.");
                resolve;
            }
            else {
                dataFromFile = data;
                for(let index = 0; index < dataFromFile.length; index++) {
                    if (index > 0 && dataFromFile[index] == ' ' && dataFromFile[index-1] == ' ') 
                        continue
                    resultString += dataFromFile[index];
                }               
                fs.writeFile(filename, resultString.trim(), (err) => {
                    if(err) {
                        console.log("Error while writing");
                        resolve;
                    }
                });
            }
        })
    });
    return p;
}

let readFromFileStatus = readTheFile("file.txt");
let writeToFileStatus;
readFromFileStatus.then(()=>{ 
    console.log("Done updating the file.");
});

console.log("End of program.");

