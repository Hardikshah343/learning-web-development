// map, filter, arrow functions

/* Normal functions */
function sum (a, b) {
    return a+b;
}

/* But using arrow function */
const sumShorted  = (a, b) => {
    return a + b; 
}

console.log("Normal function:", sum(10, 20));
console.log("Cool function:", sumShorted(10, 20));
/* Both are not exactly same. 
    Difference in how they get binding in background
*/

/* MAP */
/* Given an array, give back a new array in which every value is multiplied by 2 */
// [1, 2, 3, 4, 5] -> o/p [2, 4, 6, 8, 10]

/* Naive way */
const input = [1,2,3,4,5];

const newArray = [];

for(let i = 0; i < input.length; i++) {
    newArray.push(input[i] * 2);
}
console.log("Normal ans:", newArray);

/* Another way to do it */
// Map takes a function which it runs on all elements of array. And ofcourse returns into a new array.
const coolAns = input.map((eachElement)=> {
    return eachElement * 2;
});

console.log("Cool ans:", coolAns);

/* IF we were to create a map function */
function myOwnMapper(inpArr, callFunction) {
    let ansArray = [];
    for(let index = 0; index < inpArr.length; index++) {
        ansArray.push(callFunction(inpArr[index]));
    }
    return ansArray;
}

console.log("My coolest mapper:", myOwnMapper(input, (val)=>{return val * 2;}));


/* FILTER */
/* Given an input array, return all the even values from it */

const arr = [1,2,3,4,5,6];

/* Naive way */
const newArr = [];
for(let index = 0; index < arr.length; index ++) {
    if(arr[index] % 2 == 0) {
        newArr.push(arr[index]);
    }
}
console.log("Normal way to filter:", newArr);

/* Using Filter */
const newFilteredArr = arr.filter((eachElement) => {
    if(eachElement % 2 == 0) 
        return true;
    else 
        return false;
});
console.log("Cool filterer:", newFilteredArr);

/* If we were to create our own filterer */
function myOwnFileterer(inpArr, callFunction) {
    let ansArr = [];
    for(let index = 0; index < inpArr.length; index++) {
        if(callFunction(inpArr[index])) {
            ansArr.push(inpArr[index]);
        }
    }
    return ansArr;
}
console.log("Our filterer: ", myOwnFileterer(arr, (i) => {
    let ans = false;
    if(i % 2 == 0)
        ans = true;
    return ans;
}));