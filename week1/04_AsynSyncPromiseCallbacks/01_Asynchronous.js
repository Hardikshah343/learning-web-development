/* 
Synchrounous (sequential): One at a time, in a flow i.e. one after other.
Asynchronous: All at the same time (nah), continuously switching between tasks,
    to make progress in all tasks at hand.
    Happens/execute in parts/ in parallel.
    Can also delegate tasks to run in parallel.

Can JS delegate? Can JS context switch?
*/
/* All functions till now run in sequence/synchronous way.
Lets explore Asynchronous JS functions */

/* setTimeout() : A api based/ global function. */

function findSum(n) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    console.log("sum is :", findSum(100));
}
/* Synchronous waiting */
/* 1. Busy waiting: expensive operation to do  */
function syncSleep() {
    let a = 1;
    for (let i = 0; i < 1000000000; i++) {
        a += 1;
    }
}
syncSleep();
console.log("1. Hello World, calculating sum ...");

setTimeout(findSumTill100, 2000);

console.log("2. Hello World, calculating sum ...");

