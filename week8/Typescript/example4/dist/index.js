"use strict";
;
function sumOfAge(demo1, demo2) {
    return demo1.age + demo2.age;
}
const age = sumOfAge({ name: "Taro", age: 20 }, { name: "Jiro", age: 30 });
console.log(age);
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name} and Email: ${user.email}`);
};
displayUserProfile({ name: "Hello", email: "hello@example.com" });
