function clr() {
  console.clear();
}

// Have some of the console logs as alerts; the winner should be announced.

alert("Check the console to start playing!");
console.log("Type playGame() to start!");

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
    return(playerChoice = "scissors");
    console.log("I see you are a scissors enjoyer as well.");
  } else {
    alert("Please choose either rock, paper, or scissors.")
    return(getPlayerChoice());
  }
}

// compare the choices
function compareChoices() {
  if (playerChoice == "rock" && computerChoice == "rock") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: it's a tie!`);
  return(increaseTie());
  } else if (playerChoice == "rock" && computerChoice == "paper") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you lose!`);
  return(increaseComputerWins());
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you win!`);
  return(increasePlayerWins());
  } else if (playerChoice == "paper" && computerChoice == "rock") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you win!`);
  return(increasePlayerWins());
  } else if (playerChoice == "paper" && computerChoice == "paper") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: it's a tie!`);
  return(increaseTie());
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you lose!`);
  return(increaseComputerWins());
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you lose!`);
  return(increaseComputerWins());
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: you win!`);
  return(increasePlayerWins());
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
  console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}: it's a tie!`);
  return(increaseTie());
  }
}

// play the game
function playGame() {
  getPlayerChoice()
  getComputerChoice()
  compareChoices()
}

// functions for round and wins tracking
function increasePlayerWins() {
  ++playerWins;
  ++gameRounds;
  console.log("Player wins: " + playerWins);
  console.log("Rounds played: " + gameRounds);
  return(roundTracker());
}

function increaseComputerWins() {
  ++computerWins;
  ++gameRounds;
  console.log("Computer wins: " + computerWins);
  console.log("Rounds played: " + gameRounds);
  return(roundTracker());
}

function increaseTie() {
  ++gameRounds;
  console.log("" + gameRounds);
  return(roundTracker());
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

// track total wins over time?

// How to make the game track winner? Maybe have a declaration set wins to 0, and then when either side wins temporarily set it to 1. Then at the start of a new game set it back to 0

// make functions for tracking wins, computer wins, and number of rounds.

// make a tracker function that counts the rounds played, and when it reaches five compare the number of wins to the number of losses. If wins is more than losses, you win. If not, the computer wins. Could also make something that counts the total number of wins, and once those reach three, you automatically win or lose depending on who reaches three first. A function that checks the number of wins and rounds, then runs playGame() again.