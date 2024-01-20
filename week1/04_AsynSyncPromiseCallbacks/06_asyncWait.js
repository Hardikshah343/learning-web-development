/* Real benefit of promises: AsyncWait */
/* Async await is just syntactical sugar. still callback queue, stack, event loops,etc */
/* without async wait */

function kiratAsyncFunction() {
    let p = new Promise(function(resolve){
        resolve("Hi there");
    });
    return p;
}

function main() {
    kiratAsyncFunction().then(function(value){
        console.log(value);
    });
}

main();

/* Async wait ex */

function hardikAsyncWait() {
    let p = new Promise(function(resolve){
        resolve("Hello world");
    });
    return p;
}

async function main1() {
    console.log("Inside main")
    const value = await hardikAsyncWait(); // everything after this waits, also needs to be inside function
    console.log(value);
}

main1();
console.log("Wuhuuu")

/* So still 
asyncwait ---> is Promise and which is ---> call backs

NOTE: await that blocks following actions/instructions must be used inside a function.
await is only valid in async functions .
*/
