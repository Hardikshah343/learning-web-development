/* We can pass a function as argument to another function 
CALLBACK
*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult (data) {
    console.log("Result of the sum is : " + data);
}

function displayPassiveResult (data) {
    console.log("Sum's result is : " + data);
}

/* Call only 1 function and get the sum on console */
/* One method */
displayResult(sum(10,20));
displayPassiveResult(sum(10,21));  

/* Method 2 */
// Callbacks
function sumDisplay(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

sumDisplay(10, 20, displayResult);
sumDisplay(10, 21, displayPassiveResult);

/* we can even define a function inside a function in JS */
function calculateArithmetic (a, b, arithmeticFunction) {
    function printResult(data) {
        console.log("Value to print : " + data);
    }
    const ans = arithmeticFunction(a,b);
    printResult(ans);
    return ans;
}

function addition(a, b) {
    return a+b;
}
function substraction (a,b) {
    return a-b;
}

// But the scope of function defined inside the function stays inside the function only.
// printResult(10);
calculateArithmetic(10, 20, addition);