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
