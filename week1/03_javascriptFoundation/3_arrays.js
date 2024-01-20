/* WAP That prints all the even numbers in an array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10];
for(let index = 0; index < numbersArray.length; index++) {
    if(numbersArray[index] % 2 == 0) {
        console.log(numbersArray[index]);
    }
}

/* WAP That prints biggest number in the array */
let valuesArray = [2,31,44,112,22,31,12,34];
let biggestNum = valuesArray[0];
for(let index = 1; index < valuesArray.length; index++) {
    if(biggestNum <= valuesArray[index]) {
        biggestNum = valuesArray[index];
    }
}
console.log("Biggest number in : " + valuesArray + " is : " + biggestNum);

/* WAP to print all the male names from given arrays */
const namesArray = ["Hardik", "Kidrah", "Heroine", "Hero", "FemaleName1"];
const genderArray = ["male", "male", "female", "male", "female"];

for(let index = 0; index < namesArray.length; index++) {
    if(genderArray[index] == "male") {
        console.log(namesArray[index]);
    }
}

/* WAP To reverse all the elements of array */
let arrayOfNumbersToReverse = [1,2,3,4,5,6,7,8,9];
console.log(arrayOfNumbersToReverse);
for(let index = 0; index < (arrayOfNumbersToReverse.length / 2); index ++) {
    let temporaryValue = arrayOfNumbersToReverse[index];
    arrayOfNumbersToReverse[index] = arrayOfNumbersToReverse[arrayOfNumbersToReverse.length - index - 1];
    arrayOfNumbersToReverse[arrayOfNumbersToReverse.length - index - 1] = temporaryValue;
}
console.log(arrayOfNumbersToReverse);