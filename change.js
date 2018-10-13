
const READLINE = require('readline-sync');
//let userInput = READLINE.question("Type anything and I'll repeat it back!");
//console.log(userInput);
// declare and assign a variable for pennies using readlineSync
// ask the user how many pennies he/she wants change for



let pennies = READLINE.question("Enter of cents as a positive integer");
console.log(pennies);

// declare, assign, and print how many quarters you can make out of the pennies

let quarters = Math.floor(pennies/25);
console.log(quarters,'quarters');

// declare, assign, and print how many dimes you can make out of the pennies

let dimes = Math.floor(pennies%25/10);
console.log(dimes,'dimes');
// declare, assign, and print how many nickels you can make out of the pennies

let nickels = Math.floor(pennies%25%10/5);
let pennies4 = Math.floor(pennies%25%10%5);
console.log(nickels,'nickels');
console.log(pennies4,'Total pennies left over');
// declare, assign, and print how many pennies are left over

// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct

let thingy = {
quarters : undefined,
dimes : undefined,
nickels : undefined,
};
thingy.quarters = quarters
thingy.dimes = dimes
thingy.nickels = nickels
thingy.pennies4 = pennies4

console.log(thingy, 'ChangeBox');
