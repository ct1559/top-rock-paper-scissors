// Create function that makes a play by the computer
function computerPlay() {
  // Create variable for possible computer choices
  const choiceArr = ["Rock", "Paper", "Scissors"];

  // Randomly pick one of the 3 variables
  let npcChoice = Math.floor(Math.random() * 3);
  return choiceArr[npcChoice];
}

function playRound(playerSelection, computerSelection) {
  // Change player input to first letter capital, rest lowercase
  let playerSelectionArr = playerSelection.split("");
  playerSelectionArr[0] = playerSelectionArr[0].toUpperCase();
  for (let i = 1; i < playerSelectionArr.length; i++) {
    playerSelectionArr[i] = playerSelectionArr[i].toLowerCase();
  }

  const playerSelectionFixed = playerSelectionArr.join("");

  // Functions for winning and losing
  let winRound = () =>
    `You win! ${playerSelectionFixed} beats ${computerSelection}`;
  let loseRound = () =>
    `You lose! ${computerSelection} beats ${playerSelectionFixed}`;

  // When both make the same choice
  if (playerSelectionFixed === computerSelection) {
    return `It's a draw! Both chose ${computerSelection}`;
  } else {
    //All other possiblilities
    switch (playerSelectionFixed) {
      case "Rock":
        if (computerSelection === "Scissors") {
          return winRound();
        } else {
          return loseRound();
        }
      case "Paper":
        if (computerSelection === "Rock") {
          return winRound();
        } else {
          return loseRound();
        }
      case "Scissors":
        if (computerSelection === "Paper") {
          return winRound();
        } else {
          return loseRound();
        }
    }
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
