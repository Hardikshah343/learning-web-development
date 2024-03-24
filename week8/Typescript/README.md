## Types of Languages

### Strongly typed
Eg Java, C, C++, Rust, etc.
1. Lesser runtime errors
2. Strictly codebase
3. Easy to catch errors at compile time

### Loosely typed languages
Eg. Python, Javascript, Perl, etc.
1. Easy to write code
2. Fast to bootstrap
3. Low learning curve

So people realised that javascript is a very powerful language, but lacks types
`Typescript` was introduced as a new language to add `types` on top of javascript.

# Typescript

Typescript is a programming language developed and maintained by Microsoft.
It is a strict `syntactical superset` of JavaScript and adds optional static typing to the language.

## Where/How does typescript code run?

Typescript code never runs in your browser. Your browser can only understand **Javascript**
1. Javascript is the runtime language (the thing that actually runs in browser/nodejs runtime)
2. Typescript is something that transpiled (compiles) down to javascript
3. When typescript is compiled down to javascript, you get `type checking` (similar to c++). If there is an error, the conversion to javascript fails.

`main.ts ===> main.js` which then runs on browsers/nodejs

### Typescript compiler

`tsc` is the official compiler that you can use to convert `Typescript` code into `javascript`
There are many other famous compilers/transpilers for converting Typescript to javascript. Some famous ones are -
1. esbuild
2. swc

**Installation**
`npm install -g typescript`

1. Initialize an empty Node.js project with typescript
```terminal
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```
2. Create a fileName.ts file
```ts
const x: number = 1;
console.log(x);
```

4. Compile the ts file to js file
`tsc -b`

## Basic types in TypeScript    

`number`, `string`, `boolean`, `null`, `undefined`

**Example2**

## Configuration file
1. target
The `target` option in a `tsconfig.json` file specifies the ECMAScript target version to which the TypeScript compiler will compile the Typescript code
Eg arrow functions were not available in ES5, so compiler will take arrow function and convert to compatible function for ES5 if target is ES5.

2. rootDir
Where should the compiler look for `.ts` files. Good practise is for this to be the `src` folder

3. outDir
Where should the compiler look for puuting out `.js` file.

4. noImlicitAny
No data type will be automatically assigned `any` if not provided. Kind of strictness indicator to compiler.

5. removeComments
Whether to include or exclude comments. 


## Interfaces
How can we assign types to objects
```ts
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}
```
We can even implement interfaces as a class
Example2


## Types
Very similar to interfaces, types lets aggregate data together
```ts
type User = {
    firstName: string;
    lastName: string;
    age: number;
}
```

1. Unions:
Lets say we want to print the id of a user, which can be a number or a string.
```ts
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("202");
```
2. Intersection

```ts

type EmployeeType = {
    name: string;
    startData: Date;
};

type ManagerType = {
    name: string;
    department: string;
};

type TeamLead = EmployeeType & ManagerType;

const teamLead: TeamLead = {
    name: "hardik",
    startDate: new Date(),
    department: "Software developer"
};
```
Note: `type X = A | B` here A and B can be interfaces, but X must be a type.

**Difference between Interface and types?**
Interface can be implement in Class but not type
Types allows us to do aggregation tasks that interface does not allow us to do.


## Arrays
Arrays can be implemented only using interfaces not types
Simply just add `[]` to declare array

` function maxValue(arr: number[]) {} `


## Enums

Enums (Enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

Example
```ts
enum Direction {
    Up,  // 0
    Down, // 1
    Left, // 2
    Right // 3
}
```
Note: Can even assign values
```ts
enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
```


## Generics
Generics is a language independent concept (exist in C++ as well)

Generics enable us to create components that work with any data type while still providing compile-time type safety.

```ts
function identity<t>(arg: T) : T {
    return arg;
}
let out1 = identity<string>("MyString");
let out1 = identity<number>(100);
```

## Import and Export modules

Typescript follws the ES6 module system using `import` and `export` statement to share code between different files. 

1. Constant exports
`math.ts`
```ts
export function add(x:number, y:number): number {
    return x + y;
}
export function subtract(x: number, y: number): number {
    return x - y;
}
```
`main.ts`
```ts
import {add} from "./math"

add(1,2);
```

2. Default exports

`calculator.ts`
```ts
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}
```
`main.ts`
```ts
import Calculator from './Calculator'

const calc = Calculator();
console.log(calc.add(10, 5));
```