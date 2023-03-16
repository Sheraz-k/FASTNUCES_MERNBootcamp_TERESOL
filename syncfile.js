/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */




/*

function sum(a, b) {
    return a + b;
}

module.exports = { sum };

**/


const fs = require("fs");

file = fs.readFileSync("input.js").toString();
console.log(file);

file = file + "abcdf";

fs.writeFile("input");






console.log("i am here"); //take 5 sec

file = file + "read";




const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
