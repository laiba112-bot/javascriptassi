    // chapter1

// question..!
// What does the alert function do in JavaScript?
//  answer!
// The alert() function in JavaScript displays a pop-up window with a specified message, 
// alerting the user to important information. It pauses the execution of the script until the user clicks 
// "OK" to dismiss the alert.
// question..!
// Displaying an alert with the message "Welcome to my website!"
// answer..!
alert("Welcome to my website!");

// question..!
// What happens if you capitalize the alert keyword?
// answer.!
// In JavaScript, keywords are case-sensitive. If you capitalize the alert keyword, it will result in a syntax error. The correct syntax is alert(), not Alert() or ALERT().

// Correct JavaScript syntax to display "Hello, world!" in an alert box


alert("Hello, world!");


// Alert statement to display a message
alert("Hello, world!"); 

// Breakdown:
// - //: Comment indicator (optional)
// - alert: The function name (case-sensitive)
// - (): Function call operator (opens and closes the function)
// - "Hello, world!": The string argument (message to display)
// - !: Exclamation mark (adds emphasis to the message)
// - ;: Statement terminator (ends the statement)
// Declare variable message and assign value

    // chapter 2....

var message = "Hello, world!";
alert(message);

// Declare variable age, leave undefined, then assign value
var age;
age = 25;
alert(age);

// Declare variable greeting, assign value, display, then update
var greeting = "Good morning!";
alert(greeting);
greeting = "Good evening!";
alert(greeting);

// Create variable favoriteColor, assign value, display in alert
var favoriteColor = "blue";
alert("My favorite color is " + favoriteColor);

// Declare variable age (again), leave undefined, then assign value
var age2;
age2 = 25;
alert("I am " + age2 + " years old.");

     //chapter3    

// Declare variable height, assign value, add 10, store in newHeight
var height = 170;
var newHeight = height + 10;
alert("New height: " + newHeight);

// Declare variables num1, num2, calculate sum
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert("Sum: " + sum);

// Declare numToBeAdded, calculate total
var numToBeAdded = 20;
var total = sum + numToBeAdded;
alert("Total: " + total);

// Declare price, calculate total price with 10% tax
var price = 120;
var tax = price * 0.10; // 10% tax
var totalPrice = price + tax;
alert("Total price: " + totalPrice);
  
   //chapter4

// Create variable myAddress using camelCase and display in alert
var myAddress = "New York City";
alert(myAddress);

// Declare variables userName, userEmail, userPassword using camelCase
var userName = "John Doe";
var userEmail = "johndoe@example.com";
var userPassword = "password123";
alert("Name: " + userName + ", Email: " + userEmail + ", Password: " + userPassword);

// Declare variable userAddress with spaces (incorrect)
// let user address = "123 Main St"; // SyntaxError

// Correct variable name using camelCase
var userAddress = "123 Main St";
alert(userAddress);

   // chapter5..!

// Add 25 and 30, store in sum, and display in alert
var sum = 25 + 30;
alert("Sum: " + sum);

// Declare num1, num2, add, store in sum, and display in alert
var num1 = 25;
var num2 = 5;
sum = num1 + num2;
alert("Sum: " + sum);

// Calculate remainder of 27 divided by 4, store in modulusResult, and display in alert
var modulusResult = 27 % 4;
alert("Modulus result: " + modulusResult);

// chapter6..!


// Post-increment (num++) example
var num = 3;
var newNum = num++;
alert("num: " + num); 
alert("newNum: " + newNum); 

// Counter++ twice example
var counter = 10;
counter++;
counter++;
alert("Counter: " + counter);

// Post-decrement (points--) and pre-increment (++points) example
var points = 20;
points--;
++points;
alert("Points: " + points);

// Pre-increment (++number) three times example
var number = 0;
++number;
++number;
++number;
alert("Number: " + number);

// chapter7..!

// 1. Calculation using parentheses and modulus operator:


var calculation = 10 + (20 % 6) * 2;
alert(calculation);

// Explanation:

// - Calculate 20 % 6 = 2 (remainder)
// - Multiply 2 * 2 = 4
// - Add 10 + 4 = 14

// 2. Expression using parentheses:


var expressionValue = (6 + 2) * (5 - 3);
alert(expressionValue);

// Explanation:

// - Calculate (6 + 2) = 8
// - Calculate (5 - 3) = 2
// - Multiply 8 * 2 = 16

// 3. FinalTotal with operator precedence:


var finalTotal = 10 + 2 * 3 - 1;
alert(finalTotal);

// Explanation:

// - Multiply 2 * 3 = 6 (multiplication has higher precedence)
// - Add 10 + 6 = 16
// - Subtract 16 - 1 = 15

// 4. Evaluating:


var answer = 2 + 3 * 4 - 1;
alert(answer);

// Explanation:

// - Multiply 3 * 4 = 12 (multiplication has higher precedence)
// - Add 2 + 12 = 14
// - Subtract 14 - 1 = 13

// 5.JavaScript processes expressions following operator precedence:

// 1. Parentheses
// 3. Multiplication and Division (from left to right)
// 4. Addition and Subtraction (from left to right)

   // chapter8...!

// Ask user for name and display greeting
var userName = prompt("What is your name?");
alert("Hello, " + userName + "!");

// Ask user for age, handle cancel, and display
var age = prompt("How old are you?");
if (age === null) {
  alert("No age provided");
} else {
  alert("You are " + age + " years old.");
}

// Ask user for pets, check empty input, and display
var pets = prompt("How many pets do you have?");
if (pets === "") {
  alert("You didn't enter anything.");
} else {
  alert("You have " + pets + " pets.");
}

// Ask user for number, convert, multiply by 2, and display
let userNumber = parseInt(prompt("Enter a number between 1 and 10"));
alert("Double your number: " + (userNumber * 2));

// Ask user for favorite number, assign default, and display
let favNum = prompt("What is your favorite number?");
if (favNum === "") {
  favNum = 7;
}
alert("Your favorite number is " + favNum);
