/* WAP that greets a user given their firstname */
function greetUser(user: string) {
    console.log("Hello", user);
}

function greetUserDetail(user: any) {
    console.log("Hello", user);
}
greetUser("Hardik");
greetUserDetail([1,2,3]);

/* WAP that calculates the sum of two numbers */
function sumOfTwoNUmbers(a: number, b:number) {
    return a + b;
}

function sumOfTwoNUmbers2(a: number, b:number): number {
    return a + b;
}
let sumOfNumbers = sumOfTwoNUmbers(1, 2);
console.log(sumOfNumbers);
sumOfNumbers = sumOfTwoNUmbers2(1, 2);
console.log(sumOfNumbers);

/* WAP to return true or false based on if a user is 18+ */
function validateAge(age:number) : boolean {
    if (age > 18) {
        return true;
    } else {
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

function runAfter1Sec(fn: () => void) {
    setTimeout(fn, 1000);
}
function printHelo() {
    console.log("Helo");
}
runAfter1Sec(printHelo);


/* Objects */
/* Create a function isLegal that returns true or false if a user is above age 18, input is a object */
interface User {
    firstName: string;
    lastName: string;
    email ?: string; // optional argument
    age: number;
}
function isLegal(user: User): void {
    if (user.age > 18) {
        console.log("Legal");
    } else {
        console.log("Illegal");
    }
}

isLegal({
    firstName: "Hardik",
    lastName: "Shah",
    email: "Hardikshah@abc.com",
    age: 27,
});

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let emp1 = new Employee("hardik", 27);
emp1.greet("Hello");

/* Types */
type UserType = {
    firstName: string;
    lastName: string;
    email ?: string; // optional argument
    age: number;
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("202");

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

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));


/* Enums */
/* Without Enums */
type KeyInput = "Up" | "Left" | "Right" | "Down";
/* With Enums */
enum Directions {
    Up,
    Left,
    Down,
    Right
};

function toDoSomethingWithoutEnum(keyPressesd: KeyInput) {
    if (keyPressesd == "Up") {

    }
}

function toDoSomethingWithEnum(keyPressesd: Directions) {
    if (keyPressesd == Directions.Up) {

    }
}

toDoSomethingWithoutEnum("Up");
toDoSomethingWithEnum(Directions.Up);

/* GENERICS */
/* Without generics */
/* Lets say we want to create a function that takes a array as input and returns 1st element of array 
But the array can be of type string or number
*/
type InputArray = string | number;

function returnsFirstElement(inpArray: InputArray[]): InputArray {
    return inpArray[0];
}
/* Everything is OK till now. */
/* But given this, array can be also of both numbers and strings as well */
const valueRet = returnsFirstElement([1,2,3,"hardik", "shah"]);
/* One way to fix is use     string [] | number [] */
/* But, Lets say we want know input is going to be string array */
const value = returnsFirstElement(["Hardik", "shah"]);
/* Can we perform string operations on the value now ? */
// value.toUpperCase();
/* No becase number does not have the property of toUpperCase() */

/* Thats where generics comes in picture */

function returnsFirstElementUsingGenerics<T>(InputArray: T[]): T {
    return InputArray[0];
}

const genVal1 = returnsFirstElementUsingGenerics<number>([1,2,3,4]);
const genVal2 = returnsFirstElementUsingGenerics<string>(["hardik", "shah"]);
genVal1.toPrecision(1);
genVal2.toUpperCase();

