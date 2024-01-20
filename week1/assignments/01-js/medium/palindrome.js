/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var ispalin = true;
  var ansStr = str.toLowerCase();
  var i = 0;
  var j = ansStr.length - 1;
  while(i<j) {
    while(!ansStr[i].match(/[a-z]/i)) {
      i++;
    }
    while (!ansStr[j].match(/[a-z]/i)) {
      j--;
    }
    if(ansStr[i] != ansStr[j]) {
      ispalin = false;
      break;
    }
    i++;
    j--;
  }
  return ispalin;
}
// console.log(isPalindrome("Mr. Owl ate my metal worm."))
module.exports = isPalindrome;
