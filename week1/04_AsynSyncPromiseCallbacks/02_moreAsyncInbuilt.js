/* 
fs.readFile(): read a file from our filesystem.
Fetch(): to fetch some data from API endpoints 

* 
  When we try to read file from file system, it may take some time to get access to it
  because the file may get logged, of some other process may be trying to access it.
  So this can be done in async way using fs.readFile();
  So basically we delegate the task of reading the file to someone else, and once it 
  finishes reading then it will give you a callback.

  Fetch is something to get data from other api/server, which may take time. hence Asyn usecase.
*/

const fs = require("fs")  // kind of importing module fs

fs.readFile("02_a.txt", "utf-8", function (err, data) {
    console.log(data);
});

console.log("Hello World."); // this ran first because readFile is async call.
/* Reading a file is expensive task and we just delegated it */ 

/* lets add one more expensive synch task here */ 
let a = 0;
for (let i = 0; i < 10000000000; i++) {
    a++;
} /* This is more expensive than readFile() */

/* But still as we know js is single threaded architecture, 
    and even though we delegated file read to async task, our thread will read the output
    only when it is free from task at hand 
*/

console.log("Hello world 2");


/* Try running the above code on : To visualize how things are done in JS 
    http://latentflip.com/loupe
*/

/* In JAVASCRIPT there are 4 major things: 
    Call stack (function call stack)
    Callback queue (All async functions that are executed completely, waits here, 
        first one to complete asyn task is in front of queue even if it was invoked later)
    Web Apis (all async function like setTimer runs here)
    Event Loop (handles control of what goes in stack and when to take from queue)
*/