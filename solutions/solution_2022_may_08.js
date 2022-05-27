// Question 1

/*
Write a JavaScript program to find the armstrong numbers of 3 digits
Note : An Armstrong number of three digits is an integer such that the 
sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
*/
const armstrong_number = (number) => {
  let temp = number;
  let sum = 0;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += Math.pow(remainder, 3);
    temp = parseInt(temp / 10);
  }
  sum == number
    ? console.log(`${number} is an armstrong number.`)
    : console.log(`${number} is not an armstrong number.`);
};
armstrong_number(371);
armstrong_number(122);

// Question 2

/*
Write a JavaScript function to convert a binary number to a decimal number.
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4
*/
const binary_to_decimal = (bin) => {
  console.log(parseInt(bin, 2));
};
binary_to_decimal(110011);
binary_to_decimal(100);
