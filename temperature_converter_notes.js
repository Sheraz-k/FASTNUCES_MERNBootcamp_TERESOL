//to get input in consol we use install npm install prompt-sync package 
//now package is installed on order to use it in program we have to Require that function/package

const prompt = require("prompt-sync")();// we can use anykeyword to require this package such as input/prompt/get/myinput/userinput just use const myinput = require("prompt-sync")();


let tempInCelcius = prompt("Enter Temperature Value in Celcius: "); // now we can use prompt keyword for getting input from user
let tempInFarhenheit; //type of var will "undefined" if value is not assigned

/*
let test = tempInCelcius;//value is converted to string as no explicit casting is done as it will consider prompted value as string so we have to apply checks for datatypes as well
let test2 = tempInCelcius;
isOk = true;
console.log(Number(test)+Number(test2)); //we have to typecast it as integer explicitly
console.log(typeof test);// type of test will string instead of integer
console.log(Boolean(test)+String(test2));
console.log(Number(test)+String(test2)+ isOk);

*/

tempInFarhenheit = tempInCelcius * (9/5) + 32; 

//(F − 32) × 5/9 farhenheit to celcius
tempInCelcius = (tempInFarhenheit - 32) * 5/9;

console.log(`The Celcius Temprature in Islamabad Pakistan is : ${tempInCelcius} 
While the Farenheit Temperature in Islamabad Pakistan is : ${tempInFarhenheit}`);
 




/*

const celcius = 3.1;
const farhenheit;

farhenheit = celcius * (9/5) + 32;

console.log(farhenheit);
There are different types of data that we can use in a JavaScript program. For example,
const n = 10;
n = "test"
console.log(n); 
to keep value constant and not let to change value once assigned 
const x = 5;
const y = "Hello";
Here,

5 is an integer data.
"Hello" is a string data.
JavaScript Number
Number represents integer and floating numbers (decimals and exponentials). For example,

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5
A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,

const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN



JavaScript null
In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;
The code above suggests that the number variable is empty.

Note: null is not the same as NULL or Null.

JavaScript Symbol
This data type was introduced in a newer version of JavaScript (from ES2015).

A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');
Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.


Let vs Var

JavaScript let Vs var

In JavaScript, both the keywords var and let are used to declare variables.

The let keyword was introduced in the later version of JavaScript known as ES6(ES2015). 
And it's the preferred way to declare variables.

let is block-scoped.
var is function scoped.

let does not allow to redeclare variables.
var allows to redeclare variables.

Hoisting does not occur in let.
Hoisting occurs in var.

let Doesn't Allow Hoisting
The variables declared with var are hoisted to the top of the scope of the program. For example,

console.log(a);
var a; // undefined (not an error)



The keyword let does not allow hoisting. For example,

console.log(a);
let a; // Uncaught ReferenceError: a is not defined

JavaScript Hoisting
In this tutorial, you will learn about JavaScript hoisting with the help of examples.

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,

// using test before declaring
console.log(test);   // undefined
var test;
Run Code
The above program works and the output will be undefined. The above program behaves as

// using test before declaring
var test;
console.log(test); // undefined
Run Code
Since the variable test is only declared and has no value, undefined value is assigned to it.

Note: In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.
*/


//improved code of temperature converter to and fro in C and F

let temp = prompt("Enter Temperature Value: "); // Prompt the user to enter temperature value
let unit = prompt("Enter the unit of temperature (C for Celsius or F for Fahrenheit): "); // Prompt the user to enter the unit of temperature
let convertedTemp; // Declare variable for converted temperature
let convertedUnit; // Declare variable for converted temperature unit

if (isNaN(temp) || temp === "" ) { // Check if the entered temperature is a valid number or empty
  alert("Please enter a valid number"); // Show an alert message if not valid
} else {
  if (unit === "C" || unit === "c") { // Check if the entered unit is 'C' or 'c'
    convertedTemp = (temp * 9/5) + 32; // Convert the temperature to Fahrenheit using the formula (temp * 9/5) + 32
    convertedUnit = "Fahrenheit"; // Assign the converted unit
  } else if (unit === "F" || unit === "f") { // Check if the entered unit is 'F' or 'f'
    convertedTemp = (temp - 32) * 5/9; // Convert the temperature to Celsius using the formula (temp - 32) * 5/9
    convertedUnit = "Celsius"; // Assign the converted unit
  } else {
    alert("Invalid unit of temperature. Please enter 'C' for Celsius or 'F' for Fahrenheit."); // Show an alert message if the entered unit is invalid
  }
  if (convertedTemp) { // Check if the temperature was successfully converted
    console.log(temp + "°" + unit + " is equal to " + convertedTemp + "°" + convertedUnit + "."); // Print the converted temperature and unit
  }
}


//code explanation 
/*
This code prompts the user to enter a temperature value and the unit of temperature (C for Celsius or F for Fahrenheit) and checks if the entered temperature value is a valid number or not, If it is not a valid number or empty it will show an alert message.
Then it checks the unit of entered temperature if it's 'C' or 'c' then it will convert it to Fahrenheit using the formula (temp * 9/5) + 32 and assigns the result to the convertedTemp variable and assigns the unit as Fahrenheit.
If the entered unit is 'F' or 'f' then it will convert it to Celsius using the formula (temp - 32) * 5/9 and assigns the result to the convertedTemp variable and assigns the unit as Celsius.
If the entered unit is not valid it shows an alert message.
Finally, it prints the converted temperature value and unit using the console.log() method if the temperature was successfully converted.

The comments added to the code explain each step of the process and make it easier to understand what the code is doing.
*/