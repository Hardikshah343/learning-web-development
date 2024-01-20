console.log("At the top 1");

function promisifiedTimeout() {
    console.log("Function called 3");
    return new Promise(function(resolve) {
        console.log("Inside promise callback 4");
        setTimeout(function() {
            console.log("Inside setTimeout called 5");
            resolve("Done and dusted.");
        }, 5000);
    });
}

console.log("In the middle 2");
promisifiedTimeout().then(function(value){
    console.log(value);
});
console.log("Hehehe I am last statement in code.")