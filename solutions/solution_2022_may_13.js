// 13
// Question 1
/*
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
myFunction([1, 2, 3], [3, 4, 5])
Expected
[ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Expected
[ -11, -10, 5, 22, 41,  42, 333]
*/
const arrayMerger = (arr1, arr2) => {
  let arr = [...arr1, ...arr2];
  let uniqueArr = [...new Set(arr)];
  return uniqueArr.sort((a, b) => a - b);
};

const am = arrayMerger([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
console.log(am);

// Question 2
/*
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

myFunction([1,-2,2,-4])
Expected
2
myFunction([0,9,1])
Expected
0
myFunction([4,-3,2,1,0])
Expected
1
*/
const number_of_negative_numbers = (arr) => {
  const negative_numbers = arr.filter((num) => {
    return num < 0;
  });

  console.log("Number of negative numbers => ", negative_numbers.length);
};

number_of_negative_numbers([1, -2, 2, -4]);
