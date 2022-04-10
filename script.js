// Function that randomly returns "Rock", "Paper" or "Scissors"
function computerPlay() {
  let words = ["Rock", "Paper", "Scissors"];
  return words[Math.floor(Math.random() * words.length)];
}

// Function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  // Making player selection parameter case-insensitive
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection == computerSelection) {
    return "TIE";
  } else if (playerSelection === "Rock") {
    if (computerSelection == "Paper") {
      return "You lose! Paper beats Rock";
    } else {
      return `You won! Rock wins ${computerSelection}`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return "You lose! Scissors beats Paper!";
    } else {
      return `You won! Rock wins ${computerSelection}`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return `You won! Rock wins ${computerSelection}`;
    }
  }
}
const playerSelection = "RoCK";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
