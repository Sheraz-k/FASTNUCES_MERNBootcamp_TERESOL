/*
JavaScript BigInt
In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 
Run Code
Output

900719925124740999n
Uncaught TypeError: Cannot mix BigInt and other types
Note: BigInt was introduced in the newer version of JavaScript and is not supported by many browsers including Safari.
*/

/*All numbers in JavaScript are actually IEEE-754 compliant floating-point doubles. These have a 53-bit mantissa which should mean that any integer value with a magnitude of approximately 9 quadrillion or less -- more specifically, 9,007,199,254,740,991 -- will be represented accurately. NOTICE: in 2018 main browsers and NodeJS are working also ...

Reviews: 1
Code sample
Number.MAX_SAFE_INTEGER
9007199254740991

*/

//Math.log2(9007199254740991)
/*let no1 = 900719925124740991; //Number.MAX_SAFE_INTEGER in JS = 900719925124740992 
let no2 = 900719925124740999;
let no3 = 900719922124700111;
console.log(no2);
console.log(no1-1);
console.log(no1+1);
console.log(no1+2);
console.log(no1+3);
console.log(no3*1004467197179779971971979);
*/
var n = 9007199254740997888989897877797n;// this long int can store infinte large no. now
console.log(n);

//console.log(n*2);//gives error for explicit type casting we cannot do implicit conversion in this case
console.log(n*2n);//now 2n is long int and n is also long int so multiplication is ok

