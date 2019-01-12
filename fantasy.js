// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName = 'Jacob';
let lastName = 'sonhthila';
let momMaidenName = 'Saeturn';
let cityBorn = 'oakland';
let dreamCar = 'Ferrari';
let street = 'Grey st';
let fantasyName = 'TheOtakuNinja';

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName(fName, lName) {
let first3ofFirstName  = fName.substring(0,3);
let first2ofLastName = lName.substring(0,2);
return first3ofFirstName + first2ofLastName;
}
console.log(getNewFirstName(firstName, lastName));
/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName(momName, cityBorn) {
let first2ofMom = momName.substring(0,2);
let first3ofCity = cityBorn.substring(0,3);
return first2ofMom + first3ofCity;
}
console.log(getNewLastName(momMaidenName, cityBorn));
/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle(lastName, newCar) {
let reversedLastName1 = (lastName.charAt(8));
let reversedLastName2 = (lastName.charAt(7));
let reversedLastName3 = (lastName.charAt(6));
return reversedLastName1 + reversedLastName2 + reversedLastName3 + newCar;
}
console.log(getTitle(lastName, dreamCar));
/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific(title, streets) {
return title + streets;
}
console.log(getHonorific(getTitle, street));
/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {

}

// Run the program!
run();
