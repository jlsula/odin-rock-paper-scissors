let words = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

///////////////// Helper functions

// Making player selection parameter case-insensitive
let capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

// Function that randomly returns "Rock", "Paper" or "Scissors"
function computerPlay() {
  return words[Math.floor(Math.random() * words.length)];
}

// Function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "TIE";
  } else if (playerSelection === "Rock") {
    if (computerSelection == "Paper") {
      computerScore++;
      return "You lose! Paper beats Rock";
    } else {
      playerScore++;
      return `You won! Rock wins ${computerSelection}`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper!";
    } else {
      playerScore++;
      return `You won! Rock wins ${computerSelection}`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else {
      playerScore++;
      return `You won! Rock wins ${computerSelection}`;
    }
  }
}

// Play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = capitalize(prompt("Rock, Paper or Scissors?"));
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score : " + playerScore);
    console.log("Computer score : " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (playerScore < computerScore) {
    console.log("Computer won!");
  } else {
    console.log("Tie!");
  }
}

game();
