//Question 1

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

/*
myFunction([1,2,3,4])
Expected
[2,3,4]
myFunction([5,4,3,2,1,0])
Expected
[2,1,0]
myFunction([99,1,1])
Expected
[99,1,1]
 */
const last_three = (a) => {
  let last = [];
  a.slice(a.length - 3, a.length).forEach((element) => {
    last.push(element);
  });
  return last;
};

const l = last_three([6, 7, 8, 12]);
console.log(l);
