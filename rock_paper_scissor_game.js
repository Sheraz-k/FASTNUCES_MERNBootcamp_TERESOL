const prompt = require("prompt-sync")();
const input = require("prompt-sync")();


//SIMPLE CODE 

const mychoices = ["rock", "paper", "scissor"];


let player1 = input("Please Enter Player1 Name : ");
let player2 = "Computer";

let p1choice = input(`${player1} Enter your choice (Rock or Paper or Scissor): `).toLowerCase();
let p2choice = Number(Math.floor(Math.random() * 3)); //limit random int to 0-2


if(p1choice == p2choice){
    console.log("Tie");
}
else if((p1choice == "rock" &&  p2choice == "scissor") || (p1choice == "paper" &&  p2choice == "rock") || (p1choice == "scissor" &&  p2choice == "paper")){

    console.log(`Hurrah !! ${player1} Wins...! `);
}
else{
    console.log(`Alas!! ${player2} Wins...! Try Again`);
}



/*


//OPTIMIZED WITH CHECKS AND SCORE CALCULATION AND AGAIN AGAIN PLAYING OPTION 

const choices = ["rock", "paper", "scissors"];
let player1 = prompt("Please Enter Player1 Name : ");
let player2 = prompt("Please Enter Player1 Name : ");
let player1Score = 0;
let player2Score = 0;
let result = "";

function playRound(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    result = "Tie";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    result = "Player 1 : " + player1 + " wins!";
    player1Score++;
  } else {
    result = "Player 2: " + player2 + " wins!";
    player2Score++;
  }
}

function playGame() {
  let player1Choice = prompt(`Player 1: ${player1} make your choice (rock, paper, or scissors):`).toLowerCase();
  while (!choices.includes(player1Choice)) {
    player1Choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }

  let player2Choice = prompt(`Player 2: ${player2} make your choice (rock, paper, or scissors):`).toLowerCase();
  while (!choices.includes(player2Choice)) {
    player2Choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }

  playRound(player1Choice, player2Choice);

  console.log(result);
  console.log(`Player 1:${player1} score is ${player1Score} | Player 2: ${player2} score is ${player2Score}`);
  
  let playAgain = prompt("Do you want to play again? (yes or no)").toLowerCase();
  while (playAgain !== "yes" && playAgain !== "no") {
    playAgain = prompt("Please enter yes or no.").toLowerCase();
  }

  if (playAgain === "yes") {
    playGame();
  }
}

playGame();


*/