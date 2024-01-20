/* An example of wrapping a function */
function myOwnSetTimeout(callback, duration) { /* Callback is required for calling this wrapper */
    setTimeout(callback, duration);
}

function promisifiedMyOwnSetTimeout(duration) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
    return p;
}

let x = promisifiedMyOwnSetTimeout(1000);
// x.then(callbackFunction); /* here we gave the callback */
x.then(()=>{
    console.log("Callback is here");
})