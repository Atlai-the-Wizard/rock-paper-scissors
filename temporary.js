const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

let computerChoice;
let playerChoice;

// make buttons run the game instead of player choice, and make the function that runs the game run getPlayerChoice() inside of it
btnRock.addEventListener('click', getPlayerChoice);
btnPaper.addEventListener('click', getComputerChoice);
// btnScissors.addEventListener('click', );

// make function that handles event
function getPlayerChoice(event) {
  playerChoice = event.target.textContent;
  console.log(playerChoice);
  return(playerChoice);
}

// get computer choice
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
    console.log(computerChoice);
    return(computerChoice);
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    console.log(computerChoice);
    return(computerChoice);
  } else {
    computerChoice = "scissors";
    console.log(computerChoice);
    return(computerChoice);
  }
}

// make functions that run the round checking and game wins check and add div that displays score
// add in function calls once they are built
function compareChoices() {
  if (playerChoice == "rock" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "scissors") {
  } else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock") {
  } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
  }
}



// make function to run game and then change buttons to run that