const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const results = document.querySelector('.results');

let computerChoice;
let playerChoice;
let computerWins = 0;
let playerWins = 0;

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

// play a round when a button is pressed
function playRound(event) {
  playerChoice = event.target.textContent;
  console.log(playerChoice);
  getComputerChoice();
  compareChoices();
  winCheck();
}

// get computer choice
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    computerChoice = "rock";
    console.log(computerChoice);
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    console.log(computerChoice);
  } else {
    computerChoice = "scissors";
    console.log(computerChoice);
  }
}

// compare choices
function compareChoices() {
  if (playerChoice == "Rock" && computerChoice == "rock" || playerChoice == "Paper" && computerChoice == "paper" || playerChoice == "Scissors" && computerChoice == "scissors") {
    inCaseOfTie();
  } else if (playerChoice == "Rock" && computerChoice == "paper" || playerChoice == "Paper" && computerChoice == "scissors" || playerChoice == "Scissors" && computerChoice == "rock") {
    increaseComputerWins();
  } else if (playerChoice == "Rock" && computerChoice == "scissors" || playerChoice == "Paper" && computerChoice == "rock" || playerChoice == "Scissors" && computerChoice == "paper") {
    increasePlayerWins();
  }
}

// handles results and adds them to the div
function increaseComputerWins() {
  ++computerWins;
  const resultItem = document.createElement('div');
  resultItem.textContent = `Computer wins: ${computerWins}`;
  results.appendChild(resultItem);
}

function increasePlayerWins() {
  ++playerWins;
  const resultItem = document.createElement('div');
  resultItem.textContent = `Player wins: ${playerWins}`;
  results.appendChild(resultItem);
}

function inCaseOfTie() {
  const resultItem = document.createElement('div');
  resultItem.textContent = `It's a tie!`;
  results.appendChild(resultItem);
}

// make function that checks rounds won
function winCheck() {
  if (playerWins == 5) {
    alert(`The player wins!`);
    location.reload();
  } else if (computerWins == 5) {
    alert(`The computer wins!`);
    location.reload();
  }
}