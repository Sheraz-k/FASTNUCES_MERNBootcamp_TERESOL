


/*
let counter = 1;
let toffe = 10;
while (toffe >= 0) {
    // code that to be run again and again and again and ... infinite while loop 
    console.log("Sit " + counter);
    counter = counter + 1; // 1st approach
    counter++; // 2nd way
    counter+= 1; // approach 
}
*/


let counter = 1;
let toffe = 5;
while (toffe >= 0) {
    // code that to be run again and again and again and ... infinite while loop 
    console.log("Sit " + counter);
    toffe-=1
    counter = counter + 1; // 1st approach
    //counter++; // 2nd way
    //counter+= 1; // approach 
}

// arrays -- data is group toghether
const names = ["Sheraz", "Saad Shaheen", "Sumama", "Hassan"];

console.log(names[0].length); // 6
console.log(names[1].length); 
console.log(names[2].length); 
console.log(names[3].length); 

names[44] = "rafay"; //(after index 3 array memory will fill 40 empty items and then place rafay name at 44 index)
 /**[
    'Sheraz',
    'Saad Shaheen',
    'Sumama',
    'Hassan',
    <40 empty items>,//undefined
    'rafay',
    'dflkdf'
  ]*/
names[names.length] = "dflkdf";

names.push("something else"); //push an item at the last of an array
names.push("extra item to check pop() work")
names.pop(); //remove one item from last index of array

console.log(names[44].length); 
//console.log(names[n].length); 


console.log(names);

//Reverse Array Using Loop
let reversedArray = [];
for(let i = names.length-1; i>=0; i--){

 reversedArray.push(names[i]);


}

console.log(reversedArray);

//Spread Operator
/*
WHAT IS THE SPREAD OPERATOR
The spread operator is used to unroll (to "spread", like butter on bread 😂) the individual elements of an iterable object or array (iterable collection), separated by a comma, into another collection

SPREAD OPERATOR WITH ARRAYS
With this operator, you can spread the values of an array into another array, especially useful for combining arrays together. Here's an example:
*/
const array1 = [1, 2, 3]
const array2 = [100, 200, 300]

const combined = [...array1, "hello", ...array2]

console.log(combined)
// [1, 2, 3, "hello, 100, 200, 300]
//In the combined array, you can see the contents of the array1 spread, with the value "hello" and the contents of the array2 also spread. As you can see in the log, the values of this array are spread and separated by commas.

//Just like arrays, you can also spread the properties of an object into another object. Here's an example:

const info = {
  name: "Saad",
  age: 30,
  country: "Pakistan"

}

const fullInfo = {
  ...info,
  language: "JavaScript",
  stack: "frontend",
}

console.log(fullInfo)
// {
//   name: 'Dillion',
//   age: 100,
//   language: 'JavaScript',
//   stack: 'frontend'
// }