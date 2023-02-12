const prompt = require("prompt-sync")();

console.log("Welcom to FAST Calculator");

let num1 = Number(prompt("Please Enter First Num : "));
let num2 = Number(prompt("Please Enter Second Num : "));

let operator = (prompt("Enter Arithemetic Operator for Calculation : "));

if(operator=="+"){

    console.log(num1+num2);

}
if(operator=="-"){

    console.log(num1-num2);

}
if(operator=="*"){

    console.log(num1*num2);

}


if(operator=="/"){

    console.log(num1/num2);

}

else{
    console.log("Invalid Operator");
}