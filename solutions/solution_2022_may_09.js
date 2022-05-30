// Question 1

/*
Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

Test Data :
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
Output :
1
3
*/
const gcd_two_numbers = (a, b) => {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  console.log(a || b);
};
gcd_two_numbers(12, 13);
gcd_two_numbers(9, 3);

// Question 2

/*
Multiply two strings
Given two numbers as strings s1 and s2. Calculate their Product.
Note: The numbers can be negative.
Input:
s1 = "33"
s2 = "2"
Output:
66
*/
const multiply_string = (s1, s2) => console.log(parseInt(s1) * parseInt(s2));
multiply_string("33", "2");
