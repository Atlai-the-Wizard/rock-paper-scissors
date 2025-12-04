function clr() {
  console.clear();
}

alert("Check the console to start playing!");
console.log("Type playGame() to start!");

let computerChoice;
let playerChoice;
let gameRounds = 0;
let computerWins = 0;
let playerWins = 0;

// play the game
function playGame() {
  getPlayerChoice()
  getComputerChoice()
  compareChoices()
}

// let the computer choose a weapon
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
    console.log("The computer has picked rock");
    return(computerChoice = "rock");
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    console.log("The computer will battle with paper");
    return(computerChoice = "paper");
  } else {
    console.log("The computer has chosen the best weapon: scissors");
    return(computerChoice = "scissors");
  }
}

// let the player choose a weapon
function getPlayerChoice() {
  playerChoice = prompt("Choose your weapon: ");
  if (playerChoice.toLowerCase() == "rock") {
    console.log("You chose rock as your weapon");
    return(playerChoice = "rock");
  } else if (playerChoice.toLowerCase() == "paper") {
    console.log("So, paper is your weapon of choice, huh?");
    return(playerChoice = "paper");
  } else if (playerChoice.toLowerCase() == "scissors") {
    console.log("I see you are a scissors enjoyer as well.");
    return(playerChoice = "scissors");
  } else {
    alert("Please choose either rock, paper, or scissors.")
    return(getPlayerChoice());
  }
}

// compare the choices
function compareChoices() {
  if (playerChoice == "rock" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "scissors") {
    alert(`You chose ${playerChoice} and the computer chose ${computerChoice}: it's a tie!`);
    return(increaseTie());
  } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
    alert(`You chose ${playerChoice} and the computer chose ${computerChoice}: you lose!`);
    return(increaseComputerWins());
  } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
    alert(`You chose ${playerChoice} and the computer chose ${computerChoice}: you win!`);
    return(increasePlayerWins());
  }
}
// functions for round and wins tracking
function increasePlayerWins() {
  ++playerWins;
  console.log("Player wins: " + playerWins);
  increaseRounds();
  return(roundTracker());
}

function increaseComputerWins() {
  ++computerWins;
  console.log("Computer wins: " + computerWins);
  increaseRounds();
  return(roundTracker());
}

function increaseTie() {
  increaseRounds();
  return(roundTracker());
}

function increaseRounds() {
  ++gameRounds;
  console.log("Rounds played: " + gameRounds);
}

// round and wins checker
function roundTracker() {
  if (playerWins == 3) {
    alert("The game is over: you win!")
    return(playAgain());
  } else if (computerWins == 3) {
    alert("The computer wins this time!")
    return(playAgain());
  } else if (gameRounds == 5) {
    alert("The game is a tie!")
    return(playAgain());
  } else {
    return(playGame());
  }
}

// ask to play again and reset the scores and round number.
function playAgain() {
  let playAgainChoice = confirm("Do you wanna play again?");
  if (playAgainChoice) {
    gameRounds = 0;
    playerWins = 0;
    computerWins = 0;
    return(playGame());
  } else {
    gameRounds = 0;
    playerWins = 0;
    computerWins = 0;
    console.log("Thanks for playing!")
    return;
  }
}