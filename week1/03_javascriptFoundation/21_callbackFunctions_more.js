/* Calling a function inside other function */
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;    
}

function sumOfSquares(n, m) {
    const sum1 = square(n);
    const sum2 = square(m);
    return sum1 + sum2;
}

function sumOfCubes(n, m) {
    console.log("Arg1 :", n, "\tArg2 :", m);
    const product1 = cube(n);
    const product2 = cube(m);
    return product1 + product2;
}

console.log(sumOfSquares(10, 20));
console.log(sumOfCubes(10, 20));


/* But now we are Repeating our self 
Rule: Do not repeat yourself.
Breaks/ Violated
*/

/* Hence Callbacks */

function sumOfSomething(n, m, fn) {
    console.log("Arg1 :", n, "\tArg2 :", m, "\tArg3 :", fn);
    const ans1 = fn(n);
    const ans2 = fn(m);
    return ans1 + ans2;
}

console.log(sumOfSomething(10, 20, square));
console.log(sumOfSomething(10, 20, cube));