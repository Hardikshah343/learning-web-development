/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    function waitForMilli () {
        setTimeout(()=>{
            
        }, milliseconds);
    }
    return new Promise((resolve) => {
        waitForMilli();
        resolve;
    });
}
let p = sleep(3000);
p.then(()=>{
    await
});
console.log("Hello");
module.exports = sleep;
