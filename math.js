// Variables
let num1 = 5;
let num2 = 10;

//save the sum of num1 and num2 into a variables
let sum1 = num1 + num2;
console.log(num1);
console.log(num2);
console.log(sum1);

//difference between num1 and num2
let difference = num1 - num2;
console.log(difference);

//save the product of num1 and num2 into a variables
let product = num1 * num2;
console.log(product);

//save the power of num1 and num2 into a variables
let power = num1 ^ num2;
console.log(power);

// **** Problem 1 ****
// Store the sum of num1 and num2 in a variable.
// Print the sum.
let sum = num1 + num2;
console.log(sum, "SUM");

// **** Problem 2 ****
// Store the difference between sum (above) and 7 in a variable.
// Print the difference.
let difference2 = sum - 7;
console.log(difference2, "DIFF");
// **** Problem 3 ****
// Store the product of difference and 3 in a variable.
// Print the product.
let product2 = difference2 * 3;
console.log(product2, "PRO");
// **** Problem 4 ****
// Store the power of the product raised to an exponent of 2 in a variable.
// Print the power.
let power2 = product2 ** 2;
console.log(power2, "POW");
// **** Problem 5 ****
// Store the quotient of the power divided by 4 in a variable.
// Print the quotient.
let quotient2 = power2 / 4;
console.log(quotient2, "QUO");
// **** Problem 6 ****
// Store the remainder of the quotient divided by 2 in a variable.
// Print the remainder.
let remainder2 = quotient2 % 2;
console.log(remainder2, "REM");
// **** Problem 7 ****
// Print a boolean value (true/false) representing if the quotient from
// problem 5 is even or odd. If the quotient is even, print true. If the
// quotient is odd, print false.
// Hint: You can tell if a value is even or odd if it is divisible by 2;
// in other words, if there is no remainder after dividing the value by
// 2, then the value is even. See problem 6!
let problem5 = quotient2 % 2 == 0;
console.log(problem5, "problem5");
