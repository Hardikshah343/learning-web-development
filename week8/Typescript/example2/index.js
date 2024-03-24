"use strict";
/* WAP that greets a user given their firstname */
function greetUser(user) {
    console.log("Hello", user);
}
function greetUserDetail(user) {
    console.log("Hello", user);
}
greetUser("Hardik");
greetUserDetail([1, 2, 3]);
/* WAP that calculates the sum of two numbers */
function sumOfTwoNUmbers(a, b) {
    return a + b;
}
function sumOfTwoNUmbers2(a, b) {
    return a + b;
}
let sumOfNumbers = sumOfTwoNUmbers(1, 2);
console.log(sumOfNumbers);
sumOfNumbers = sumOfTwoNUmbers2(1, 2);
console.log(sumOfNumbers);
/* WAP to return true or false based on if a user is 18+ */
function validateAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateAge(19));
/* Create a function that takes another function as input, runs it after 1 second */
// function callback(cbFunc:(arg1: number, arg2: number) => number, argument1: number, argument2: number): any {    
//     setTimeout(() => {
//         const x: number = cbFunc(argument1, argument2);        
//         return x;
//     }, 1000);
// }
// console.log("Sum is ", callback(sumOfNumbers, 10, 20));
function runAfter1Sec(fn) {
    setTimeout(fn, 1000);
}
function printHelo() {
    console.log("Helo");
}
runAfter1Sec(printHelo);
function isLegal(user) {
    if (user.age > 18) {
        console.log("Legal");
    }
    else {
        console.log("Illegal");
    }
}
isLegal({
    firstName: "Hardik",
    lastName: "Shah",
    email: "Hardikshah@abc.com",
    age: 27,
});
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let emp1 = new Employee("hardik", 27);
emp1.greet("Hello");
