// Question 1
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// Input : "abcdef" output: "abc"
const extractHalf = (a) => {
  if (typeof a == "string") {
    const x = a.substring(0, a.length / 2);
    return x;
  }
  return "Please enter string!";
};

const r = extractHalf("abcdef");
console.log(r);

// Question 2
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// Input : {a: 1, b: 2} "a" output: true
// Input : {a: 1, b: 2} "c" output: false
const boolReturner = (a, b) => {
  if (b in a) {
    return true;
  }
  return false;
};

const rs = boolReturner({ a: 1, b: 2 }, "a");
const rs2 = boolReturner({ a: 1, b: 2 }, "c");
console.log(rs, rs2);
