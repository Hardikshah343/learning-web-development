/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var result = true;
  var listOfChars = new Array(256).fill(0);
  if(str1.length == str2.length) {
    for(let i = 0; i < str1.length; i++){
      listOfChars[str1.charCodeAt(i)]++;
    }
    for(let i = 0; i < str2.length; i++) {
      listOfChars[str2.charCodeAt(i)]--;
    }
    for (let i = 0; i < listOfChars.length; i++) {
      if(listOfChars[i] != 0) {
        result = false;
        break;
      }
    }
  }
  else {
    result = false;
  }
  return result;
}

// console.log(isAnagram("hell", "lleh"));
module.exports = isAnagram;
