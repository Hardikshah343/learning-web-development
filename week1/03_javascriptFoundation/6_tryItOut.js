/* Run htop in terminal
as We know JS runs on single core so the following code should exhaust a single core
*/

let sum = 0;
for (let index = 0; index < 100000000000; index ++) {
    sum = sum + index;
}
console.log("Sum is : " + sum );