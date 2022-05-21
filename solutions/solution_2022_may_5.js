// Question 1
// Flatten the array
/*
let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9, 10],
  [11, 12],
];
*/

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9, 10],
  [11, 12],
];

const result = arr.reduce(
  (accumulator, currentValue) => accumulator.concat(...currentValue),
  []
);

console.log(result);

// Similar problem => https://flexiple.com/flatten-array-javascript/

// Question 2
/*
Write a function that takes two arguments 'a' and 'b' as a number. Return `true` if one of the number is 100 or if the sum of `a` and `b` is 100.
Return `false` if above condition is not met.
*/
// Input: myFunction(100, 2)  // Output: true
// Input: myFunction(0, 100)  // Output: true
// Input: myFunction(40, 10)  // Output: false
// Input: myFunction(40, 60)  // Output: true
// Input: myFunction(150, 10) // Output: false

const myFunction = (a, b) => {
  return a | (b === 100) && a + b === 100;
};

console.log(myFunction(100, 0));
console.log(myFunction(0, 100));
console.log(myFunction(40, 10));
console.log(myFunction(40, 60));
console.log(myFunction(150, 10));
