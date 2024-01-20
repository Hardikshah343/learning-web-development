const fs = require("fs");

function hardikSetTimer() {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, 1000); // 1 sec, resolve basically returns control to then
    });
    return p;
}

let x = hardikSetTimer();
x.then(function() {
    console.log("Timer expired now.")
})