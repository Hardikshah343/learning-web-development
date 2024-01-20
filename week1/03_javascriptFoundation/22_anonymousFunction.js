/* In callback function instead of passing name of function, we can simply define the function */

function sumOfSomething(a, b, callback) {
    console.log("Arg1 :", a, "\tArg2 :", b, "\tArg3 :", callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

console.log(sumOfSomething(10, 20, function temp (n) {
    return n * n * n;
}))

/* But because of scopign temp(n) can not be called from outside */