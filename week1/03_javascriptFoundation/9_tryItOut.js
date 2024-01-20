/* Comparision between different entities */

if("hello" == "hello") {
    console.log("Strings can be directly compared.");
}
if([1,2,3,4] == [1,2,3,4]) {
    console.log("Arrays can be directly compared.");
}
if([1,2,3,4] == [4,3,2,1]) {
    console.log("Arrays in other sequences can be directly compared.");
}

/* Ways to create array of given size */
let arr1 = [0, 0, 0];
console.log("Manually adding : " + arr1);

let arr2 = new Array(3);
console.log("Given size but not value : " + arr2);

let arr3 = [...new Array(3)];
console.log("Given size but not value : " + arr3);

let arr4 = new Array(3).fill(0); /* same as arr3 */
console.log("Given size and vale (shallow copy) : " + arr4);

let arr5 = new Array(3).fill({'a': 1});
console.log("Before updating 1st value : ", arr5[0].a, arr5[1].a);
arr5[0]['a'] = 2;
console.log("After updating 1st value : ", arr5[0].a, arr5[1].a);

/* Deep copy */
let arr6 = Array.from({length: 3}, ()=>(0));
console.log("Deep copy 0 value : " + arr6);

let arr7 = Array.from({length : 3}, ()=>({'a' : 1}));
console.log("Before updating 1st value : ", arr7[0].a, arr7[1].a);
arr7[0]['a'] = 2;
console.log("After updating 1st value : ", arr7[0].a, arr7[1].a);

/* Few more initialisations */
let arr8 = Array.from({length : 3}, (x, i) => i);
console.log("Different Values : " + arr8);

let arr9 = Array.from({length : 3}, (x, i)=>(i + 1));
console.log("Different Values 2 : " + arr9);

let arr10 = [];
console.log("lastly the obvious one : ")
for (let index = 0; index < 3; index++) {
    arr10.push(0);
}
console.log(arr10);