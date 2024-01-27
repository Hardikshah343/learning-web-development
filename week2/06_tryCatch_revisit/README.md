# Try Catch
Throwing and catching errors in Javascript

```javascript
function getLength(name) {
    return name.length;
}

const ans = getLength("hardik");
console.log(ans);
```
Now this is a idea scenario.
Lets say if we pass nothing
```javascript
const ans = getLength();
```
It will halt the execution and throws a error.
```terminal
return name.length;
                ^

TypeError: Cannot read properties of undefined (reading 'length')
    at getLength (/home/hardik/Documents/GitWorkspace/learning-web-development/week2/06_tryCatch_revisit/index.js:2:17)
    at Object.<anonymous> (/home/hardik/Documents/GitWorkspace/learning-web-development/week2/06_tryCatch_revisit/index.js:8:14)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.11.0
```
Even though it is incorrect the program should not halt.
Hence **try catch**.

```javascript
function getLength(name) {
    return name.length;
}
// when we know errornous code or code may throw some error.
try {
    let a;
    console.log(getLength(a));
} catch(e) {
    console.log("Error happened", e);
}

console.log("Hi there!!");
```
So even if error or exception occured, normal execution will still continue.

**So wrapping a errornous code or if code may throw error we wrap it inside try catch block**
