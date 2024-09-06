/*

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



*/

function make_avg(intArr = [1, 2, 3, 4, 5]) {
  let sum = 0;
  for (let i = 0; i < intArr.length; i++) {
    sum += intArr[i];
  }
  return sum / intArr.length;
}
let average = make_avg([51,53,55]);

console.log(average);
