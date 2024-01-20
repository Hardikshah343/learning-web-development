// let p = new Promise();  // 1st argument function is required
// console.log(p);

// let q = new Promise(function());     // 1st parameter or required function is also required (resolve)
// console.log(q);

let r = new Promise(function(onDone) { });
console.log("01. ", r);

/* A promise on high level can have 3 stages 
1. pending  : yet to resolved
2. resovled : resolved and waiting in callback queue
3. rejected : (discussed later )
*/ 
/* A simple promise that immediately resolve */
let s = new Promise(function (resolve) {
    resolve("Returning this string.");
});

function callback() {
    console.log("1. ", s);
}
s.then(callback);


let t = new Promise(function (resolve) {
    setTimeout(function() {
        resolve("Return me");
    }, 1000);
});

function onDone () {
    console.log("2. ", t);
}
console.log("02. ", t);
t.then(onDone);

/* So what is a promise ?
It is just a class that makes callbacks and async functions a little more readable.
When we create promise we need to pass a function whose first argument becomes the resolver.
i.e. Promise(function(resolve))

So when we write a promise goal is to set the async task in promise and let resolver end it.
So resolve is like a return statement for the promise.

promiseObj.then() is called when resolve is called there.
*/