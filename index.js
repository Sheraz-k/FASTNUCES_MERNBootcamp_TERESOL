 
 let prompt = require("prompt-sync")();

let string_range = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let user_name = window.prompt("Please Enter Plain Text here to Convert it into Cypher : " );
let user_key = window.prompt("Please Enter Key size : " );
let cypher = "";
for(let mychar of user_name){
  for(let i =0; i<=string_range.length;i++){
    
    if(mychar == string_range[i]){
      cypher = cyper + string_range[i + key];
      
    }
    
    
  }
  
}
consol.log(`Cyphered Message is : ${cypher}`);

