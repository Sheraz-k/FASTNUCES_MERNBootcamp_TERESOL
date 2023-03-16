
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Methods"));



console.log("-----------------------------------");


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('for loop reverse string'));

console.log("---------------------------------");

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("recursion reverse string"));
