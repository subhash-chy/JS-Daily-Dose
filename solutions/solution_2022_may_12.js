// 12
// Question 1
// Write a JavaScript program to calculate the factorial of a number.
const factorial_finder = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(n - i);
  }

  const output = arr.reduce((accumulator, current) => accumulator * current, 1);
  console.log(`Factorial of ${n} is: ${output}`);
};

factorial_finder(5);

// Question 2
// Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

const merge_sort = (arr) => {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);

  const left_array = arr.slice(0, middle);
  const right_array = arr.slice(middle, arr.length);

  const sorted_left = merge_sort(left_array);
  const sorted_right = merge_sort(right_array);
  return array_merger(sorted_left, sorted_right);
};
const array_merger = (a, b) => {
  const sorted = [];

  while (a?.length && b?.length) {
    sorted.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  while (a?.length) {
    sorted.push(a.shift());
  }

  while (b?.length) {
    sorted.push(b.shift());
  }

  return sorted;
};

const s = merge_sort([3, 4, 0, 1, 8, 3]);
console.log("Sorted array => ", s);
