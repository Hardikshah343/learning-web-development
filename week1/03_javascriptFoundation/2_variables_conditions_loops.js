// Using var 
var a = 1;
a = 2;
console.log(a);

// Using let
let x = 1;
x = 2;
console.log(x)

// using const
const y = 1
// y = 2  // Error : Assignement to const variable
console.log(y)

// const z; // Error: Missing initializer in const declaration


let firstName = "Hardik"; // String
let age = 18;  // Integer
let isMarried = false;  // boolean

console.log("The person named " + firstName + "'s age is " + age + " is actually married is " + isMarried);

if(isMarried) {
    console.log(firstName + " is married.")
}
else {
    console.log(firstName + " is not married.");
}

/* Sum of numbers from 0 to 100 */
let sum = 0;
for (let index = 0; index <= 100; index ++) {
    sum = sum + index;
}
console.log("Sum of 1-100: " + sum);