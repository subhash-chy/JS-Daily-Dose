// Question 1
/*
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

myFunction(2, 10)
Expected
[2, 3, 4, 5, 6, 7, 8, 9, 10]
myFunction(1, 3)
Expected
[1, 2, 3]
myFunction(-5, 5)
Expected
[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
myFunction(2, 7)
Expected
[2, 3, 4, 5, 6, 7]
*/
const range_viewer = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  console.log(arr);
};
range_viewer(2, 10);

// Question 2
/*
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

myFunction([1,2,3], 6)
Expected
[6,1,2,3]
myFunction(['a','b'], 2)
Expected
[0,'a','b']
myFunction([null,false], 11)
Expected
[11,null,false]
*/
function myFunction(arr, num) {
  let arr_final = [];

  if (num >= 6) {
    arr_final = [num, ...arr];
  } else {
    arr_final = [0, ...arr];
  }

  console.log(arr_final);
}

console.log("Outputs for Question 2");
myFunction([1, 2, 3], 6);
myFunction(["a", "b"], 2);
myFunction([null, false], 11);
