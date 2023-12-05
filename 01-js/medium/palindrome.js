/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 const v1 = str.toLowerCase();
 const clean = v1.replace(/[^a-z0-9]/g,"");
 const arr = clean.split("").reverse().join("");
  
  return clean === arr;

  
}

module.exports = isPalindrome;
