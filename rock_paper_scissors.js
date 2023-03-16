
//Array and if else uasge for RPS with 2 choices
const prompt = require("prompt-sync")();
const choices = ["rock", "spock", "paper", "lizard", "scissors"];

function compare(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
      return "Tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
      return "Right wins";
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
      return "Left wins";
    }
    if (choice1 > choice2) {
      return "Left wins";
    } else {
      return "Right wins";
    }
  }

  console.log(compare(choices[0], choices[2])); //left is rock and right is paper




  //Computer and normal user competion choices 

let userChoice1 = prompt("Do you choose rock, paper or scissors?");
let computerChoice1 = Math.random();
if (computerChoice1 < 0.34) {
    computerChoice1 = "rock";
} else if(computerChoice1 <= 0.67) {
    computerChoice1 = "paper";
} else {
    computerChoice1 = "scissors";
}
console.log("Computer: " + computerChoice1);

let computerUserChoiceCompare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

console.log(computerUserChoiceCompare(userChoice1, computerChoice1));


//math.floor usage for Rock Paper Scissor

var userChoicefloor = prompt("Do you choose rock, paper or scissors?");
var computerChoicefloor = Number(Math.random());
computerChoice1 = Math.floor(computerChoicefloor * 3);
if (computerChoicefloor === 0) {
    computerChoicefloor = "rock";
} else if (computerChoicefloor === 1) {
    computerChoicefloor = "paper";
} else {
    computerChoicefloor = "scissors";
}
console.log("Computer: " + computerChoicefloor);

let comparefloor = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

console.log(comparefloor(userChoicefloor, computerChoice1));


/*

Here is the JavaScript code for a two-player rock paper scissors game, where both players enter their names and make their choices through prompts:

*/

let player1 = prompt("Player 1, please enter your name:");
let player2 = prompt("Player 2, please enter your name:");

let player1Choice = prompt(player1 + ", do you choose rock, paper, or scissors?");
let player2Choice = prompt(player2 + ", do you choose rock, paper, or scissors?");

let compare2users = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return player1 + " wins with rock";
        } else {
            return player2 + " wins with paper";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return player1 + " wins with paper";
        } else {
            return player2 + " wins with scissors";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return player2 + " wins with rock";
        } else {
            return player1 + " wins with scissors";
        }
    }
};

console.log(compare2users(player1Choice, player2Choice));

