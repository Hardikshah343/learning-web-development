/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let count = 0;
  let ansStr = str.toLowerCase();
  for(let i = 0; i < ansStr.length; i++) {
    if(ansStr[i] == 'a' || ansStr[i] == 'e' || ansStr[i] == 'i' 
      || ansStr[i] == 'o' || ansStr[i] == 'u') {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowels("OpenAI"))
module.exports = countVowels;