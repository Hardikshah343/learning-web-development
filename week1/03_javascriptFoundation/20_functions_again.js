/* A function in js is set of statements that performs a certain tasks.
it takes input and return an output */

function findSum (n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

console.log(findSum(50));