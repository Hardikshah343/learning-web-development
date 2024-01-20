/* 
So till now we saw async functions that will bring output in to the Callback queue and 
when the call stack is done with all the operations it will then fetch all the callbacks
from the callback queue.

Promises are like syntactical sugar that makes the code more readable.
i.e. it will still use callback queue and call stack and event loop.

eg Ugly way to write : 
*/
const fs = require("fs");

// callback function to call
function onDone(data) {
    console.log(data);
}

/* It is just a wrapper around asynchronous function fs.readFile(). */
function hardikReadFile(cb) {
    fs.readFile("02_a.txt", "utf-8", function(err, data) {
        cb(data);
    });
}

// hardikReadFile(onDone); // try running it

/* using promise same code as above: Note promises are syntactical sugar */

function kiratReadFile() {
    console.log("Inside kiratReadFile()")
    return new Promise(function(resolve) {
        console.log("Inside Promise");
        fs.readFile("02_a.txt", "utf-8", function(err, data) {
            console.log("Inside read file ()");
            resolve(data);
        });
    });
}

// kiratReadFile().then(onDone);

// yet another thing can be done 
var a = kiratReadFile();
console.log("Promise in variable : ", a);
/* here a got the promise which may or may not have been resolved yet, but got it synchronously. */
a.then(onDone); // onDone is called when promise is fullfilled/completed.
