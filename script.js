
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
//  uppercase letter or lower case letter.
//  (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var input = prompt("Please enter a character (a letter or number):");
var ascii = input.charCodeAt(0);
if(ascii >= 65 && ascii <= 90 )
{
    alert("Upper case letter");
}
else if(ascii >= 97 && ascii <= 122 ) {
    alert("Lower case letter");
}
else if(ascii >= 48 && ascii <= 57) {
    alert("Number");
}
else{
    alert("Nothing");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var number1 = parseInt(prompt("Enter the first number:"));
var number2 = parseInt(prompt("Enter the second number:"));

if(number1 > number2){
    alert("First number is greater than second number.");
}
else if(number1 === number2){
    alert("Both numbers are equal.");
}
else{
    alert("Second number is greater than first number.");
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var number = parseInt(prompt("Enter a number:"));
if(number > 0 ){
    alert("The number is positive.");
}
else if(number < 0 ){
    alert("The number is negative.");
}
else if(number === 0 ){
    alert("The number is equal.");
}
else{
    alert("Invalid input. Please enter a valid number.");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
 
var character = prompt("Enter a character:");
if(character.length === 1 &&
    (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
   character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U')){
    alert("True");
}
else{
    alert("False");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same.
// If they are same, show message “Correct!
// The password you entered matches the original password”. Show “Incorrect password” otherwise.


var correctPassword = "Ayesha123";
var userPassword = prompt("Please enter your password.");
if(userPassword === ""){
    alert("Please enter your password.");
}
else if(userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) { greeting = "Good day";
//  else greeting = "Good evening"; }

// correct statement


 var greeting;
 var hour = 13;
 if(hour < 18)
     { greeting = "Good day";}
 else{
     greeting = "Good evening"; }

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//  Implement the following case using if, else & else if statements

var timeInput = prompt("Please enter the time in HHMM format (e.g., 1900 for 7 PM):");
var time = parseInt(timeInput, 10);

if (isNaN(time) || time < 0 || time > 2359) {
    alert("Invalid time format. Please enter time in HHMM format.");
}
else if (time >= 0 && time <= 1159) {
    alert("Good Morning.");
}
else if (time >= 1200 && time <= 1659) {
    alert("Good Afternoon.");
}
else if (time >= 1700 && time <= 1959) {
    alert("Good Evening.");
}
else if (time >= 2000 && time <= 2359) {
    alert("Good Night.");
}
else{
    alert("Time input is out of expected range.");
}