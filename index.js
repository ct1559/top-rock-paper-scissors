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

  console.log("playing round");

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

function game(playerChoice) {
  //for (let i = 0; i < 5; i++) {

  //variables for DOM manipulation
  const playerScore = document.querySelector("#player");
  const computerScore = document.querySelector("#computer");
  const roundResutlsDiv = document.querySelector(".round-results");
  const roundResults = document.createElement("div");

  // Create Variables to store selections
  const playerSelection = playerChoice; //prompt("Input 'Rock', 'Paper', or 'Scissors'");
  const computerSelection = computerPlay();

  //Play round and increment player's win variable by 1 if they win
  let roundOutcome = playRound(playerSelection, computerSelection);
  console.log(roundOutcome);
  if (roundOutcome.includes("win")) {
    playerWins++;
  } else if (roundOutcome.includes("lose")) {
    computerWins++;
  }

  // Display Score
  //playerScore.textContent = "test"; //`${playerWins}`;
  //computerScore.textContent = "test"; //`${computerWins}`;

  // Display play log
  console.log(`Player Wins: ${playerWins} || Computer Wins: ${computerWins}`);
  roundResults.textContent = `Player Wins: ${playerWins} || Computer Wins: ${computerWins}`;
  roundResutlsDiv.insertBefore(roundResults, roundResutlsDiv.firstChild);

  //}
  // The winner of the game is announced
  if (playerWins > computerWins) {
    return console.log("Player is the winner of the game!");
  } else if (computerWins > playerWins) {
    return console.log("Computer is the winner of the game!");
  } else {
    return console.log("The game is a draw!");
  }
}

//game();

// Create Variables to store W's count
let playerWins = 0;
let computerWins = 0;

const playerBtn = document.querySelectorAll(".btn");
console.log(playerBtn);
playerBtn.forEach(function (currentValue, currentIndex, listObj) {
  currentValue.addEventListener("click", function (e) {
    game(e.target.id);
  });
});
// playerBtn.addEventListener("click", () => {
//   alert("button works");
// });
