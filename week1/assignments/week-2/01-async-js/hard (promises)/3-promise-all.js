/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve;
        }, t);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve;
        }, t);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve;
        }, t);
    });
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    let p1 = wait1(t1);
    let p2 = wait2(t2);
    let p3 = wait3(t3);
    await p1.then();
    await p2.then();
    await p3.then();
    const end = Date.now();
    return end - start;
}

console.log("WHAT", calculateTime(1000,2000,3000));
module.exports = calculateTime;
