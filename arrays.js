const namesArray = ["Sheraz","Saad","Sumama"]
//indexing starts with 0 
//arrays are implemented as a contiguous block of memory. 
//The first element of an array is stored at the first memory address, the second element is stored at the next memory address, and so on. The index of an array element corresponds to the offset from the first memory address. Since the first element is stored at the first memory address, the offset for the first element is 0. Therefore, the first element of an array is assigned the index of 0, and the subsequent elements are assigned incrementing indices. This is known as zero-based indexing. The reason for using zero-based indexing is that it allows for more efficient memory access and computation when working with arrays.
//if the index was start with 1 the code would have to make an adjustment for the offset, for example, accessing the first element would require array[1] instead of array[0]. This would make the code more complex and less efficient. Additionally, many programming languages and libraries are built around the assumption that arrays are 0-indexed, so changing this would have a ripple effect on a lot of existing code and development practices.
namesArray[2];
namesArray.push("ali");
namesArray[namesArray.length] = "Hassan";
namesArray.pop();
namesArray[40] = "Hassan Mehmood"; // this will store value at 40 index and other indexes from 2 to 39 will assigne Undefined Value.

/*
//Math.floor() The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6


Math.ceil()
The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity

so for Math.ceil(x) it will return The smallest integer greater than or equal to x

//Math.random();

The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

In JavaScript, an array is a type of object that stores a collection of items. Each item in an array is called an element and can be any type of data (e.g. numbers, strings, objects, etc.).

Here is an example of an array in JavaScript:

Copy code
let fruits = ["apple", "banana", "orange"];
In this example, the variable fruits is an array that contains 3 elements: "apple", "banana", and "orange".

In JavaScript, arrays have several properties that can be used to access or manipulate the elements in the array, such as:

In this example, the variable fruits is an array that contains 3 elements: "apple", "banana", and "orange".

In JavaScript, arrays have several properties that can be used to access or manipulate the elements in the array, such as:

length: Returns the number of elements in the array.
push(): Adds one or more elements to the end of the array.
pop(): Removes the last element from the array.
shift(): Removes the first element from the array.
unshift(): Adds one or more elements to the beginning of the array.
slice(): Returns a new array that contains a specified portion of the original array.
splice(): Inserts, removes, or replaces elements in the array at a specified position.
indexOf(): Returns the first index of an element in the array that matches a specified value.
forEach(): Executes a function for each element in the array.

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
fruits.push("kiwi");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]
fruits.pop();
console.log(fruits); // ["apple", "banana", "orange"]
fruits.shift();
console.log(fruits); // ["banana", "orange"]
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "banana", "orange"]
console.log(fruits.slice(1, 2)); // ["banana"]
fruits.splice(1, 0, "mango");
console.log(fruits); // ["strawberry", "mango", "banana", "orange"]
console.log(fruits.indexOf("banana")); // 2
fruits.forEach(function(fruit) {

  map(): Creates a new array with the results of calling a provided function on every element in the array.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

sort(): Sorts the elements of an array in place and returns the array.

reduce(): Executes a provided function for each value of the array (from left-to-right) and the returned value is stored in an accumulator.

slice(): Extracts a section of an array and returns a new array.

splice(): Adds/Removes elements from an array.

concat(): Joins two or more arrays and returns a new array.

indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

join(): Joins all elements of an array into a string.

pop(): Removes the last element from an array and returns that element.

push(): Adds one or more elements to the end of an array and returns the new length of the array.

shift(): Removes the first element from an array and returns that element.

unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

reverse(): Reverses the order of the elements in an array.

These are some of the properties and methods of an array in javascript.

*/

/*
const myArray = ["hassan", "saad", "sumama", "john"];



function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray(myArray)); 

*/

/*
console.log(reverseArray[0]);

let str = "Hello World";
let reversed = "";
let i = str.length - 1;

while (i >= 0) {
    reversed += str[i];
    i--;
}
console.log(reversed); // Output: "dlroW olleH"

*/