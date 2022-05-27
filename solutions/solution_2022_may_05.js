//Question 1

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

/*
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
true
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
false
*/
const dateComparer = (date1, date2) => {
  return date1 === date2;
};

const a = dateComparer(
  new Date("2000/01/01 08:00:00"),
  new Date("2000/01/01 08:45:00")
);
console.log(a);

//Question 2

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

/*
myFunction(['Alf', 'Alice', 'Ben'])
Expected
{ a: ['Alf', 'Alice'], b: ['Ben']}
myFunction(['Ant', 'Bear', 'Bird'])
Expected
{ a: ['Ant'], b: ['Bear', 'Bird']}
myFunction(['Berlin', 'Paris', 'Prague'])
Expected
{ b: ['Berlin'], p: ['Paris', 'Prague']}
 */
const nameGrouper = (arr) => {
  let x = [];
  let y = [];
  let obj = {};

  arr.forEach((item) => {
    y.push(item);
    if (x.includes(item[0])) {
      return;
    }
    x.push(item[0]);
  });

  // Iterating x
  x.forEach((item) => {
    obj[item.toLowerCase()] = y.filter(
      (ele) => ele[0].toLowerCase() == item[0].toLowerCase()
    );
  });

  console.log(obj);
};

nameGrouper(["Alf", "Alice", "Ben"]);
nameGrouper(["Berlin", "Paris", "Prague"]);
