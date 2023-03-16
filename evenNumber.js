let prompt = require('prompt-synce')();

let num = prompt("Please Enter a Number to Check is it Even or Odd: ")
if(num%2 == 0){
    console.log(`The Number: ${num} is Even`)
}
else{
    console.log(`The Number: ${num} is Odd`)
}