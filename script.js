function clr() {
  console.clear();
}

let computerChoice;
let playerChoice;
let gameRounds = 0;
let computerWins = 0;
let playerWins = 0;

// let the computer choose a weapon
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
    console.log("The computer has picked rock");
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    console.log("The computer will battle with paper");
  } else {
    computerChoice = "scissors";
    console.log("The computer has chosen the best weapon: scissors");
  }
}

// let the player choose a weapon
function getPlayerChoice() {
  playerChoice = prompt("Choose your weapon: ");
  if (playerChoice.toLowerCase() == "rock") {
    console.log("You chose rock as your weapon");
  } else if (playerChoice.toLowerCase() == "paper") {
    console.log("So, paper is your weapon of choice, huh?");
  } else if (playerChoice.toLowerCase() == "scissors") {
    console.log("I see you are a scissors enjoyer as well.");
  } else {
    alert("Please choose either rock, paper, or scissors.")
    getPlayerChoice();
    return(playerChoice.toLowerCase());
  }
  // getComputerChoice();
  // compareChoices();
  // return(playerChoice.toLowerCase());
  // console.log(playerChoice.toLowerCase());
}


// Write the rest of the comparision functions.
function compareChoices() {
  if (computerChoice == "rock" && playerChoice == "rock") {
  alert("you win");
  }
}


// plays the game
function playGame() {
  getPlayerChoice()
  getComputerChoice()
  compareChoices()
  // return;
}