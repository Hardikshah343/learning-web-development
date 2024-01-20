/* Normal functions */
function sum(a, b) {
    return a + b;
}

/* sum is synchronous and works on single thread */
/* So here sum() is readily available to JS and can be used synchronously */
/* But lets say we have to perform some operations on system like reading a file,
    or maybe accessing a remote database. So for such actions we need permission from OS 
    or maybe admin, and due to synchronous nature of JS running on single thread, it will be 
    stuck for approval, or stuck to get the response from DB server.

    So in order to avoid this what we do is, we use asynch nature of JS */
/* So a callback or a function that will be executed after a particular action is done.
    For eg, if a file request is made, the file is open now and then perform the action() */
/* This can be done using Web APIs for asynchronous programming. */

function onDone() {
    console.log("Hi there"); // basically print the content.
}

setTimeout(onDone, 1000);
console.log("After timeout.")

/* So similarly few examples where asynchronous helps: 
    1. Reading a file.
    2. Sending a network request.
    3. A deliberate timeout.
*/

const fs = require("fs");
console.log("Reading the file.");

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("Read the file and data is :", data);
})

console.log("Done with code.")