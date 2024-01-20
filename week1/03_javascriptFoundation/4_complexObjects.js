/* Sample Complex object */
const person1 = {
    firstName : "KJASHDKJ",
    gender : "male"
};
console.log(person1["firstName"]);
console.log(person1.firstName);

/* Array of complex object */ 
const personArray = [{ firstName : "Hardik", gender : "male"}, {firstName: "Kidrah", gender : "male"}, { firstName: "Heroine", gender : "female" }];

for (let index = 0; index < personArray.length; index++) {
    if(personArray[index].gender == "male") {
        console.log(personArray[index].firstName);
    }
}

