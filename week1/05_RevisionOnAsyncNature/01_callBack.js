function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function doSumOfSomeThing(a, b, fn) {
    return fn(a) + fn(b);
}

console.log(doSumOfSomeThing(2, 3, square));
console.log(doSumOfSomeThing(2, 3, cube));