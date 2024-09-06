/*

Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/
function odd_even(val) {
  if (val % 2 === 0) {
    return `the value is Even.`;
  } else if (val % 2 !== 0) {
    return `the value is Odd.`;
  }
}


let result = odd_even(39)

console.log(result);