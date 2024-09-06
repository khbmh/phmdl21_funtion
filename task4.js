/*

Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



*/

function count_zero(str = `010001100100`) {
  return (str.match(/0/g) || []).length; //If the input string contains no '0's, str.match(/0/g) will return null, and trying to access .length on null will result in an error.
}

let count = count_zero(`111111111`);
console.log(count);
